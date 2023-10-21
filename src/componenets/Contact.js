import React from "react";
import { PopupButton} from "react-calendly";
import "../assest/css/Contact.css";
import Git from '../assest/images/github (1).svg'
import Linked from '../assest/images/linkedin.svg'
import Twit from '../assest/images/Twit.svg'
import Email from '../assest/images/email.svg'

export default function Contact() {
  return (
    <div className="contect-me-container">
      <div id="Contact" className="contact-title">
        <h1>CONTACT ME</h1>
      </div>
      <div className="socials">
        <div className="social-header">
          <h3>You Can also find me here!</h3>
        </div>
        <div className="social-text">
          <h2>Nelson Foster Jr</h2>
          <h4>Full Stack Developer</h4>
        </div>
        <div className="social-icons">
          <a href="https://github.com/MoxUFO"><div className="s-icon">
          <img src={Git} alt="#" />
          </div></a>
          <a href="https://www.linkedin.com/in/nelson-foster-jr-8281a8279/"><div className="s-icon">
          <img src={Linked} alt="#" />
          </div></a><a href="https://github.com/MoxUFO"><div className="s-icon">
          <img src={Twit} alt="#" />
          </div></a><a href="https://github.com/MoxUFO"><div className="s-icon">
          <img src={Email} alt="#" />
          </div></a>
        </div>
        <div className="calenderly">
        <div className="btn-text">
            <h4>Liked what you've seen?</h4>
        </div>

        <PopupButton
rootElement={document.getElementById("root")}
styles={{
  height: '50px',
  backgroundColor: '#353D29',
  fontWeight: 'bold',
  borderRadius: '15px',
  color: '#77835D',
  margin: '15px',
  border: '3px solid  #353D29',
}}
pageSettings={{
  backgroundColor: '#201D20',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '#353D29',
  textColor: '#77835D'
}}
text="Meeet the Me..."
url="https://calendly.com/nelson_foster_jr"
/>
       </div>
      </div>
    </div>
  );
}
