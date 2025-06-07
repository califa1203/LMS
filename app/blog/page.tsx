export default function BlogPage() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Blog</h2>
        <p className="text-lg text-gray-700 mb-6">Latest articles and updates</p>
        <a href="/blog/posts" className="bg-blue-600 text-white px-6 py-3 rounded">Read Posts</a>
      </div>
    </section>
  );
}