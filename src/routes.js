import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

const routes = [
  { path: "/cart", component: CartPage },
  { path: "/", exact: true, component: HomePage },
];

export default routes;
