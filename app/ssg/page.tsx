import Link from "next/link";
export const dynamic = "force-static";

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

const SSGPage = async () => {
  const posts = await getPosts();
  const buildAt = new Date().toISOString();
  
  return (
    <>
      {" "}
      <main>
        <h1>Static Site Generation (SSG)</h1>
        <p>This is an example of a page using SSG in Next.js.</p>
        <p>{buildAt}</p>
         <br />
      <Link href="/"> back</Link>
      </main>
      {posts.map((p: any) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p style={{ opacity: 0.6 }}>{p.body}</p>
        </div>
      ))}
    </>
  );
};

export default SSGPage;
