

type Post = { id: number; title: string; body: string };

async function getPost(slug: string): Promise<Post > {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    // Cache setting depending on whether you want SSG/SSR
    cache: "force-cache",
  });
  if (!res.ok) return {} as Post;
  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }; 
}) {
   const { slug } = await params
  const post : Post = await getPost(slug); 


  return (
    <main style={{ padding: 24 }}>
      <p><a href="/blog">← Back to blog</a></p>
      <h1>{post.title}</h1>
      <p style={{ opacity: 0.85 }}>{post.body}</p>
      <hr style={{ margin: "24px 0" }} />
      
    </main>
  );
}
