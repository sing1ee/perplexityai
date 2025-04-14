import Link from "next/link"
import { formatDate } from "@/lib/utils"
import Sidebar from "@/components/sidebar"

const posts = [
  {
    title: "Theme Guide",
    date: "2023-01-30",
    readTime: 5,
    slug: "theme-guide",
    excerpt:
      "Retypeset is a static blog theme based on the Astro framework. Inspired by Typography, Retypeset establishes a new visual standard and reimagines the layout of all pages, creating a reading experience reminiscent of paper books, reviving th...",
  },
  {
    title: "Markdown Style Guide",
    date: "2023-03-08",
    readTime: 4,
    slug: "markdown-style-guide",
    excerpt:
      "Here are some basic Markdown syntax examples and their stylistic effects in Retypeset. Headings To create a heading, add number signs # in front of a word or phrase. The number of number signs you use should correspond to the heading level...",
  },
  {
    title: "Universal Article",
    date: "2023-03-24",
    readTime: 1,
    slug: "universal-article",
    excerpt:
      "This is a universal multilingual article with unspecified 'lang', displayed by default across all language-specific paths. Este es un artículo universal multilingüe sin definir 'lang', visible por defecto en todas las rutas de idiomas.",
  },
  {
    title: "Tolerance and Freedom",
    date: "2023-03-05",
    readTime: 11,
    slug: "tolerance-and-freedom",
    excerpt:
      "Seventeen or eighteen years ago, I met for the last time the historian George Lincoln Burr from my alma mater, Cornell University. We talked about how the British historian Lord Acton planned to write a history of liberty, but died before h...",
  },
  {
    title: "My Native Heath",
    date: "1921-01-01",
    readTime: 19,
    slug: "my-native-heath",
    excerpt:
      "It was bitter cold as I set forth, after an absence of more than twenty years, on a visit to my native heath over two thousand li away. It was in the deep of winter, and as I neared my destination, the sky became overcast and a cold wind b...",
  },
  {
    title: "Rashomon",
    date: "1915-11-03",
    readTime: 13,
    slug: "rashomon",
    excerpt:
      "It happened in the evening of one day. There was a prisoner who was waiting for the rain under the Rashomon gate...",
  },
]

export default function PostsPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <h1 className="text-3xl font-serif font-semibold mb-6">All Posts</h1>
        {posts.map((post, index) => (
          <article key={post.slug} className="mb-12">
            <Link href={`/posts/${post.slug}`} className="block group">
              <h2 className="text-xl font-serif font-semibold mb-1">{post.title}</h2>
              <div className="text-xs text-gray-500 mb-3 font-serif italic">
                {formatDate(post.date)} · {post.readTime} min
              </div>
              <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
            </Link>
            {index < posts.length - 1 && <div className="mt-8 mb-8 border-t border-gray-100"></div>}
          </article>
        ))}
      </main>
      <Sidebar />
    </div>
  )
}
