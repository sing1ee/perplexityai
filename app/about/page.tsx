import Sidebar from "@/components/sidebar"

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <h1 className="text-3xl font-serif font-semibold mb-6">About</h1>
        <div className="prose prose-lg max-w-none font-serif">
          <p>
            Retypeset is a static blog theme inspired by Typography. It focuses on creating a beautiful reading
            experience reminiscent of paper books, with careful attention to typographic details.
          </p>
          <p>
            This theme is designed for bloggers who appreciate clean design and typography. It focuses on readability
            and aesthetics, making it perfect for long-form content.
          </p>
          <p>
            The design philosophy behind Retypeset is to create a digital reading experience that feels as comfortable
            and elegant as reading a well-designed book.
          </p>
        </div>
      </main>
      <Sidebar />
    </div>
  )
}
