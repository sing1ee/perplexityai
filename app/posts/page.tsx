import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getIssues } from "@/lib/github"
import Sidebar from "@/components/sidebar";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const resolvedParams = await searchParams;
  const page = resolvedParams.page || '1';
  const currentPage = Number(page);
  const pageSize = 10;
  const posts = await getIssues(currentPage, pageSize);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <h1 className="text-3xl font-serif font-serif italic mb-6">All Posts</h1>
        {posts.map((post) => (
          <article key={post.number} className="mb-12">
            <Link href={post.parsedContent?.url} target="_blank" rel="noopener noreferrer" className="block group">
              <h3 className="text-xl font-serif font-semibold mb-1">{post.title}</h3>
              <div className="text-xs text-gray-500 mb-3 font-serif italic">
                {formatDate(post.created_at)}
              </div>
              <p className="text-gray-700 leading-relaxed">{post.parsedContent?.note}</p>
            </Link>
          </article>
        ))}
        
        <nav className="mt-16 mb-8 flex justify-center items-center space-x-6 font-serif">
          {currentPage > 1 && (
            <Link
              href={`/posts?page=${currentPage - 1}`}
              className="text-gray-600 hover:text-gray-900 text-sm italic flex items-center group transition-colors duration-200"
            >
              <span className="mr-2 text-lg group-hover:transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
              Previous
            </Link>
          )}
          <span className="text-sm text-gray-400 italic">Page {currentPage}</span>
          {posts.length === pageSize && (
            <Link
              href={`/posts?page=${currentPage + 1}`}
              className="text-gray-600 hover:text-gray-900 text-sm italic flex items-center group transition-colors duration-200"
            >
              Next
              <span className="ml-2 text-lg group-hover:transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          )}
        </nav>
      </main>
      <Sidebar />
    </div>
  )
}
