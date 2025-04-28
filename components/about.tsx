const works = [
  {
    title: "A2A Protocol",
    url: "https://a2aprotocol.ai/",
    icon: "https://a2aprotocol.ai/favicon.svg",
    description: "Everything about A2A Protocol"
  },
  {
    title: "PI Challenge",
    url: "https://pi-challenge.com/",
    icon: "https://pi-challenge.com/favicon.ico",
    description: "Try to solve PI Challenge"
  },
  {
    title: "Pose Detector",
    url: "https://www.posedetector.com/",
    icon: "https://www.posedetector.com/favicon.svg",
    description: "Detect your pose"
  },
  {
    title: "SVG Viewer",
    url: "https://svgviewer.app",
    icon: "https://svgviewer.app/favicon.svg",
    description: "SVG Viewer & Converter"
  },
  {
    title: "QWQ32",
    url: "https://qwq32.com",
    icon: "https://qwq32.com/favicon.svg",
    description: "AI answer generator by QWQ 32B"
  },
  {
    title: "DeepBolt",
    url: "https://deepbolt.xyz",
    icon: "https://deepbolt.xyz/favicon.svg",
    description: "Turn your ideas into OnePage"
  },
  {
    title: "CurateClick",
    url: "https://curateclick.com/",
    icon: "https://curateclick.com/favicon.svg",
    description: "Navigator for Indie Developers"
  },
  {
    title: "PerplexityAI",
    url: "https://perplexityai.xyz/",
    icon: "https://perplexityai.xyz/favicon.svg",
    description: "Notes from the AI frontier"
  },
  {
    title: "IAM Music Font",
    url: "https://iammusicfont.com/",
    icon: "https://iammusicfont.com/favicon.svg",
    description: "AI Music Font Generator"
  },
  {
    title: "DeepWiki Directory",
    url: "https://deepwiki.directory/",
    icon: "https://deepwiki.directory/favicon.svg",
    description: "DeepWiki Directory"
  }
]

export default function About() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl font-serif italic mb-8">About</h1>
      <div className="max-w-prose space-y-8">
        <p className="text-gray-700 font-serif leading-relaxed">
          This is a curated collection of high-quality URLs, including Git repositories, articles, websites, and more. Below is a showcase of my work:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={work.icon}
                  alt={`${work.title} Icon`}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {work.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
