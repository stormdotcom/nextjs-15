import Link from "next/link";
export const dynamic = "force-dynamic";

async function getPosts(): Promise<any> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

const SSRPage = async() => {
    const posts = await getPosts();
    const renderAt = new Date().toISOString();

  return (
    <main>
        <h1>Server Side Rendering (SSR)</h1>
        <p>This is an example of a page using SSR in Next.js.</p>
        <p>{renderAt}</p>
         <br />
        <Link href="/"> back</Link>
        {posts.map((p:any) => (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <p style={{ opacity: 0.6 }}>{p.body}</p>
          </div>
        ))}
      </main>
  )
}

export default SSRPage