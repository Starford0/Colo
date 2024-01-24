import React, { useEffect, useState } from 'react';
import "./all.css";
import { FiDollarSign } from "react-icons/fi";
// import ElectronicsNewArrival from './ElectronicsNewArrival';
import { GetAllProduct, AddToCart } from '../Global/Features';
import { useDispatch, useSelector } from 'react-redux';




function AllNewArrival() {
  const [like, setLike] = useState(true)
  const [addedToCart, setAddedToCart] = useState([]);
  const URL = "https://fakestoreapi.com/products/"
  const  dispatch = useDispatch()
  const data = useSelector(state=> state.persistedReducer.allProduct)  

  const getData = ()=>{
    fetch(URL)
    .then((res)=> res.json())
    .then((record)=>dispatch(GetAllProduct(record)))
    .catch((err)=>console.log(err))
  }
  useEffect(() => {
    getData();
  }, []);


  const handleCart = (e, index) => {
    if (!addedToCart.includes(index)) {
      dispatch(AddToCart(e));
      setAddedToCart([...addedToCart, index]);
    }
  };

  return (
    <>

    {
      data?.map((e,index)=>(
        <div className='NewArrival' key={e.id} style={{border: (index==4 || index==9 || index==14 || index==19)? "none":null}}>
          <div className="likeButton" onClick={()=>setLike(!like)}>
            {
              !like? (<img src="src/Components/NewArrival/like.svg" alt="" />):(<img src="src/Components/NewArrival/like2.svg" alt="" />)
            }
          </div>
      <div className="NewArrivalTop">
        <img src={e.image} alt="" />
      </div>
      <div className="NewArrivalDown">
        <div className="NewArrivalCardText">
          <p className='newArrivalTitle'> {e.title} </p>
          <div className="price"><FiDollarSign /> <p> {e.price} </p> </div>
        </div>
        <div className="NewArrivalCart" onClick={()=>handleCart(e,e.id)}>ADD TO CART</div>
      </div>
    </div>
      ))
    }
    </>
  )
}

export default AllNewArrival;