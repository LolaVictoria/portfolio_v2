
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { articles } from "../data/articles";

const Articles = ({ onOpenArticle }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      articles.map((article) => article.category || article.platform)
    ),
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const articleCategory = article.category || article.platform;

      const matchesCategory =
        category === "All" || category === articleCategory;

      const searchText =
        `${article.title} ${article.description} ${articleCategory}`.toLowerCase();

      return matchesCategory && searchText.includes(query.toLowerCase());
    });
  }, [query, category]);

  return (
    <section className="max-w-content mx-auto px-6 md:px-0 pt-16 pb-20">
      <p className="text-xs font-mono text-accent uppercase tracking-wide mb-3">
        Writing & ideas
      </p>

      <h1 className="font-serif text-3xl md:text-4xl mb-3">
        Articles
      </h1>

      <p className="text-muted mb-10 max-w-[520px]">
        Notes on the things I build, the problems I solve, and what I learn
        along the way.
      </p>

      <div className="relative max-w-md mb-6">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          className="w-full border border-line rounded-md pl-10 pr-4 py-3
            text-sm bg-transparent outline-none focus:border-ink
            transition-colors"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={`rounded-full border border-line px-4 py-2
              text-xs transition-colors ${
                category === item
                  ? "bg-ink text-paper border-ink"
                  : "text-muted hover:text-ink hover:border-ink"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="divide-y divide-line border-t border-b border-line">
        {filteredArticles.map((article) => {
          const isPersonalBlog = article.platform === "Personal Blog";

          const articleContent = (
            <>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-accent uppercase">
                    {article.category || article.platform}
                  </span>

                  {article.featured && (
                    <span className="text-xs font-mono text-muted">
                      · featured
                    </span>
                  )}

                  <span className="text-xs text-muted">
                    · {article.date}
                  </span>
                </div>

                <h2 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm text-muted max-w-[560px] leading-relaxed">
                  {article.description}
                </p>

                {article.readingTime && (
                  <p className="text-xs text-muted mt-4">
                    {article.readingTime}
                  </p>
                )}
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 mt-1 text-muted group-hover:text-ink transition-colors"
              />
            </>
          );

          if (isPersonalBlog) {
            return (
              <button
                key={article.slug}
                type="button"
                onClick={() => onOpenArticle?.(article.slug)}
                className="group flex w-full items-start justify-between gap-5
                  py-7 -mx-2 px-2 rounded-md text-left
                  hover:bg-accent-soft/40 transition-colors"
              >
                {articleContent}
              </button>
            );
          }

          return (
            <a
              key={article.slug || article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-5
                py-7 -mx-2 px-2 rounded-md
                hover:bg-accent-soft/40 transition-colors"
            >
              {articleContent}
            </a>
          );
        })}

        {filteredArticles.length === 0 && (
          <div className="py-14 text-center">
            <p className="font-serif text-xl mb-2">
              No articles found
            </p>
            <p className="text-sm text-muted">
              Try another search or category.
            </p>
          </div>
        )}
      </div>

      <div className="mt-12 border border-line rounded-md p-8 text-center">
        <h3 className="font-serif text-xl mb-2">
          Want to discuss something?
        </h3>

        <p className="text-muted text-sm mb-5">
          I'm always happy to connect and exchange ideas.
        </p>

        <a
          href="mailto:damilolaoniyide11@gmail.com"
          className="inline-flex bg-ink text-paper px-5 py-3 rounded-md
            text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Articles;
