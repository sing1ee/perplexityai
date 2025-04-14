import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import { getIssue } from "@/lib/github"

// This would typically come from a CMS or API
const posts = [
  {
    title: "Theme Guide",
    date: "2023-01-30",
    readTime: 5,
    slug: "theme-guide",
    content: `
      <p>Retypeset is a static blog theme based on the Astro framework. Inspired by Typography, Retypeset establishes a new visual standard and reimagines the layout of all pages, creating a reading experience reminiscent of paper books, reviving the beauty of typography.</p>
      <p>This theme is designed for bloggers who appreciate clean design and typography. It focuses on readability and aesthetics, making it perfect for long-form content.</p>
    `,
  },
  {
    title: "Markdown Style Guide",
    date: "2023-03-08",
    readTime: 4,
    slug: "markdown-style-guide",
    content: `
      <p>Here are some basic Markdown syntax examples and their stylistic effects in Retypeset.</p>
      <h2>Headings</h2>
      <p>To create a heading, add number signs # in front of a word or phrase. The number of number signs you use should correspond to the heading level.</p>
      <h2>Emphasis</h2>
      <p>You can add emphasis by making text bold or italic.</p>
      <h2>Lists</h2>
      <p>You can organize items into ordered and unordered lists.</p>
    `,
  },
  {
    title: "Universal Article",
    date: "2023-03-24",
    readTime: 1,
    slug: "universal-article",
    content: `
      <p>This is a universal multilingual article with unspecified 'lang', displayed by default across all language-specific paths. Este es un artículo universal multilingüe sin definir 'lang', visible por defecto en todas las rutas de idiomas.</p>
    `,
  },
  {
    title: "Tolerance and Freedom",
    date: "2023-03-05",
    readTime: 11,
    slug: "tolerance-and-freedom",
    content: `
      <p>Seventeen or eighteen years ago, I met for the last time the historian George Lincoln Burr from my alma mater, Cornell University. We talked about how the British historian Lord Acton planned to write a history of liberty, but died before he could complete it.</p>
      <p>The conversation turned to the importance of tolerance in a free society and how difficult it can be to maintain both freedom and order.</p>
    `,
  },
  {
    title: "My Native Heath",
    date: "1921-01-01",
    readTime: 19,
    slug: "my-native-heath",
    content: `
      <p>It was bitter cold as I set forth, after an absence of more than twenty years, on a visit to my native heath over two thousand li away. It was in the deep of winter, and as I neared my destination, the sky became overcast and a cold wind blew.</p>
      <p>The landscape had changed dramatically since my childhood, yet there was something familiar in the air, a scent perhaps, that brought back memories long forgotten.</p>
    `,
  },
  {
    title: "Rashomon",
    date: "1915-11-03",
    readTime: 13,
    slug: "rashomon",
    content: `
      <p>It happened in the evening of one day. There was a prisoner who was waiting for the rain under the Rashomon gate.</p>
      <p>The story unfolds from multiple perspectives, each offering a different version of the same events, challenging our understanding of truth and human nature.</p>
    `,
  },
]

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getIssue(Number(params.slug));

    return (
      <div className="flex flex-col md:flex-row min-h-screen">
        <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
          <article>
            <h1 className="text-3xl font-serif font-semibold mb-2">{post.title}</h1>
            <div className="text-sm text-gray-500 mb-8 font-serif italic">
              {formatDate(post.created_at)}
            </div>
            <div className="prose prose-lg max-w-none font-serif">
              <div className="mb-4">
                <strong>链接：</strong>
                <a href={post.parsedContent?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  {post.parsedContent?.url}
                </a>
              </div>
              <div className="whitespace-pre-wrap">{post.parsedContent?.note}</div>
            </div>
          </article>
          <div className="mt-12 pt-6 border-t border-gray-100">
            <Link href="/posts" className="text-gray-600 hover:text-gray-900 font-serif">
              ← 返回文章列表
            </Link>
          </div>
        </main>

        <aside className="w-full md:w-64 p-8 md:p-12 bg-white">
          <div className="sticky top-8">
            <h1 className="font-serif text-3xl mb-1 text-center">Retypeset</h1>
            <p className="text-center text-gray-600 italic font-serif text-sm mb-12">Revive the beauty of typography</p>

            <nav className="mb-12">
              <ul className="space-y-4 text-center">
                <li>
                  <Link href="/posts" className="font-serif hover:text-gray-600">
                    Posts
                  </Link>
                </li>
                <li>
                  <Link href="/tags" className="font-serif hover:text-gray-600">
                    Tags
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-serif hover:text-gray-600">
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex justify-center space-x-4 mb-4">
              <Link href="/rss" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">RSS</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rss"
                >
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
              </Link>
              <Link href="https://github.com" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>

            <div className="text-xs text-center text-gray-500">
              <p>Powered by Astro and Retypeset</p>
              <p>© 2024-2025 ruizhz</p>
            </div>
          </div>
        </aside>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
