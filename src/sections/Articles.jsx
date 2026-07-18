import { ArrowUpRight } from 'lucide-react'
import { articles } from '../data/articles'

const Articles = () => {
  return (
    <section className="max-w-content mx-auto px-6 md:px-0 pt-16 pb-20">
      <h1 className="font-serif text-3xl md:text-4xl mb-2">Articles</h1>
      <p className="text-muted mb-12 max-w-[520px]">
        Writing on frontend performance, JavaScript fundamentals, and applied AI.
      </p>

      <div className="divide-y divide-line border-t border-b border-line">
        {articles.map((article) => (
          <a
            key={article.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-6 py-6 hover:bg-accent-soft/40 transition-colors -mx-2 px-2 rounded-md"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono text-accent uppercase">
                  {article.platform}
                </span>
                {article.featured && (
                  <span className="text-xs font-mono text-muted">· featured</span>
                )}
                <span className="text-xs text-muted">· {article.date}</span>
              </div>
              <h2 className="font-serif text-lg mb-1">{article.title}</h2>
              <p className="text-sm text-muted max-w-[520px]">{article.description}</p>
            </div>
            <ArrowUpRight
              size={18}
              className="shrink-0 mt-1 text-muted group-hover:text-ink transition-colors"
            />
          </a>
        ))}
      </div>

      <div className="mt-12 border border-line rounded-md p-8 text-center">
        <h3 className="font-serif text-xl mb-2">Want to discuss any of these?</h3>
        <p className="text-muted mb-5">Let's connect and share knowledge.</p>
        <a
          href="mailto:damilolaoniyide11@gmail.com"
          className="inline-flex bg-ink text-paper px-5 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Articles
