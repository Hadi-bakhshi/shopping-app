import HomePage from "./Pages/HomePage";
import cartPage from "./Pages/cartPage";

const routes = [
  { path: "/cart", component: cartPage },
  { path: "/", exact: true, component: HomePage },
];

export default routes;
