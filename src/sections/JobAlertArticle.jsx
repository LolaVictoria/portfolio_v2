
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import article from '../content/articles/building-a-reliable-job-alert-system.md?raw'

const JobAlertArticle = ({ onBack }) => {
  return (
    <article className="max-w-content mx-auto px-6 md:px-0 pt-16 pb-20">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-10"
      >
        <ArrowLeft size={16} />
        Back to articles
      </button>

      <div className="max-w-[680px] leading-7">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="font-serif text-2xl mt-10 mb-4">
                {children}
              </h2>
            ),
            p: ({ children }) => (
              <p className="mb-4 text-muted">{children}</p>
            ),
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt || ''}
                className="w-full h-auto rounded-lg border border-line my-8"
                loading="lazy"
              />
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-5 space-y-3 mb-6">
                {children}
              </ul>
            ),
            li: ({ children }) => <li>{children}</li>,
            code: ({ children }) => (
              <code className="rounded bg-surface-secondary px-1.5 py-1 text-sm">
                {children}
              </code>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4"
              >
                {children}
              </a>
            ),
          }}
        >
          {article}
        </ReactMarkdown>
      </div>
    </article>
  )
}

export default JobAlertArticle
