import React from "react";
export default function Contact({ data }) {
  return (
    <section id="contact">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={`images/${data.image}`}
            alt="Servet Erkan"
          />
        </div>
        <div className="nine columns main-col">
          <h2>İletişim</h2>
          <div className="row">
            <div className="columns contact-details">
              <p className="address">
                <a href={"mailto:" + data.email} target="_top">
                  <span>{data.email}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
