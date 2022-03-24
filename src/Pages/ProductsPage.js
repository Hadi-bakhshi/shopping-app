import { useCart, useCartActions } from "../context/CartProvider";
import * as data from "../data";
import { checkInCart } from "../utils/checkInCart";
import toast from "react-hot-toast";

const ProductsPage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const addToCartHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart`, { duration: 2000 });
    addToLocalStorage(product);
  };

  // add to local storage
  const addToLocalStorage = (product) => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    const newData = [...data, product];
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  return (
    <main className="productList--main">
      <section className="productsList--section">
        {data.products.map((product) => {
          return (
            <section className="product--section" key={product.id}>
              <div className="productImage--container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="productDescription">
                <p>{product.name}</p>
                <p>$ {product.price}</p>
                <button
                  className="btn primary"
                  onClick={() => addToCartHandler(product)}
                >
                  {checkInCart(cart, product) ? "In cart" : "Add to Cart"}
                </button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default ProductsPage;
