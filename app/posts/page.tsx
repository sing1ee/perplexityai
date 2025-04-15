import Sidebar from "@/components/sidebar";
import PostsList from "@/components/post-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Explore our latest articles and research on artificial intelligence and machine learning',
  openGraph: {
    title: 'Posts | PerplexityAI',
    description: 'Explore our latest articles and research on artificial intelligence and machine learning',
    url: 'https://perplexityai.xyz/posts',
  },
  alternates: {
    canonical: '/posts',
  },
}

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:max-w-[60%] mx-auto">
      <div className="flex-1 p-8 md:p-12 md:border-r border-gray-100">
        <PostsList searchParams={searchParams} />
      </div>
      <div className="flex-1 p-8 md:p-12 border-gray-100 md:max-w-[20%]">
        <Sidebar />
      </div>
    </div>
  )
}
