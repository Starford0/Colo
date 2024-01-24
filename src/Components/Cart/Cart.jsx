import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DeleteFromCart } from "../Global/Features";
import "./Cart.css";
import { MdOutlineCancel } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const [value,setValue] = useState()
  const data = useSelector((state) => state.persistedReducer.myCart);
  console.log(value);

  const handleDelete = (e) => {
    dispatch(DeleteFromCart(e));
  };

  const handleQuantityChange = (newValue) => {

        setValue(newValue)
  };
  console.log("value")

  return (
    <div className="cartMain">
      <div className="pageTitle">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cartTableHeader">
        <div className="cart-products">Product</div>
        <div className="cart-price">Price</div>
        <div className="cart-quantity">Quantity</div>
        <div className="cart-subtotal">Subtotal</div>
      </div>
      <div className="cartHolder">
        {data?.map((e)=>    <div className="cartTableHeader1" key={e.id}>
        <div className="cart-products1">
          <div className="cartRemove" onClick={()=>handleDelete(e)}>
            <div className="remove-wrapper"><MdOutlineCancel /></div>
          </div>
          <div className="imageHolder">
          <img src={e.image} alt="images" />
          </div>
          <div className="cartTitle">{e.title}</div>
        </div>
        <div className="cart-price1">
          <p>${e.price}</p>
        </div>
        <div className="cart-quantity1">
          <input type="text" className="input-quantity" value={value}  onChange={(event) =>handleQuantityChange( event.target.value)} /> </div>
        <div className="cart-subtotal1">
          <p> {isNaN(value) || value === "" ? (`$${e.price}`) : (`$${value * e.price}`)}</p>
        </div>
      </div>)}
      </div>
      <div className="cart-section2">
        <div className="cart-section2Left"></div>
        <div className="cart-section2Right">
            <div className="cartCalc">Cart Totals</div>
            <div className="cartcalc2">
                <div className="cartcalc2-top">
                    <div className="cartcalc2-topLeft"><p>SubTotal</p></div>
                    <div className="cartcalc2-topRight"><p className="light-p">$300</p></div>
                </div>
                <div className="cartcalc2-down">
                <div className="cartcalc2-downLeft"><p>Total</p></div>
                    <div className="cartcalc2-downRight"><p className="thick-p">$100</p></div>
                </div>
            </div>
            <div className="payment">
                <div className="paymentBox">PROCEED TO MAKE PAYMENT</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;