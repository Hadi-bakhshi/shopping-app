import "./homecard.css";
import browserImg from "../../assets/3968608.jpg";
import supportImg from "../../assets/20943941.jpg";
import moneyBack from '../../assets/3588982.jpg'

const HomeCards = () => {
  return (
    <div className="cards-wrapper">
      {/* shipping */}
      <div className="shipping">
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="shipping-img">
          <img src={browserImg} alt="browser" />
        </div>
        <h3>Fast and Free Delivery</h3>
      </div>
    {/* end of shipping */}
    {/* support */}
      <div className="support">
      <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="support-img">
          <img src={supportImg} alt="browser" />
        </div>
        <h3>24/7 Support</h3>
      </div>
      {/* end of support */}
      {/* money back */}
      <div className="moneyback">
      <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="moneyback-img">
          <img src={moneyBack} alt="browser" />
        </div>
        <h3>Money Back Guarantee</h3>
      </div>
      {/* end of money back */}
    </div>
  );
};

export default HomeCards;
