import React from "react";
import img from "../../public/FemaleImg.png";

export default function () {
  return (
    <section className="Info">
      <div className="profileImg">
        <img src={img} alt="Profile Image" />
      </div>
      <div className="profile-title">Laura Smith</div>
      <div className="profile-position">Frontend Developer</div>
      <div className="profile-portfolio">laurasmith.website</div>
      <div className="profile-contact">
        <a href="#">
          <span className="email">
            <i class="fa-solid fa-envelope"></i>
            <span className="email-text">Email</span>
          </span>
        </a>
        <a href="#">
          <span className="linkedin">
            <i class="fa-brands fa-linkedin"></i>
            <span className="linkedin-text">Linkedin</span>
          </span>
        </a>
      </div>
    </section>
  );
}
