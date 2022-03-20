import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";

const routes = [
  { path: "/checkout", component: Checkout },
  { path: "/cart", component: CartPage },
  { path: "/", exact: true, component: HomePage },
];

export default routes;
