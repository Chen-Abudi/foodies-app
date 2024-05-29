import Link from "next/link";

function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/share">Share Meals</Link>
      <p>
        <Link href="/meals/meal-1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Meal 2</Link>
      </p>
    </main>
  );
}

export default MealsPage;
