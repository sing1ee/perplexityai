export default function About() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-12 text-gray-900">About</h1>
      <div className="max-w-prose space-y-12">
        <div className="text-center">
          <p className="text-2xl font-light text-gray-800 italic leading-relaxed">
            Everything is about taste.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Twitter</p>
              <a 
                href="https://twitter.com/chmilo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                @chmilo
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">Email</p>
              <a 
                href="mailto:zh.milo@gmail.com"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                zh.milo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
