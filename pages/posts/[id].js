import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Link href="/posts">Back to posts</Link>
      <h1>Static Generation</h1>
      <h1>Post Detail {id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
