import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const fname = useRef();
  const lname = useRef();
  const message = useRef();
  const email = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ap20v2c",
        "template_8ccgid9",
        e.target,
        "user_TxriETA0vTyIWto4dTaIt"
      )
      .then(() => {
        alert("Message has been Sent");
        fname.current.value = "";
        lname.current.value = "";
        message.current.value = "";
        email.current.value = "";
      })
      .catch((error) => {
        alert(error.text);
      });
  }
  return (
    <section className="contact" id="contact">
      <h1>
        <span>SEND US</span> AN EMAIL
      </h1>
      <h5>WE ARE VERY RESPONSIVE TO MESSAGES</h5>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 offset-lg-1 mb-md-5 custom-color">
            <form onSubmit={handleSubmit}>
              <div className="row name-row">
                <div className="col-lg-5 col-md-6 col-12 mb-3 mb-md-0 row-field">
                  <span>
                    <i className="fa fa-user icon"></i>
                  </span>
                  <input
                    type="text"
                    className="name-field"
                    name="fname"
                    ref={fname}
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-lg-5 col-md-6 col-12 row-field">
                  <span>
                    <i className="fa fa-user icon"></i>
                  </span>
                  <input
                    type="text"
                    className="name-field"
                    name="lname"
                    ref={lname}
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="col-lg-10 col-md-12 col-12 messages-field row-field">
                  <textarea
                    name=""
                    id=""
                    cols="45"
                    rows="7"
                    name="message"
                    ref={message}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-lg-5 col-md-6 col-12 mb-3 mb-md-0 row-field">
                  <span>
                    <i className="fa fa-envelope icon"></i>
                  </span>
                  <input
                    type="email"
                    className="name-field"
                    name="email"
                    ref={email}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-lg-5 col-md-6 col-12 mb-5 mb-md-0 row-field">
                  <button value="submit" className="btn-field">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
