import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank">
              <i className={network.className} />
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                İletişim
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Deneyim & Eğitim
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projeler
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>
              <span>{occupation}</span>
            </h3>
            <h3>{description}</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#contact">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
