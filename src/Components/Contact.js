import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Servet Erkan" />
          </div>
          <div className="nine columns main-col">
            <h2>İletişim</h2>
            <div className="row">
              <div className="columns contact-details">
                <p className="address">
                  <a href={"mailto:" + email} target="_top">
                    <span>{email}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
