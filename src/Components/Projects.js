import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <a href={projects.url} title={projects.title} target="_blank">
              <div className="item-wrap">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link" />
                </div>
              </div>
            </a>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Bireysel Projelerim</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
