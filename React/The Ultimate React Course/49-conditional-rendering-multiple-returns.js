function Footer() {
  const hour = new Date().getHours();
  const openTime = 17.6;
  const closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;
  console.log(isOpen);

  // Conditional rendering with an early return.
  if (!isOpen) return <p>We open at {Math.round(openTime)}:00</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open until {closeTime}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          {Math.round(((closeTime - openTime) / 24) * 100)}% of the time, we're
          open ALL the time! (Opens at {Math.round(openTime)}:00)
        </p>
      )}
    </footer>
  );
}
