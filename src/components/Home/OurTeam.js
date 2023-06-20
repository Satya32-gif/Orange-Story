import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

import i1 from "../../assets/images/team-1-370x334.jpg";
import i2 from "../../assets/images/team-2-370x334.jpg";
import i3 from "../../assets/images/team-3-370x334.jpg";

const options = {
  items: 1,
  margin: 30,
  loop: true,
  mouseDrag: true,
  stagePadding: 0,
  nav: false,
  navText: [],
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};

class OurTeam extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="title-style-3 wow fadeScale">Our Team</h2>
          {}
          <div
            // className="owl-carousel"
            data-items={1}
            data-sm-items={2}
            data-lg-items={3}
            data-margin={30}
            data-dots="true"
            data-mouse-drag="false"
          >
            <OwlCarousel {...options}>
              <article
                className="team-classic box-md wow slideInUp"
                data-wow-delay=".1s"
              >
                <a className="team-classic-figure" href="#">
                  <img src={i1} alt width={370} height={334} />
                </a>
                <h4 className="team-classic-name">
                  <a href="#">Soumya Ranjan Mohanta</a>
                </h4>
                <p className="team-classic-text">
                  Soumya is the farm owner & founder who deals with strategic
                  decisions.
                </p>
                <ul className="list-inline team-classic-list-social list-social-2 list-inline-sm">
                  <li>
                    <a className="icon mdi mdi-facebook" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-twitter" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-instagram" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-google-plus" href="#" />
                  </li>
                </ul>
              </article>
              <article className="team-classic box-md wow slideInUp">
                <a className="team-classic-figure" href="#">
                  <img src={i2} alt width={370} height={334} />
                </a>
                <h4 className="team-classic-name">
                  <a href="#">Asis Kumar Bhuyan</a>
                </h4>
                <p className="team-classic-text">
                  Asis is our sales manager who likes to promote the benefits
                  of organic food.
                </p>
                <ul className="list-inline team-classic-list-social list-social-2 list-inline-sm">
                  <li>
                    <a className="icon mdi mdi-facebook" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-twitter" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-instagram" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-google-plus" href="#" />
                  </li>
                </ul>
              </article>
              <article
                className="team-classic box-md wow slideInUp"
                data-wow-delay=".1s"
              >
                <a className="team-classic-figure" href="#">
                  <img src={i3} alt width={370} height={334} />
                </a>
                <h4 className="team-classic-name">
                  <a href="#">Samarjeet</a>
                </h4>
                <p className="team-classic-text">
                  Samarjeet is our leading fruit processing expert with over 10 years
                  of experience.
                </p>
                <ul className="list-inline team-classic-list-social list-social-2 list-inline-sm">
                  <li>
                    <a className="icon mdi mdi-facebook" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-twitter" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-instagram" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-google-plus" href="#" />
                  </li>
                </ul>
              </article>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
