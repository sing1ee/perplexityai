import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getIssues } from "@/lib/github"

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const pageParam = await searchParams?.page || '1';
  const currentPage = Number(pageParam);
  const pageSize = 10;
  const posts = await getIssues(currentPage, pageSize);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <h1 className="text-3xl font-serif font-semibold mb-6">所有文章</h1>
        {posts.map((post) => (
          <article key={post.number} className="mb-12">
            <Link href={`/posts/${post.number}`} className="block group">
              <h2 className="text-xl font-serif font-semibold mb-1">{post.title}</h2>
              <div className="text-xs text-gray-500 mb-3 font-serif italic">
                {formatDate(post.created_at)}
              </div>
              <p className="text-gray-700 leading-relaxed">{post.parsedContent?.note}</p>
              <div className="text-sm text-blue-600 mt-2">
                <Link href={post.parsedContent?.url} className="text-blue-600 hover:text-blue-800">
                  Read it
                </Link>
              </div>
            </Link>
          </article>
        ))}
        
        <div className="mt-8 flex justify-center gap-4">
          {currentPage > 1 && (
            <Link
              href={`/posts?page=${currentPage - 1}`}
              className="px-4 py-2 border rounded hover:bg-gray-50"
            >
              上一页
            </Link>
          )}
          {posts.length === pageSize && (
            <Link
              href={`/posts?page=${currentPage + 1}`}
              className="px-4 py-2 border rounded hover:bg-gray-50"
            >
              下一页
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}
