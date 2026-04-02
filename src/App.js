import { pizzaData } from "./data";

export default function App() {
  return (
    <div className="container header">
      <Title />
      <Menu />
      <PizzaList list={pizzaData} />
      <Footer />
    </div>
  );
}

function Title() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
    </div>
  );
}

function PizzaList({ list }) {
  let pizzas = list.map((x) => {
    return <Pizza key={x.name} pizza={x} />;
  });
  return <div className="pizzas">{pizzas}</div>;
}

function Pizza({ pizza }) {
  /*
     {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
    */

  return (
    <div className={pizza.soldOut ? `pizza sold-out` : `pizza`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="order">
      <p className="footer">
        We're open from 12:00 to 22:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
