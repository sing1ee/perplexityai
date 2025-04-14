import Link from "next/link"
import PostsPage from "./posts/page"

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <PostsPage searchParams={searchParams} />
      </main>

      <aside className="w-full md:w-64 p-8 md:p-12 bg-white">
        <div className="sticky top-8">
          <h1 className="font-serif text-3xl mb-1 text-center">PerplexityAI</h1>
          <p className="text-center text-gray-600 italic font-serif text-sm mb-12">Notes from the AI frontier</p>

          <nav className="mb-12">
            <ul className="space-y-4 text-center">
              <li>
                <Link href="/posts" className="font-serif hover:text-gray-600">
                  Posts
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
            <p>Powered by Next.js</p>
            <p>© 2024-2025 Milo</p>
          </div>
        </div>
      </aside>
    </div>
  )
}
