import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

const routes = [
  { path: "/signup", component: SignupPage },
  { path: "/login", component: LoginPage },
  { path: "/checkout", component: Checkout },
  { path: "/cart", component: CartPage },
  { path: "/", exact: true, component: HomePage },
];

export default routes;
