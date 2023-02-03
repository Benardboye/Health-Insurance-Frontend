import React from 'react';
import './hero.scss';
import { images } from '../../images';
const Hero = () => {
  const user = localStorage.getItem("user")
  const handleClick = () => {
    window.location.href = `https://wa.me/08134488510?text=Hello, my name is ${user}. I want to book a session`;
  };

  return (
    <div className="hero">
      <div className="right-top-image">
        <picture>
          <source
            media="(max-width:767px)"
            srcSet={images.intro_right_mobile}
          />
          <img src={images.intro_right} alt="" />
        </picture>
      </div>
      <div className="hero__wrapper container">
        <div className="hero__content">
          <h1 className="title1">
            Health insurance <br /> that actually works for you.
          </h1>
          <p className="hero__text">
            We’re not just your health insurance company. We stand by your side
            no matter the question or the issue. Let’s take the first step and
            get to know each other.
          </p>
          <button className="btn" onClick={()=>handleClick()}>Book a session</button>
        </div>
        <div className="hero__image">
          <picture>
            <source media="(max-width:991px)" srcSet={images.intro_desktop} />
            <img src={images.intro_desktop} alt="" />
          </picture>
        </div>
      </div>
      <div className="left-bottom-image">
        <picture>
          <source media="(max-width:767px)" srcSet={images.intro_left_mobile} />
          <img src={images.intro_left} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
