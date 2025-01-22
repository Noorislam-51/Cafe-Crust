import React, { useState } from 'react';

const SecondPage = () => {
  const coffeeMenu = [
    {
      img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Espresso",
      intro: "A strong and bold coffee with rich flavors.",
      price: "$2.99"
    },
    {
      img: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Latte",
      intro: "A smooth blend of espresso and steamed milk.",
      price: "$3.49"
    },
    {
      img: "https://images.pexels.com/photos/27524208/pexels-photo-27524208/free-photo-of-a-cup-of-coffee-with-a-latte-art-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cappuccino",
      intro: "A frothy mix of espresso, steamed milk, and foam.",
      price: "$3.79"
    },
    {
      img: "https://images.pexels.com/photos/28935033/pexels-photo-28935033/free-photo-of-warm-coffee-cup-on-wooden-table-with-plants.jpeg",
      name: "Americano",
      intro: "Espresso diluted with hot water for a stronger taste.",
      price: "$2.79"
    },
    {
      img: "https://images.pexels.com/photos/22884700/pexels-photo-22884700/free-photo-of-glass-of-coffee-with-whipped-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Mocha",
      intro: "A delightful blend of espresso, chocolate, and milk.",
      price: "$3.99"
    },
    {
      img: "https://images.pexels.com/photos/10996412/pexels-photo-10996412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Macchiato",
      intro: "Espresso topped with a small amount of steamed milk.",
      price: "$3.29"
    },
    {
      img: "https://images.pexels.com/photos/29112480/pexels-photo-29112480/free-photo-of-artful-latte-with-map-and-newspaper-on-marble-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Flat White",
      intro: "A creamy blend of espresso and steamed milk with no foam.",
      price: "$3.69"
    },
    {
      img: "https://images.pexels.com/photos/5491875/pexels-photo-5491875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Ristretto",
      intro: "A more concentrated shot of espresso with a richer taste.",
      price: "$2.99"
    }
  ];
  const bakeryMenu = [
    {
      img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Chocolate Cake",
      intro: "A rich and moist chocolate cake with a smooth frosting.",
      price: "$2.99"
    },
    {
      img: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Croissant",
      intro: "A buttery, flaky pastry perfect for breakfast.",
      price: "$3.49"
    },
    {
      img: "https://images.pexels.com/photos/27524208/pexels-photo-27524208/free-photo-of-a-cup-of-coffee-with-a-latte-art-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cinnamon Roll",
      intro: "A sweet roll filled with cinnamon and sugar, topped with icing.",
      price: "$3.79"
    },
    {
      img: "https://images.pexels.com/photos/28935033/pexels-photo-28935033/free-photo-of-warm-coffee-cup-on-wooden-table-with-plants.jpeg",
      name: "Bagel",
      intro: "A chewy, ring-shaped bread often served with cream cheese.",
      price: "$2.79"
    },
    {
      img: "https://images.pexels.com/photos/22884700/pexels-photo-22884700/free-photo-of-glass-of-coffee-with-whipped-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Muffin",
      intro: "A soft, baked treat, perfect for any time of day.",
      price: "$3.99"
    },
    {
      img: "https://images.pexels.com/photos/10996412/pexels-photo-10996412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Macaron",
      intro: "A delicate almond meringue-based confection with a creamy filling.",
      price: "$3.29"
    },
    {
      img: "https://images.pexels.com/photos/29112480/pexels-photo-29112480/free-photo-of-artful-latte-with-map-and-newspaper-on-marble-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Eclair",
      intro: "A light, puff pastry filled with cream and topped with chocolate.",
      price: "$3.69"
    },
    {
      img: "https://images.pexels.com/photos/5491875/pexels-photo-5491875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Scone",
      intro: "A lightly sweetened biscuit-like pastry often served with jam.",
      price: "$2.99"
    }
  ];


  const [showAllCoffee, setShowAllCoffee] = useState(false);
  const [showAllBakery, setShowAllBakery] = useState(false);

  const toggleCoffeeCards = () => {
    setShowAllCoffee(!showAllCoffee);
  };

  const toggleBakeryCards = () => {
    setShowAllBakery(!showAllBakery);
  };

  const displayedCoffeeCards = showAllCoffee ? coffeeMenu : coffeeMenu.slice(0, 4);
  const displayedBakeryCards = showAllBakery ? bakeryMenu : bakeryMenu.slice(0, 4);

  return (
    <>
      {/* Coffee menu */}
      <div id='CoffeePage'>
        <h3 className="menu-title">OUR SPECIAL DISH</h3>
        <div className="coffee-menu">
          <div className="coffee-menu-grid">
            {displayedCoffeeCards.map((item, index) => (
              <div key={index} className="coffee-card">
                <img src={item.img} className="coffee-card-img" alt={item.name} />
                <h2 className="coffee-card-title">{item.name}</h2>
                <h4 className="coffee-card-intro">{item.intro}</h4>
                <div className="coffee-card-footer">
                  <h2 className="coffee-card-price">{item.price}</h2>
                  <button className="add-button">Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className='showmoreButton' onClick={toggleCoffeeCards}>
          {showAllCoffee ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* Bakery menu */}
      <div id='BakeryPage'>
        <h3 className="menu-title">OUR SPECIAL BAKERY ITEMS</h3>
        <div className="bakery-menu">
          <div className="bakery-menu-grid">
            {displayedBakeryCards.map((item, index) => (
              <div key={index} className="bakery-card">
                <img src={item.img} className="bakery-card-img" alt={item.name} />
                <h2 className="bakery-card-title">{item.name}</h2>
                <h4 className="bakery-card-intro">{item.intro}</h4>
                <div className="bakery-card-footer">
                  <h2 className="bakery-card-price">{item.price}</h2>
                  <button className="add-button">Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className='showmoreButton' onClick={toggleBakeryCards}>
          {showAllBakery ? 'Show Less' : 'Show More'}
        </button>
      </div>

      <div className="icon-section">
        <div className="icon-item">
          <i className="fas fa-mug-hot"></i>
          <h1>Join in and get 15% Off!</h1>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default SecondPage;