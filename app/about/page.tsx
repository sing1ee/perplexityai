import Sidebar from "@/components/sidebar"

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <h1 className="text-3xl font-serif italic font-semibold mb-6">About Us</h1>
        <div className="prose prose-lg max-w-none font-serif">
          <p>
            This is a GitHub Issues display platform built with Next.js and TailwindCSS.
            We are committed to providing users with an elegant and efficient interface for browsing and managing GitHub Issues.
          </p>
          <p>
            Key features include:
          </p>
          <ul>
            <li>Fetching Issues data using GitHub API</li>
            <li>Server-side rendering (SSR) for optimal performance and SEO</li>
            <li>Responsive design for all devices</li>
            <li>Elegant UI interface for great user experience</li>
          </ul>
          <p>
            This project uses a modern technology stack, including:
          </p>
          <ul>
            <li>Next.js 14 - for server-side rendering and routing</li>
            <li>TailwindCSS - for styling</li>
            <li>TypeScript - for type safety</li>
            <li>GitHub API - for data fetching</li>
          </ul>
        </div>
      </main>
      <Sidebar />
    </div>
  )
}
