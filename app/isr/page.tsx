import Link from 'next/link';
export const revalidate = 60; // revalidate every 60 seconds
const getPosts = async (): Promise<any> => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const ISRPage = async () => {
    const posts = await getPosts();
    const renderAt = new Date().toISOString();
  return (
    <main>
        <h1> Incremental Static Regeneration (ISR)</h1>
        <p>This is an example of a page using ISR in Next.js.</p>
        {renderAt}
        <br />
        <Link href="/"> Back</Link>
        <div>
          <h2>Posts:</h2>
          <ul>
            {posts.map((post: any) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
    </main>
  )
}

export default ISRPage