import { NavLink, useParams } from "react-router-dom";
import "./CategoryPage.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import arr from "../list";
import { useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import ElectronicsNewArrival from "../NewArrival/ElectronicsNewArrival";

function CategoryPage() {
  const [display, setDisplay] = useState(true)
  const [showStyle, setShowStyle] = useState (true)
  const [showElectronics,setShowElectronics] = useState (false)
  const { name } = useParams();
  const [record, setRecord] = useState([]);
  const [like, setLike] = useState(true);
  const [range, setRange] = useState(0);

  const handleElectronics = ()=>{
    setShowElectronics(true)
    setDisplay(false)
    setShowStyle(false)
  }

  const URL = "https://fakestoreapi.com/products";

  const getData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setRecord(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="categoryPage">
      <div className="categoryPage-Wrapper">
        <div className="categoryPage-Header">
          <NavLink className="link" to="/">
            {" "}
            Home{" "}
          </NavLink>
          <p className="grey">{">"}</p>
          <p className="grey"> {name} </p>
        </div>
        <div className="categorySection">
          <div className="productCategory">
            <div className="CategoryContent">
              <h2 className="categoryTitle">Product Category</h2>
              <div className="product-category-content">
                {name === "electronics" ? (
                  <div className="red" >
                    <MdOutlineKeyboardDoubleArrowRight /> Electronics
                  </div>
                ) : (
                  <p onClick={handleElectronics} className={showElectronics? "red":null}>{showElectronics? <MdOutlineKeyboardDoubleArrowRight />: null}Electronics</p>
                )}
                {name === "jewelery" ? (
                  <div className={showStyle? "red":null}>
                    {showStyle? <MdOutlineKeyboardDoubleArrowRight />:null} Jeweleries
                  </div>
                ) : (
                  <p>Jeweleries</p>
                )}
                {name === "men's clothing" ? (
                  <div className="red">
                    {" "}
                    <MdOutlineKeyboardDoubleArrowRight /> Men's clothing
                  </div>
                ) : (
                  <p>Men's clothing</p>
                )}
                {name === "women's clothing" ? (
                  <div className="red">
                    {" "}
                    <MdOutlineKeyboardDoubleArrowRight /> Women's clothing
                  </div>
                ) : (
                  <p>Women's clothing</p>
                )}
              </div>
            </div>
            <div className="filterSection">
              <p className="fltPrice">Filter by Price</p>
              <div className="toggleValue">
                <FiDollarSign />
                {"0"} - <FiDollarSign />
                {range}{" "}
              </div>
              <input
                type="range"
                name=""
                id=""
                min="0"
                max="1000"
                onChange={(e) => setRange(e.target.value)}
              />
              <div className="flt-btn">
                <p>FILTER</p>
              </div>
            </div>
          </div>
          <div className="displayCategory">
            <div className="displayCategory-Layer1">
              <div className="layer1-Left">
                <select name="" id="">
                  <option value="">Default Sorting</option>
                  <option value="">Price</option>
                  <option value="">Product Name</option>
                </select>
                <select name="display" id="">
                  {/* <option className="option" value="">show</option> */}
                  <option className="option" value="">
                    show &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6
                  </option>
                  <option className="option" value="">
                    show &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;12
                  </option>
                  <option className="option" value="">
                    show &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;24
                  </option>
                </select>
              </div>
              <div className="layer1-Right"></div>
            </div>
            <div className="displayCategory-Layer2">
               { display? record?.map((e, index) =>
                e.category === `${name}` ? (
                  <div
                    className="NewArrival"
                    key={e.id}
                    style={{
                      border:
                        index == 4 || index == 9 || index == 14 || index == 19
                          ? "none"
                          : null,
                    }}
                  >
                    <div className="likeButton" onClick={() => setLike(!like)}>
                      {!like ? (
                        <img src="src/Components/NewArrival/like.svg" alt="" />
                      ) : (
                        <img src="src/Components/NewArrival/like2.svg" alt="" />
                      )}
                    </div>
                    <div className="NewArrivalTop">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="NewArrivalDown">
                      <div className="NewArrivalCardText">
                        <p className="newArrivalTitle"> {e.title} </p>
                        <div className="price">
                          <FiDollarSign /> <p> {e.price} </p>{" "}
                        </div>
                      </div>
                      <div className="NewArrivalCart">ADD TO CART</div>
                    </div>
                  </div>
                ) : null
              ): showElectronics==true? <ElectronicsNewArrival />:null}
            </div>
            <div className="displayCategory-Layer3">
              <div className="displayCategory-Layer3Wrapper">
                {/* <div className="displayCategory-Layer3Right">
                  <div className="redOne">
                    <p>1</p>
                  </div>
                </div>
                <div className="displayCategory-Layer3Left"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
