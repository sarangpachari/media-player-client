import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../assets/music-landing.gif";
import feature1 from "../assets/features-1.webp";
import feature2 from "../assets/features-2.webp";
import feature3 from "../assets/features-3.webp";
import { Card } from "react-bootstrap";

const Landing = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      {/* LANDING PART */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link to={"/home"} className="btn btn-info">
            Get Started
          </Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img
            className="image-fluid ms-5"
            src={landingImg}
            alt="Music Image"
          />
        </div>
      </div>
      {/* FEATURES PART */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <Card className="p-2" style={{ width: "20rem" }}>
              <Card.Img height={"250px"} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <Card className="p-2" style={{ width: "20rem" }}>
              <Card.Img height={"250px"} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <Card className="p-2" style={{ width: "20rem" }}>
              <Card.Img height={"250px"} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* LAST */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bolder">Play Everything : </span>Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam
            eligendi ab dolorum libero, nesciunt commodi sint, voluptate
            assumenda reiciendis esse deserunt! Ea, ut. Vitae pariatur quo ea
            facere molestias.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bolder">Categorise Videos : </span>Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam
            eligendi ab dolorum libero, nesciunt commodi sint, voluptate
            assumenda reiciendis esse deserunt! Ea, ut. Vitae pariatur quo ea
            facere molestias.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bolder">Managing History : </span>Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam
            eligendi ab dolorum libero, nesciunt commodi sint, voluptate
            assumenda reiciendis esse deserunt! Ea, ut. Vitae pariatur quo ea
            facere molestias.
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/6jY25GTZ9Xk"
            title="I found a Free MX Player Alternative (No Ads!) - It&#39;s Not VLC! - 2024"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
