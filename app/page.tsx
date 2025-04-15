import PostsList from "@/components/post-list"
import Sidebar from "@/components/sidebar"

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
