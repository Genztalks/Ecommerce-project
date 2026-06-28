
function ProductCard({name,price,image,rating,discount,onAdd,oldPrice}) {
  return (
    <div className="card">
      <div className="image-box">
        {discount && (<span className="discount">{discount}% OFF</span>)}
      <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p className="rating">⭐{rating}</p>
      <p className="old-price">₹{oldPrice}</p>
      <p className="new-price">₹{price}</p>
      <button className="cart-btn" onClick={onAdd} align="right">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard; 