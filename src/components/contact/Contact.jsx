import React, { useState } from 'react'
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {

    const[ message, setMessage ] = useState(false);

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setMessage(true)
        emailjs.sendForm( 
            'service_u6zawya',
            'template_e0pjbif',
             e.target,
             'user_4OehDarPyFKnbKl1PPDJS' 
        ).then( res => {
            console.log(res);
        }).catch( err => {
            console.log(err);
        })
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/comunicar.png" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form 
                    onSubmit={ handleSubmit }
                >
                    <input type="text" name="user_email" placeholder="Email" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    { message && <span>Thanks, I´ll ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
