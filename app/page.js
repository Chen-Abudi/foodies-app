import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Our Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share A Meal</Link>
      </p>
      <p>
        <Link href="/community">Our Community</Link>
      </p>
    </main>
  );
}
