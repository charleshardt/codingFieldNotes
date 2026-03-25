function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        // This creates a React fragment which is invisible to the HTML markup, but wraps consecutive elements within the one necessary element.
        // If you need a key, it would look like: <React.Fragment key="anything"></React.Fragment>
        <>
          <p>
            We love pizza and so will you. Authentic Italian cuisine with an unforgettable
             flair.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          We are creating an exciting new menu! Please check back here later.
        </p>
      )}
    </main>
  );
}
