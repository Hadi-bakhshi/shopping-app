import { useCartActions } from "../context/CartProvider";
import * as data from "../data";
const HomePage = () => {

  const dispatch = useCartActions();
  const addToCartHandler = (product) => {
    // console.log(product);
    dispatch({type:'ADD_TO_CART', payload:product});
  }

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
                <button className="btn primary" onClick={() => addToCartHandler(product)}>Add To Cart</button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
