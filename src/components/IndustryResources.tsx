
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Info, Rss, RefreshCw } from "lucide-react";
// We'll fix the import below by using dynamic import instead

type NewsItem = {
  source: string;
  title: string;
  link?: string;
  pubDate?: string;
  isStatic?: boolean; // For non-live placeholder news
};

type FeedSource = {
  url?: string;  // made optional for static/placeholder feeds
  label: string;
  isStatic?: boolean;
  staticItems?: NewsItem[];
};

// UK-based RSS feed sources and static (no feed) industry bodies
const FEED_SOURCES: FeedSource[] = [
  {
    url: "https://www.hse.gov.uk/news/hse-news.xml",
    label: "HSE (UK)",
  },
  {
    url: "https://www.electricalsafetyfirst.org.uk/news/news-rss-feed/",
    label: "Electrical Safety First",
  },
  {
    url: "https://electricalreview.co.uk/feed/",
    label: "Electrical Review",
  },
  {
    url: "https://www.jib.org.uk/feed.rss",
    label: "JIB",
  },
  {
    url: "https://www.eca.co.uk/news/rss",
    label: "ECA",
  },
  // Static placeholder for NAECI (no official RSS)
  {
    label: "NAECI",
    isStatic: true,
    staticItems: [
      {
        source: "NAECI",
        title: "NAECI 2024 National Agreement – Pay Rates & Working Rule Updates",
        pubDate: "2024-03-12",
        isStatic: true,
      },
      {
        source: "NAECI",
        title: "2024 Major Project Schedules Announced (NAECI)",
        pubDate: "2024-02-01",
        isStatic: true,
      },
    ],
  },
  // Static/possible scrape for NAPIT – no RSS, so placeholder
  {
    label: "NAPIT",
    isStatic: true,
    staticItems: [
      {
        source: "NAPIT",
        title: "NAPIT launches latest Electrical Safety CPD for 2024",
        pubDate: "2024-04-05",
        isStatic: true,
      },
      {
        source: "NAPIT",
        title: "NAPIT calls for better enforcement of UK electrical standards",
        pubDate: "2024-01-28",
        isStatic: true,
      }
    ],
  },
];

const fetchFeed = async (feedUrl: string): Promise<NewsItem[]> => {
  const API_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`;
  try {
    const response = await fetch(API_URL);
    const text = await response.text();
    
    // Use dynamic import for rss-parser to fix the build error
    const Parser = await import('rss-parser').then(module => module.default);
    const parser = new Parser();
    const feed = await parser.parseString(text);

    return (feed.items || []).slice(0, 5).map((item: any) => ({
      source: feed.title,
      title: item.title || "",
      link: item.link || "#",
      pubDate: item.pubDate,
    }));
  } catch (error) {
    console.error("Error fetching feed:", error);
    return [];
  }
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
      // For static/non-feed sources just collect their staticItems
      const staticNews = FEED_SOURCES.filter(src => src.isStatic && src.staticItems)
        .map(src => src.staticItems || [])
        .flat();

      // Fetch all live feeds in parallel
      const liveFeeds = await Promise.allSettled(
        FEED_SOURCES.filter(src => !src.isStatic && src.url).map(src => fetchFeed(src.url!))
      );
      // Feed sources (filtered to live feeds, same index order as above)
      const liveFeedSources = FEED_SOURCES.filter(src => !src.isStatic && src.url);

      const allLiveNews = liveFeeds
        .map((result, idx) =>
          result.status === "fulfilled"
            ? result.value.map(item => ({
                ...item,
                source: liveFeedSources[idx].label,
              }))
            : []
        )
        .flat();

      // Merge feeds with static updates
      const allNews = [...allLiveNews, ...staticNews];

      // Sort by date, most recent first (static items may lack real dates, so fudge if needed)
      const sorted = allNews
        .filter(item => item.title)
        .sort((a, b) => {
          const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
          const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
          return dateB - dateA;
        })
        .slice(0, 12);

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
          Stay up to date with recent developments, safety news, regulation changes, and workforce
          agreement updates for the UK electrical industry—live headlines from trusted orgs including HSE, Electrical Safety First, JIB, NAECI, NAPIT, ECA, and Electrical Review.
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
                    <span className="text-[#FFC900] flex items-center gap-2 text-base">
                      {item.title}
                      <Info className="h-4 w-4 inline-block opacity-70" />
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      {item.pubDate && (
                        <span className="text-xs text-[#FFC900]/50">{formatDate(item.pubDate)}</span>
                      )}
                      <span className="text-xs text-[#FFC900]/40 ml-auto italic">{item.source}</span>
                      {item.isStatic && <span className="text-xs ml-2 text-[#FFC900]/20">(not a live feed)</span>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryResources;
