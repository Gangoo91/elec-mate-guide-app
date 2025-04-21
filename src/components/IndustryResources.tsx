
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw } from "lucide-react";
import Parser from "rss-parser";

type NewsItem = {
  title: string;
  link: string;
  pubDate?: string;
};

const HSE_RSS_URL = "https://www.hse.gov.uk/news/hse-news.xml";

const IndustryResources: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const parser = new Parser();
      // RSS feed may require CORS proxy unless HSE supports CORS.
      // We'll use https://api.allorigins.win/raw?url= as a transparent public proxy.
      const feed = await parser.parseURL(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(HSE_RSS_URL)}`
      );
      setNews(
        (feed.items || []).slice(0, 5).map((item) => ({
          title: item.title || "",
          link: item.link || "#",
          pubDate: item.pubDate,
        }))
      );
    } catch (err: any) {
      setError("Could not load live updates from HSE. Please try again later.");
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
        <p className="text-[#FFC900]/70 mb-4 text-center">
          Get guidance on best practices, safety, and regulations from official organizations.
        </p>
        <a
          href="https://www.hse.gov.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded-lg text-lg font-bold shadow-lg transition mb-2"
          >
            Visit the UK Health &amp; Safety Executive (HSE)
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </a>
        <span className="text-xs text-[#FFC900]/60 mb-6 block">
          hse.gov.uk &ndash; Essential UK safety guidance for electrical professionals
        </span>
        <div className="w-full max-w-md">
          <div className="flex items-center mb-2 justify-between">
            <h3 className="text-lg text-[#FFC900] font-semibold">Live HSE News Updates</h3>
            <Button variant="ghost" size="sm" onClick={fetchNews} title="Refresh News" aria-label="Refresh News">
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
                  <li key={idx}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFC900] hover:underline flex items-center gap-2 text-base"
                    >
                      {item.title}
                      <ExternalLink className="h-4 w-4 inline-block opacity-70" />
                    </a>
                    {item.pubDate && (
                      <div className="text-xs text-[#FFC900]/50 ml-1">{item.pubDate.slice(0, 16)}</div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="text-xs text-[#FFC900]/60 mt-1 text-right w-full">
            Powered by HSE News Feed &mdash; <a href="https://www.hse.gov.uk/news/" target="_blank" className="hover:underline text-[#FFC900]">See all news</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryResources;

