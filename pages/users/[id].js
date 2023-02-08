import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function User({ user }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Link href="/users">Back to users</Link>
      <h1>Server Side Rendering</h1>
      <h1>User Detail {id}</h1>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
