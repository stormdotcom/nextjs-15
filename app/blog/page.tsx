import Link from 'next/link';

async function getPosts(): Promise<any> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      // default is 'force-cache' in server components; adding explicitly for clarity
      cache: "force-cache",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <main>
        <h1>Blog Page</h1>
        <p>This is a blog page.</p>
        <Link href="/"> Back</Link>
        {/* navigate to id */}
        <div >
          {posts.map((post: any) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
               <Link href={`/blog/${post.id}`}>Read →</Link>
            </div>
          ))}
        </div>
    </main>
  )
}

export default BlogPage
