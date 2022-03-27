import "./homecard.css";
import browserImg from "../../assets/deliver.png";

const HomeCards = () => {
  return (
    <div className="p">
    <div className="p-browser">
      <div className="p-circle"></div>
      <div className="p-circle"></div>
      <div className="p-circle"></div>
    </div>
    <a
      href="https://github.com/Hadi-bakhshi"
      target="_blank"
      rel="noreferrer"
    >
      <img src={browserImg} alt="" className="p-img" />
    </a>
  </div>
  );
};

export default HomeCards;
