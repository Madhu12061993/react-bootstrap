import React, { useState } from 'react'
import "./LoginSignUp.css"
import email from '../Assert/email copy.jpg';
import contact from '../Assert/images.png';
import password from "../Assert/lock_locked_fill_icon_143557.webp";


type Action = string;
const logSign: Action = "Sign Up";
const LoginSignUp = () => {
    const [action, setaction] = useState(logSign);
    return (
        <div className='container col-4 d-flex flex-column align-items-center vh-100 '>
            <div className="container_child bg-white d-flex flex-column vh-100 w-100">
                <div className="header d-flex flex-column align-items-center w-100 gap-2 mt-3">
                    <div className="text fw-bolder fs-2  text-primary">{action}</div>
                    <div className="underline border border-2 border-primary w-25 "></div>
                </div>
                <div className="inputs d-flex flex-column gap-4 mt-4">
                    {action === "Login" ? <div></div> : <div className="input d-flex align-items-center m-auto bg-light h-50 w-75">
                        <img className="m-4" src={contact} alt="contact" />
                        <input className="border border-0  bg-transparent fs-5 form-control shadow-none" type="text" placeholder='Name' />
                    </div>}

                    <div className="input d-flex align-items-center m-auto bg-light  h-50 w-75">
                        <img className="m-4" src={email} alt="email" />
                        <input className="border border-0  bg-transparent fs-5 form-control shadow-none" type="email" placeholder='Email' />
                    </div>
                    <div className="input d-flex align-items-center m-auto bg-light  h-50 w-75">
                        <img className="m-4" src={password} alt="password" />
                        <input className="border border-0  bg-transparent fs-5 form-control shadow-none" type="password" placeholder='Password' />
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot_password fs-5 ps-4 m-4">Lost Password? <span className='fw-bolder text-primary ' role="button">Click Here!</span></div>}

                <div className="sibmit_container d-flex gap-2 m-auto mt-4">
                    <div className={action === "Login" ? "submit gray border border-0 bg-light px-5 py-2 align-content-center rounded-pill fw-bolder fs-5" : "submit border border-3 bg-primary px-5 py-2 rounded-pill fw-bolder fs-5 text-white"} onClick={() => { setaction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray border border-0 bg-light px-5 py-2 align-content-center rounded-pill fw-bolder fs-5" : " submitborder border-3 bg-primary px-5 py-2 rounded-pill fw-bolder fs-5 text-white"} onClick={() => { setaction("Login") }}>Login</div>
                </div>

            </div>
        </div>
    )
}

export default LoginSignUp