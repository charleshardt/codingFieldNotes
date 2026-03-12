function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Panther Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const openTime = 7.6;
  const closeTime = 22;

  return (
    <footer>
      {((closeTime - openTime) / 24) * 100}% of the time, we're open ALL the
      time!
    </footer>
  );
  // Glad we don't have to do it like this:
  // return React.createElement(
  //   "footer",
  //   null,
  //   "Sixty percent of the time, we're open ALL the time!",
  // );
}

// Arrow functions are allowed, but, meh
const Test = () => {};

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Pantera</h2>
      <p>Tomato, mozzarella, bits of real panther</p>
    </div>
  );
}
