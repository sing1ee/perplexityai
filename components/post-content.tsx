import { formatDate } from "@/lib/utils";
import { Issue } from "@/lib/github";

interface PostContentProps {
  post: Issue & { parsedContent?: { url?: string; note?: string } };
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl font-serif italic mb-8">{post.title}</h1>
      <div className="max-w-prose space-y-8">
        <div className="text-sm text-gray-500 mb-8 font-serif italic">
          {formatDate(post.created_at)}
        </div>
        {post.parsedContent?.url && (
          <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
            <strong className="block mb-1 font-medium">Link: </strong>
            <a href={post.parsedContent.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 break-all">
              {post.parsedContent.url}
            </a>
          </div>
        )}
        {post.parsedContent?.note && (
          <div className="p-4 border border-gray-200 rounded-md bg-white">
            <strong className="block mb-1 font-medium">Note:</strong>
            <div className="whitespace-pre-wrap text-gray-700 font-serif leading-relaxed">{post.parsedContent.note}</div>
          </div>
        )}
      </div>
    </div>
  );
} 