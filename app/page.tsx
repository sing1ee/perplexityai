import PostsList from "@/components/post-list"
import Sidebar from "@/components/sidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'PerplexityAI',
  description: 'Welcome to PerplexityAI - Exploring the frontiers of artificial intelligence and machine learning',
  openGraph: {
    title: 'Home | PerplexityAI',
    description: 'Welcome to PerplexityAI - Exploring the frontiers of artificial intelligence and machine learning',
    url: 'https://perplexityai.xyz',
    images: [
      {
        url: 'https://perplexityai.xyz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PerplexityAI',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home({
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
