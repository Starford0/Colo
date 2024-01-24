import "./HeroPage.css";
import slider from "./slider_1.jpg";

function HeroPage() {
  return (
    <div className="heroPage">
      <img src={slider} alt="" />
      <div className="heroPageWrapper">
        <div className="heroPageContent">
          <p className="heroPage_p">SPRING / SUMMER COLLECTION 2017</p>
          <p className="heroPage_BigText">Get up to 30% Off New Arrivals</p>
          <button>
            <p>SHOP NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
