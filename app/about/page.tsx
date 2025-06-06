import About from "@/components/about";
import Sidebar from "@/components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about PerplexityAI and our mission to advance artificial intelligence research',
  openGraph: {
    title: 'About | PerplexityAI',
    description: 'Learn more about PerplexityAI and our mission to advance artificial intelligence research',
    url: 'https://perplexityai.xyz/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:max-w-[60%] mx-auto">
      <div className="flex-1 p-8 md:p-12 md:border-r border-gray-100">
        <About />
      </div>
      <div className="flex-1 p-8 md:p-12 border-gray-100 md:max-w-[20%]">
        <Sidebar />
      </div>
    </div>
  )
}
