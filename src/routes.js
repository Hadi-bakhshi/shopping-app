import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProfilePage from "./Pages/ProfilePage";
import ProductsPage from "./Pages/ProductsPage";

const routes = [
  { path: "/profile", component: ProfilePage },
  { path: "/signup", component: SignupPage },
  { path: "/login", component: LoginPage },
  { path: "/checkout", component: Checkout },
  { path: "/cart", component: CartPage },
  { path: "/products", component: ProductsPage },
  { path: "/", exact: true, component: HomePage },
];

export default routes;
