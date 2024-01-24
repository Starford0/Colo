import { useState } from "react";
import ElectronicsNewArrival from "./ElectronicsNewArrival";
import JeweleryNewArrival from "./JeweleryNewArrival";
import MensNewArrival from "./MensNewArrival";
import "./NewArrival.css";
import WomenNewArrival from "./WomenNewArrival";
import AllNewArrival from "./AllNewArrival";

function NewArrival() {
  const [allArrivals, setAllArrivals] = useState(true);
  const [elec, setElec] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [jel, setJel] = useState(false);

  const handleStateElec = () => {
    setAllArrivals(false);
    setElec(true);
    setMen(false);
    setWomen(false);
    setJel(false);
  };
  const handleStateMen = () => {
    setAllArrivals(false);
    setElec(false);
    setMen(true);
    setWomen(false);
    setJel(false);
  };
  const handleStateWomen = () => {
    setAllArrivals(false);
    setElec(false);
    setMen(false);
    setWomen(true);
    setJel(false);
  };
  const handleStateJel = () => {
    setAllArrivals(false);
    setElec(false);
    setMen(false);
    setWomen(false);
    setJel(true);
  };
  const handleStateAll = () => {
    setAllArrivals(true);
    setElec(false);
    setMen(false);
    setWomen(false);
    setJel(false);
  };

  return (
    <div className="newArrival">
      <div className="newArrivalTop">
        <p>New Arrival</p>
      </div>
      <div className="newArrivalDown">
        <div
          className={`btn ${allArrivals ? "active" : null}`}
          onClick={handleStateAll}
        >
          <p>ALL</p>
        </div>
        <div
          className={`btn ${elec ? "active" : null}`}
          onClick={handleStateElec}
        >
          <p>ELECTRONICS</p>
        </div>
        <div
          className={`btn ${jel ? "active" : null}`}
          onClick={handleStateJel}
        >
          <p>JEWELERY</p>
        </div>
        <div
          className={`btn ${men ? "active" : null}`}
          onClick={handleStateMen}
        >
          <p>MEN'S CLOTHING</p>
        </div>
        <div
          className={`btn ${women ? "active" : null}`}
          onClick={handleStateWomen}
        >
          <p>WOMEN'S CLOTHING</p>
        </div>
      </div>
      <div className="newArrivalDisplay">
       <div className="newArrivalDisplayWrapper">
       {elec ? (
          <ElectronicsNewArrival />
        ) : jel ? (
          <JeweleryNewArrival />
        ) : men ? (
          <MensNewArrival />
        ) : women ? (
          <WomenNewArrival />
        ) : allArrivals ? (
          <AllNewArrival />
        ) : null}
       </div>
      </div>
    </div>
  );
}

export default NewArrival;
