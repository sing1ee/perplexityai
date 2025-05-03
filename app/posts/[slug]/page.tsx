import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import { getIssue } from "@/lib/github"
import Sidebar from "@/components/sidebar";


export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getIssue(Number(params.slug));

    return (
      <div className="flex flex-col md:flex-row min-h-screen md:max-w-[80%] mx-auto">
        <div className="flex-1 p-8 md:p-12 md:border-r border-gray-100">
          <main className="flex-1">
            <article>
              <h1 className="text-3xl font-serif font-semibold mb-2">{post.title}</h1>
              <div className="text-sm text-gray-500 mb-8 font-serif italic">
                {formatDate(post.created_at)}
              </div>
              <div className="max-w-prose space-y-6">
                {post.parsedContent?.url && (
                  <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                    <strong className="block mb-1 font-medium">Link: </strong>
                    <a href={post.parsedContent.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 break-all">
                      {post.parsedContent.url}
                    </a>
                  </div>
                )}
                {post.parsedContent?.note && (
                  <div className="p-4 border border-gray-200 rounded-md bg-white">
                    <strong className="block mb-1 font-medium">Note:</strong>
                    <div className="whitespace-pre-wrap text-gray-700">{post.parsedContent.note}</div>
                  </div>
                )}
              </div>
            </article>
            <div className="mt-12 pt-6 border-t border-gray-100 max-w-prose">
              <Link href="/posts" className="text-gray-600 hover:text-gray-900 font-serif">
                ← Back to articles
              </Link>
            </div>
          </main>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto p-8 md:p-12 md:max-w-[25%]">
          <Sidebar />
        </div>

      </div>
    )
  } catch (error) {
    notFound()
  }
}
