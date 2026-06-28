import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductCard from "./components/ProductCard";

import shoesImage from "./assets/shoes.jpg";
import bagImage from "./assets/laptop-bag.jpg";
import watchImage from "./assets/watch.jpg";
import phoneImage from "./assets/phone.jpg";
import offerBanner from "./assets/gadget-offer-banner.jpg";
import glassesImage from "./assets/glass.jpg";
import TrimmerImage from "./assets/Trimmer.jpg";

function App() {
  const [cartItems, setCartItems] = useState(0);

  const products = [
    { id: 1, name: "Shoes", price: 999, image: shoesImage,discount: 10, rating: 4.5,oldPrice: 1099 },
    { id: 2, name: "Watches", price: 1999, image: watchImage,discount: 15, rating: 4.2,oldPrice: 2399 },
    { id: 3, name: "Bags", price: 2999, image: bagImage ,discount:25, rating: 4.8,oldPrice: 3700},
    { id: 4, name: "Phones", price: 3999, image: phoneImage,discount: 25, rating: 4.6,oldPrice: 5332 },
    { id: 5, name: "Glasses", price: 499, image: glassesImage,discount: 30, rating: 4.9,oldPrice: 713 },
    { id: 6, name: "Trimmer", price: 1299, image: TrimmerImage, rating: 4.7,discount:"" }
  ];
  return (
    <div>
      <Navbar cartItems={cartItems} />

      <main>
        <h1>My Ecommerce Store</h1>
        <p>Welcome to my Ecommerce website</p>
        <button
onClick={()=>{
document.getElementById("products").scrollIntoView({
behavior:"smooth"
})
}}
>
Shop Now
</button>

        <h3>Cart Items: {cartItems}</h3>
        <section className="banner-section">
          <img src={offerBanner} alt="Offer Banner" className="offer-banner" />
        </section>

        <div id="products" className="products">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
              rating={product.rating}
              oldPrice={product.price * (1 + product.discount / 100)}
              addToCart={() => setCartItems(cartItems + 1)}
            />
          ))}
        </div>
        <div className="features">

<h2>Why Shop With Us?</h2>

<div className="feature-box">

<div>🚚 Free Delivery</div>

<div>🔒 Secure Payment</div>

<div>💳 Easy Returns</div>

<div>⭐ Best Quality</div>

</div>

</div>
<footer>

<h3>Ecommerce Store</h3>

<p>About | Contact | Privacy Policy</p>

<p>© 2026 Ecommerce Store</p>

</footer>
      </main>
    </div>
  );
}

export default App;