import { useEffect } from "react";
import "./homePage.css";
import img from "../assets/wio-8-mens-road-running-shoes-vKc7d1.jfif";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home-container">
      <section className="wrappHome">
        <div className="left">
          <h2 data-aos="fade-right">
            Every Purchase Will Be Made With Pleasure
          </h2>
          <p data-aos="fade-up-right">
            If you want to buy your favorite sneakers, you'd better hurry. Just
            browse through hundreds of collections
          </p>
          <Link to="/products">
            <button data-aos="fade-up-left" className="btn-home">Check Out Produccts</button>
          </Link>
        </div>
        <div className="right">
          <div className="homeImage">
            <img
              data-aos="fade-left"
              className="sneaker-image"
              src={img}
              alt="hi"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
