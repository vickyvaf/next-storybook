import Link from "next/link";

export default function Card({ title, link }) {
  return <Link href={link}>{title}</Link>;
}
