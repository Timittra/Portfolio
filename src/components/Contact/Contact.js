import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faMapMarkerAlt,faPhone } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_glnh3d8', 'template_o2jmbiu', e.target, 'user_FbSnl7IqPkVsHnAFkQxsL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }


    return (
        <div  id="contact">
            <div className="container row">
                <h1>Get in Touch.</h1>
                <div className="col-md-11 col-lg-11 col-sm-12 col-xs-12">
                <form className="user-form" onSubmit={sendEmail}>
                    <input type="text" className="form-control" name="name" placeholder="Name" />
                    <br />
                    <input type="text" className="form-control" name="subject" placeholder="Subject" />
                    <br />
                    <input type="email" className="form-control" name="email" placeholder="Email" />
                    <br />
                    <textarea className="form-control" id="msg" cols='30' rows='6' name="message" placeholder="How can I help you?" />
                    <br />
                    <div className="pt-3 btn-main">
                        <input type="submit" className="btn-user msg-btn" value="Send Message" />
                    </div>
                </form>
                </div>
            </div>

            <div className="container row text-center mt-5">
        
                            <h2 style={{ fontWeight: '700' }}>Services</h2>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <FontAwesomeIcon className='icons' icon={faPaperPlane} />
                               <p>timittra.cse.aust@gmail.com</p>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <FontAwesomeIcon className='icons' icon={faMapMarkerAlt} />
                                <p>Azimpur South City Corporation, Dhaka</p>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <FontAwesomeIcon className='icons' icon={faPhone} />
                                <p>+880-1318050458</p>
                            </div>
                   
            </div>

        </div>
    );
};

export default Contact;