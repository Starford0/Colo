import "./Register.css";
import React, { UseState } from "react";

function Register() {
    
  return (
    <div className="RegisterWrapper">
       <section class="container">
            <header>Registration</header>
      <form action="#" class="form">
        <div class="input-box">
          <label>fullName</label>
          <input type="text" placeholder="fullname" required onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div class="input-box">
          <label>emailAddress</label>
          <input type="text" placeholder="emailaddress" required />
          {/* {
            inputErrors.emailaddressError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
          } */}
        </div>
        <div class="input-box">
          <label>Password</label>
          <input type="text" placeholder="Password" required />
          {/* {
            inputErrors.PasswordError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
          } */}
        </div>
        <div class="input-box">
          <label>Retype Password</label>
          <input type="text" placeholder="CreatePassword" required />
          {/* {
            inputErrors.CreatePasswordError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
          } */}
        </div>

        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enterphonenumber" />
            {/* {
                inputErrors.EnterphonenumberError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null 
            } */}
          </div>
        </div>
        <div class="gender-box">
          <h3>Gender</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">male</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Female</label>
            </div>
          </div>
        </div>
        <div class="input-box address">
          <label>Business Address</label>
          <input type="text" placeholder="Business Address" required />
          <div class="column">
            <div class="select-box">
              <select>
                <option hidden>Choose a Categories</option>
                <option>Men's Clothing</option>
                <option>women's Clothing</option>
                <option>Electronics</option>
                <option>Jewel</option>
              </select>
            </div>
          </div>
        </div>
        <button>Register</button>
      </form>
    </section>
    </div>
  );
}
export default Register;
