import './homePage.css'
import img from '../assets/wio-8-mens-road-running-shoes-vKc7d1.jfif'
const HomePage = () => {

 
  return (
   <section className="home-container">
     <section className="wrappHome">
     <div className='left'>
      <h3>
        Shopp online in ease
      </h3>
      <p>If you want to buy your favorite sneakers, you'd better hurry</p>
     </div>
     <div className='right'>
     <div className='homeImage'>
        <img className='sneaker-image' src={img} alt="hi"/>
       </div>
     </div>
     </section>
   </section>
  );
};

export default HomePage;
