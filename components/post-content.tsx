import { formatDate } from "@/lib/utils";
import { Issue } from "@/lib/github";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

interface PostContentProps {
  post: Issue;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 leading-tight tracking-tight">
        {post.title}
      </h1>
      <div className="text-sm text-gray-500 mb-8 font-medium">
        {formatDate(post.created_at)}
      </div>
      <div className="max-w-none prose prose-lg prose-gray dark:prose-invert prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-50 prose-pre:border prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:italic">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            // 自定义组件以优化中文显示
            p: ({ children }) => (
              <p className="mb-6 text-gray-700 leading-[1.8] text-base tracking-wide">
                {children}
              </p>
            ),
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold mb-6 mt-8 text-gray-900 leading-tight">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-bold mb-5 mt-7 text-gray-900 leading-tight">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-bold mb-4 mt-6 text-gray-900 leading-tight">
                {children}
              </h3>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-200 bg-blue-50 pl-4 py-3 my-6 italic text-gray-600">
                {children}
              </blockquote>
            ),
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <code className={className} {...props}>
                  {children}
                </code>
              ) : (
                <code className="text-pink-600 bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto my-6 text-sm">
                {children}
              </pre>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">
                {children}
              </li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {children}
              </a>
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>
      </div>
    </div>
  );
} 