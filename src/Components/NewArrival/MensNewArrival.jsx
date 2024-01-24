import React from 'react'
import { FiDollarSign } from "react-icons/fi";
import { useEffect, useState } from 'react'

function MensNewArrival() {
  const [data,setData] = useState()
  const [like, setLike] = useState(true)
  const URL = "https://fakestoreapi.com/products/"
  const getData = ()=>{
    fetch(URL)
    .then((res)=> res.json())
    .then((record)=>setData(record))
    .catch((err)=>console.log(err))
  }
  
  useEffect(() => {
    getData();
    // test();
  }, []);
  return (
    <>
   {
      data?.map((e,index)=> e.category=="men's clothing"?(
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
        <div className="NewArrivalCart">ADD TO CART</div>
      </div>
    </div>
      ):null)
    }
   </>
  )
}

export default MensNewArrival
