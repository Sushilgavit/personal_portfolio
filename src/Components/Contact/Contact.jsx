import React from "react";
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact =() =>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "85246ced-8f56-4606-b195-4f6333926fd6");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return(
        <div  id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p> Feel free to reach out and get in touch. Whether you have a project in mind, want to discuss collaboration opportunities, or simply have a question, I'm here to connect. Your ideas and inquiries are important to me, and I look forward to hearing from you.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                               <img src={mail_icon} alt=""/> <p>sushilgavit222@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                                <img src={call_icon} alt=""/> <p>+91 8421588939</p>
                        </div>
                        <div className="contact-detail">
                                <img src={location_icon} alt=""/> <p>Mumbai </p>
                        </div>
                    </div>
                </div>
                <form  onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name ='email'/>
                    <label htmlFor="">write your message here</label>
                    <textarea name="message"  rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit"> Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact