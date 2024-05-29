function MealPage({ params }) {
  return (
    <main>
      <h1>Meals Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}

export default MealPage;
