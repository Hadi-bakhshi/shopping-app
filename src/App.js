import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Layout>
    </CartProvider>
  );
}

export default App;
