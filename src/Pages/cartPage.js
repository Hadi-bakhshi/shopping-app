import { useCart, useCartActions } from "../context/CartProvider";
import "./cartPage.css";
const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  if (!cart.length)
    return (
      <main className="container">
        <h2>Your cart is empty</h2>
      </main>
    );

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  return (
    <main className="container">
      <section className="cartPageCenter--container">
        <section className="cartItem--container">
          {cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="itemImage-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div>{item.name}</div>
                <div>$ {item.offPrice * item.quantity}</div>
                <div>
                  <button onClick={() => incHandler(item)}>Add</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => decHandler(item)}>Remove</button>
                </div>
              </div>
            );
          })}
        </section>
        <CartSummary total={total}/>
      </section>
    </main>
  );
};

export default CartPage;

const CartSummary = ({total}) => {
  return (
    <section className="cartSummary--container">
      <h3 style={{marginBottom:"30px"}}>Reciept</h3>
      <div className="summary-item">
        <p>Products Price :</p>
        <p>$120</p>
      </div>
      <div className="summary-item">
        <p>Products Discount :</p>
        <p>$20</p>
      </div>
      <div className="summary-item">
        <p>Total price :</p>
        <p>$100</p>
      </div>
    </section>
  );
};
