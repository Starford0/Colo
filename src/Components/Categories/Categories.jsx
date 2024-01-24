import { useState } from "react";
import "./Categories.css";
import { useEffect } from "react";
import img1 from "./banner_1.jpg"
import mensClothing from "./banner_3.jpg"
import elec from "./download.jpeg"
import jelc from "./jel.avif"
import { NavLink } from "react-router-dom";
// import img1 from "src/Components/Categories/banner_1.jpg"

function Category() {
  const [data, setData] = useState([]);

  let URL = "https://fakestoreapi.com/products/categories";

  const getData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((record) => setData(record))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
const name = "good"
  return (
    <div className="category">
      <div className="categoryWrapper">
        {data?.map((e, index) => (
          <div className="categoryCard" key={index}>
            <img src={ e=="women's clothing"? img1: e=="men's clothing"? mensClothing: e=="electronics"? elec: e=="jewelery"? jelc:null } alt="" />
            <NavLink to= {`category/${e}`} className="CategoryName">  <p>{e}</p> </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
