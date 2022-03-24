import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCart } from "../../context/CartProvider";

const CheckoutComponent = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/">Go shopping</Link>
      </main>
    );

  return (
    <main className="container">
      <section className="cartPageCenter--container">
        {auth ? (
          <section className="cartItem--container">
            <h3>Checkout details</h3>
            <p>Name : {auth.name}</p>
            <p>Email : {auth.email}</p>
            <p>Phone Number : {auth.phoneNumber}</p>
          </section>
        ) : (
          <p>please login to checkout</p>
        )}
        <section className="cartSummary--container">
          {cart &&
            cart.map((item) => {
              return (
                <div>
                  {item.name} * {item.quantity} ={" "}
                  {item.quantity * item.offPrice}
                </div>
              );
            })}
          <hr />
          <div>Total price is :$ {total}</div>
        </section>
      </section>
    </main>
  );
};

export default CheckoutComponent;
