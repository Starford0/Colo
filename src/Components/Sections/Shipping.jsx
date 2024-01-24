import "./shipping.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCash } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";

const Shippng = () => {
  return (
    <div className="bestsellerparent">
      <div className="shipping">
        <div className="hippo">
          <div className="k1">
            <CiDeliveryTruck />
          </div>
          <div className="k2">
            <h4>FREE SHIPPING</h4>
            <p>Suffered Alteration in Some Form</p>
          </div>
        </div>
        <div className="hippo">
          <div className="k1">
            <BsCash />
          </div>
          <div className="k2">
            <h4>CACH ON DELIVERY</h4>
            <p>The Internet Tend To Repeat</p>
          </div>
        </div>
        <div className="hippo">
          <div className="k1">
            <GiReturnArrow />
          </div>
          <div className="k2">
            <h4>45 DAYS RETURN</h4>
            <p>Making it Look Like Readable</p>
          </div>
        </div>
        <div className="hippo">
          <div className="k1">
            <BiTime />
          </div>
          <div className="k2">
            <h4>OPENING ALL WEEK</h4>
            <p>8AM - 09PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shippng;
