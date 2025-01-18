import React from 'react';
// import './SecondPage.css'; // Add this for external styling if needed

const SecondPage = () => {
  const coffeeMenu = [
    {
      img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Espresso",
      intro: "A strong and bold coffee with rich flavors.",
      price: "$2.99",
    },
    {
      img: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Latte",
      intro: "A smooth blend of espresso and steamed milk.",
      price: "$3.49",
    },
    {
      img: "https://images.pexels.com/photos/27524208/pexels-photo-27524208/free-photo-of-a-cup-of-coffee-with-a-latte-art-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cappuccino",
      intro: "A frothy mix of espresso, steamed milk, and foam.",
      price: "$3.79",
    },
    {
      img: "https://images.pexels.com/photos/28935033/pexels-photo-28935033/free-photo-of-warm-coffee-cup-on-wooden-table-with-plants.jpeg",
      name: "Americano",
      intro: "Espresso diluted with hot water for a stronger taste.",
      price: "$2.79",
    },
    {
      img: "https://images.pexels.com/photos/22884700/pexels-photo-22884700/free-photo-of-glass-of-coffee-with-whipped-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Mocha",
      intro: "A delightful blend of espresso, chocolate, and milk.",
      price: "$3.99",
    },
    {
      img: "https://images.pexels.com/photos/10996412/pexels-photo-10996412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Macchiato",
      intro: "Espresso topped with a small amount of steamed milk.",
      price: "$3.29",
    },
    {
      img: "https://images.pexels.com/photos/29112480/pexels-photo-29112480/free-photo-of-artful-latte-with-map-and-newspaper-on-marble-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Flat White",
      intro: "A creamy blend of espresso and steamed milk with no foam.",
      price: "$3.69",
    },
    {
      img: "https://images.pexels.com/photos/5491875/pexels-photo-5491875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Ristretto",
      intro: "A more concentrated shot of espresso with a richer taste.",
      price: "$2.99",
    },
  ];

  return (
    <>
      <div className="special-dish-container">
        <h3 className="special-dish-title">Our Special Dishes</h3>
        
        <div className="coffee-menu">
          {coffeeMenu.map((item, index) => (
            <div key={index} className="coffee-card">
              <img src={item.img} alt={item.name} className="coffee-card-img" />
              <h2 className="coffee-card-title">{item.name}</h2>
              <p className="coffee-card-intro">{item.intro}</p>
              <p className="coffee-card-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondPage;
