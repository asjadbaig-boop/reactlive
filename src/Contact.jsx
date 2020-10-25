import React, { useState } from "react";

import "./App.css";

function Contact() {
  const [state, setstate] = useState({
    Fullname: "",
    Lastname: "",
    Phonenumber: "",
    Emailid: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setstate((prevvalue) => {
      return { ...prevvalue, [name]: value };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `${state.Fullname} ${state.Lastname} is your full name and your email id is ${state.Emailid} along with your contact number ${state.Phonenumber}.Please dont Worry we dont have a database attached to this website so your info is going nowhere `
    );
  };
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center">Contact us </h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div>
              <form onSubmit={formSubmit}>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="Fullname"
                    value={state.Fullname}
                    onChange={InputEvent}
                    placeholder="Your full name please"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="Lastname"
                    value={state.Lastname}
                    onChange={InputEvent}
                    placeholder="Your Last Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">
                    Your Contact Number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="Phonenumber"
                    value={state.Phonenumber}
                    onChange={InputEvent}
                    placeholder="1234567890"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Your Email id</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="Emailid"
                    value={state.Emailid}
                    onChange={InputEvent}
                    placeholder="Enter your email id"
                  />
                </div>
                <br></br>
                <div className="col-12">
                  <button className="btn btn-outline-warning" type="submit">
                    submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
