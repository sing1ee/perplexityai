import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="text-center max-w-prose space-y-8">
        <h1 className="text-6xl md:text-8xl font-serif italic mb-8 animate-pulse">404</h1>
        <p className="text-gray-700 font-serif leading-relaxed text-xl">
          Page not found
        </p>
        
        <div className="pt-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 text-sm italic flex items-center justify-center group transition-colors duration-200"
          >
            <span className="mr-2 text-lg group-hover:transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 