import Link from "next/link"
import { notFound } from "next/navigation"
import { getIssue } from "@/lib/github"
import Sidebar from "@/components/sidebar";
import PostContent from "@/components/post-content";

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getIssue(Number(params.slug));

    return (
      <div className="flex flex-col md:flex-row min-h-screen md:max-w-[60%] mx-auto">
        <div className="flex-1 p-8 md:p-12 md:border-r border-gray-100">
          <PostContent post={post} />
          <div className="mt-12 pt-6 border-t border-gray-100">
            <Link href="/posts" className="text-gray-600 hover:text-gray-900 font-serif italic">
              ← Back to articles
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto p-8 md:p-12 md:max-w-[20%]">
          <Sidebar />
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
