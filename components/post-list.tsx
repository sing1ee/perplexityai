import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getIssues } from "@/lib/github"

export default async function PostsList({
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
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-2xl sm:text-3xl font-serif italic mb-4 sm:mb-6">All Posts</h1>
      {posts.map((post) => (
        <article key={post.number} className="mb-8 sm:mb-12">
          <Link href={post.parsedContent?.url} target="_blank" rel="noopener noreferrer" className="block group">
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1">{post.title}</h3>
            <div className="text-xs text-gray-500 mb-2 sm:mb-3 font-serif italic">
              {formatDate(post.created_at)}
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{post.parsedContent?.note.slice(0, 200)}...</p>
          </Link>
        </article>
      ))}
      
      <nav className="mt-12 sm:mt-16 mb-6 sm:mb-8 flex justify-center items-center space-x-4 sm:space-x-6 font-serif">
        {currentPage > 1 && (
          <Link
            href={`/posts?page=${currentPage - 1}`}
            className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm italic flex items-center group transition-colors duration-200"
          >
            <span className="mr-1 sm:mr-2 text-base sm:text-lg group-hover:transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Previous
          </Link>
        )}
        <span className="text-xs sm:text-sm text-gray-400 italic">Page {currentPage}</span>
        {posts.length === pageSize && (
          <Link
            href={`/posts?page=${currentPage + 1}`}
            className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm italic flex items-center group transition-colors duration-200"
          >
            Next
            <span className="ml-1 sm:ml-2 text-base sm:text-lg group-hover:transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        )}
      </nav>
    </div>
  )
}
