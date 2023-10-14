const Events = () => {
  const handleClick = (a, b) => {
    a = Math.round(a);
    b = Math.round(a);
    alert(a + b);
  };
  return (
    <div>
      <h3>Events Handler</h3>
      <button onClick={() => handleClick(2, 6)}>CLick me</button>
    </div>
  );
};

export default Events;
