import * as data from "../data";
const HomePage = () => {
  return (
    <main className="productList--main">
      <section className="productsList--section">
        {data.products.map((product) => {
          return (
            <section className="product--section">
              <div className="productImage--container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="productDescription">
                <p>{product.name}</p>
                <p>$ {product.price}</p>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
