// Destructuring the props into its components is cleaner. It also
// allows you to see immediately what you are receiving.

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}
