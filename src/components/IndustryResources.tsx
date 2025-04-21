
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Rss, Info } from "lucide-react";

// Update the NewsItem and FeedSource types
type NewsItem = {
  source: string;
  title: string;
  link: string;
  pubDate?: string;
};

type FeedSource = {
  url: string;
  label: string;
};

// Only UK-based RSS feed sources: HSE (UK), Electrical Safety First, Electrical Review
const FEED_SOURCES: FeedSource[] = [
  {
    url: "https://www.hse.gov.uk/news/hse-news.xml",
    label: "HSE (UK)",
  },
  {
    url: "https://www.electricalsafetyfirst.org.uk/news/news-rss-feed/", // Electrical Safety First News
    label: "Electrical Safety First",
  },
  {
    url: "https://electricalreview.co.uk/feed/", // Electrical Review industry news
    label: "Electrical Review",
  },
];

const fetchFeed = async (feedUrl: string): Promise<NewsItem[]> => {
  const API_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
  const response = await fetch(API_URL);
  const text = await response.text();
  const Parser = (await import("rss-parser")).default;
  const parser = new Parser();
  const feed = await parser.parseString(text);

  return (feed.items || []).slice(0, 5).map((item: any) => ({
    source: feed.title,
    title: item.title || "",
    link: item.link || "#",
    pubDate: item.pubDate,
  }));
};

const formatDate = (pubDate?: string): string => {
  try {
    if (!pubDate) return "";
    const date = new Date(pubDate);
    return isNaN(date.getTime())
      ? pubDate.slice(0, 16)
      : date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return "";
  }
};

const IndustryResources: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch all feeds in parallel
      const allNews = (
        await Promise.allSettled(FEED_SOURCES.map(src => fetchFeed(src.url)))
      )
        .map((result, idx) =>
          result.status === "fulfilled"
            ? result.value.map(item => ({ ...item, source: FEED_SOURCES[idx].label }))
            : []
        )
        .flat();

      // Sort by date (most recent first)
      const sorted = allNews
        .filter(item => item.title && item.link)
        .sort((a, b) => {
          const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
          const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
          return dateB - dateA;
        })
        .slice(0, 10);

      setNews(sorted);
    } catch (err: any) {
      setError("Could not load live news updates. Please try again later.");
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mt-10 animate-on-load opacity-0" style={{ animationDelay: "900ms" }}>
      <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#FFC900] mb-3">Industry Resources</h2>
        <p className="text-[#FFC900]/70 mb-7 text-center">
          Stay up to date with recent developments, safety news, and regulation changes for the UK electrical industry—live updates from trusted organisations like HSE and Electrical Safety First.
        </p>
        <div className="w-full max-w-md">
          <div className="flex items-center mb-2 justify-between">
            <h3 className="text-lg text-[#FFC900] font-semibold flex items-center gap-1">
              <Rss className="h-4 w-4 mr-1" />
              Live UK Industry News
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchNews}
              title="Refresh News"
              aria-label="Refresh News"
            >
              <RefreshCw className={loading ? "animate-spin" : ""} />
            </Button>
          </div>
          <div className="rounded-lg bg-[#191a15] p-3 border border-[#FFC90022] min-h-[70px]">
            {loading && (
              <div className="text-[#FFC900]/70 text-center py-6 text-sm">Loading news…</div>
            )}
            {error && (
              <div className="bg-[#ffc90022] rounded px-3 py-2 text-[#FFC900] text-sm text-center">
                {error}
              </div>
            )}
            {!loading && !error && (
              <ul className="space-y-2">
                {news.map((item, idx) => (
                  <li key={idx} className="flex flex-col">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFC900] hover:underline flex items-center gap-2 text-base"
                    >
                      {item.title}
                      <Info className="h-4 w-4 inline-block opacity-70" />
                    </a>
                    <div className="flex items-center gap-2 mt-0.5">
                      {item.pubDate && (
                        <span className="text-xs text-[#FFC900]/50">{formatDate(item.pubDate)}</span>
                      )}
                      <span className="text-xs text-[#FFC900]/40 ml-auto italic">{item.source}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Removed the "Sources" links section */}
        </div>
      </div>
    </div>
  );
};

export default IndustryResources;

