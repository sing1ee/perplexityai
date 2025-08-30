import Sidebar from "@/components/sidebar";
import PostsList from "@/components/post-list";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { page?: string }
}): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const page = resolvedParams.page || '1';
  const canonicalUrl = page === '1' ? '/posts' : `/posts?page=${page}`;

  return {
    title: 'Posts',
    description: 'Explore our latest articles and research on artificial intelligence and machine learning',
    openGraph: {
      title: 'Posts | PerplexityAI',
      description: 'Explore our latest articles and research on artificial intelligence and machine learning',
      url: `https://perplexityai.xyz${canonicalUrl}`,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
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