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
        <div style={{ marginLeft: '240px', marginTop: '10px', padding: '100px', background: '#2C2D2F', color: 'white', height: '950px' }}>
            <div className="container">
                <h1 style={{ fontWeight: '700' }}>Get in Touch.</h1>
                <form className="user-form" onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-md-7 form-group mx-auto">
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="col-md-7 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" name="subject" placeholder="Subject" />
                        </div>
                        <div className="col-md-7 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" name="email" placeholder="Email" />
                        </div>
                        <div className="col-md-7 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="msg" cols='30' rows='6' name="message" placeholder="How can I help you?" />
                        </div>
                        <div className="col-md-7 form-group pt-3 mx-auto btn-main">
                            <input type="submit" className="btn-user msg-btn" value="Send Message" />
                        </div>

                        <div className="row text-center pt-5">
                            <h2 style={{ fontWeight: '700' }}>Services</h2>
                            <div className="col-md-4">
                                <FontAwesomeIcon className='icons' icon={faPaperPlane} />
                                <h5>timittra.cse.aust@gmail.com</h5>
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon className='icons' icon={faMapMarkerAlt} />
                                <h5>Azimpur South City Corporation, Dhaka</h5>
                            </div>
                            <div className="col-md-4">
                                <FontAwesomeIcon className='icons' icon={faPhone} />
                                <h5>+880-1318050458</h5>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;