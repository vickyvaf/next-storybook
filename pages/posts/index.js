import Head from "next/head";
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Link href="/">Back to home</Link>
      <h1>Static Generation</h1>
      <h1>Posts</h1>

      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <Link href={"/posts/" + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
