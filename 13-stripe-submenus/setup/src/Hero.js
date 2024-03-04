import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context.js";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <>
      <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>Payments infrastructure for the internet</h1>
            <p>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              mauris eget ante dapibus pretium. Nullam ut purus a quam cursus
              eleifend. Integer at justo non mi condimentum sagittis. Nulla
              facilisi. Vivamus vitae tempor sapien.
            </p>
            <button className="btn">
              Start Now
            </button>
          </article>
          <article className="hero-images">
            <img src={phoneImg} alt="phoneImg" />
          </article>
        </div>
      </section>
    </>
  );
};

export default Hero;
