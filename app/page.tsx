import Link from "next/link";
export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1> Interview Preparation</h1>

      <div>
        <Link href="/ssg">Go to SSG Page</Link>
      </div>
      <div>
        <Link href="/ssr">Go to SSR Page</Link>
      </div>
      <div>
        <Link href="/isr">Go to ISR Page</Link>
      </div>
      <div>
        <Link href="/blog">Go to Blog Slugs Page</Link>
      </div>
    </div>
  );
}
