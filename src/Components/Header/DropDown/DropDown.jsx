import "./DropDown.css";
import { PiSignInBold } from "react-icons/pi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Link } from "react-router-dom";

function DropDown({setdropDown}) {
    return (
        <div className="dropDown" onMouseLeave={()=> setdropDown(false)}>
            <div className="dropDown-Layer1">
            <PiSignInBold /> <p>Sign in</p>
            </div>
            <div className="hr"></div>
            <div className="dropDown-Layer1">
            <MdPersonAddAlt1 /> <p><Link to="register">REGISTER</Link></p> 
            </div>
        </div>
    );
}

export default DropDown;