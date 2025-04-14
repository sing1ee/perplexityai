import PostsPage from "./posts/page"

export default function Home({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <main className="flex-1 p-8 md:p-12 border-r border-gray-100">
        <PostsPage searchParams={searchParams} />
      </main>
    </div>
  )
}
