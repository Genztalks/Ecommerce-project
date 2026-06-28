import { FaShoppingCart, FaSearch } from "react-icons/fa";

function Navbar({ search, setSearch, cartCount }) {
  return (
    <nav className="navbar">
      <h2>Ecommerce Store</h2>

      <div className="navbar-bottom">
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search for product, brand, category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        <button className="cart-btn" align-item="center">
          <FaShoppingCart />
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;