import Sidebar from "@/components/sidebar"

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <h1 className="text-3xl font-serif italic mb-8">About</h1>
        <div className="max-w-prose space-y-8">
          <p className="text-gray-700 font-serif leading-relaxed">
            This is a GitHub Issues display platform built with Next.js and TailwindCSS.
            We are committed to providing users with an elegant and efficient interface for browsing and managing GitHub Issues.
          </p>
          <div>
            <h2 className="text-xl font-serif italic mb-4 text-gray-800">Key features include:</h2>
            <ul className="space-y-3 font-serif text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                Fetching Issues data using GitHub API
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                Server-side rendering (SSR) for optimal performance and SEO
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                Responsive design for all devices
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                Elegant UI interface for great user experience
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-serif italic mb-4 text-gray-800">This project uses a modern technology stack, including:</h2>
            <ul className="space-y-3 font-serif text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                <span className="font-medium">Next.js 14</span>
                <span className="mx-2 text-gray-400">—</span>
                for server-side rendering and routing
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                <span className="font-medium">TailwindCSS</span>
                <span className="mx-2 text-gray-400">—</span>
                for styling
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                <span className="font-medium">TypeScript</span>
                <span className="mx-2 text-gray-400">—</span>
                for type safety
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400">•</span>
                <span className="font-medium">GitHub API</span>
                <span className="mx-2 text-gray-400">—</span>
                for data fetching
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Sidebar />
    </div>
  )
}
