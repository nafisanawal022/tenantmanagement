import React from 'react';
import '../viewcomponents/style.css'
import call from "../viewimg/call.jpeg";
import email from "../viewimg/email.jpeg";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};


<ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />


function Contacts() {

    return (
        <div>
            <div>
                <br></br>
                <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', textAlign: 'center', fontSize: '50px' }}>Contact Us</h1>
            </div>
            <div style={{ display: 'flex' }}>

                <div className="container">
                    <img src={call} alt="Contact" className="image" style={{ width: '100%' }} />
                    <div className="middle">
                        <div className="text"> Phone : 987654321 </div>
                    </div>
                </div>
                <div className="container">
                    <img src={email} alt="Email" className="image" style={{ width: '100%' }} />
                    <div className="middle">
                        <div className="text"> Email : rahmanresidence@gmail.com </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
