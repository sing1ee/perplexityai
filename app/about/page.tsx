import Sidebar from "@/components/sidebar"

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
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
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
      </main>
      <Sidebar />
    </div>
  )
}
