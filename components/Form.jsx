import "../components/Form.css";
import {AiFillContacts} from "react-icons/ai";
import {CiMail} from "react-icons/ci";
import {BsLock} from "react-icons/bs";

const Form = () =>{
    return(
      <>
      <div className="container">
        <div className="form-container">
                 <h2>Sign Up</h2>
                <div className="form-box">
                 <div className="form-icon"><AiFillContacts/>
                 <input type="name" placeholder="name"/>
                 </div>
                </div>
                
                <div className="form-box">
                 <div className="form-icon"><CiMail/>
                 <input type="email" placeholder="E-mail"/>
                 </div>
                </div>
                  
                <div className="form-box">
                 <div className="form-icon"><BsLock/>
                 <input type="password" placeholder="password"/>
                 </div>
                </div>
                <div className="checkbox"><input type="checkbox"/><p> I read and agree to</p>
                <a href="#" className="terms"> Terms & Conditions </a>
                
                </div>

                <button type="submit" className="btn">CRREATE ACCOUNT</button>

                <div className="end-text">Already have an account <a href="#">Sign in</a></div>
        </div>
      </div>
      </>
    )
  };
  
  export default Form;