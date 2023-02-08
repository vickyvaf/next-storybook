import Head from "next/head";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Link href="/">Back to home</Link>
      <h1>Server Side Rendering</h1>
      <h1>Users</h1>
      <ul>
        {users.map((post, i) => (
          <li key={i}>
            <Link href={"/users/" + post.id}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
