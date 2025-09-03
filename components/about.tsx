export default function About() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-12 text-gray-900 italic">About</h1>
      <div className="max-w-prose space-y-12">
        <div className="text-center">
          <p className="text-2xl font-light text-gray-800 italic leading-relaxed">
            Everything is about taste.
          </p>
        </div>
        
        <div className="mt-12">
          <blockquote className="reddit-embed-bq" style={{height: '500px'}} data-embed-height="659">
            <a href="https://www.reddit.com/r/Sky/comments/1n79x5a/is_that_a_gate/">is that a gate？</a>
            <br/>
            by<a href="https://www.reddit.com/user/Disastrous-Net-8300/">u/Disastrous-Net-8300</a>
            in<a href="https://www.reddit.com/r/Sky/">Sky</a>
          </blockquote>
          <script async src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
        </div>
      </div>
    </div>
  )
}
