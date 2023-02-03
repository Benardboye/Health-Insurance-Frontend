import React, {useState} from "react";
import ReactModal from 'react-modal';
import "./banner.scss";
import { images } from "../../images";
const Banner = () => {

  const [showModal, setShowModal] = useState(false)

  const openModal =() =>{
    setShowModal(true)
  }
  return (
    <div className="">
      <div className="banner container">
        <picture>
          <source media="(max-width:767px )" srcSet={images.works_mobile} />
          <img src={images.works_desktop} alt="" />
        </picture>
        <div className="banner__wrapper">
          <div className="title">
            <h2 className="title1">
              Find Out More <br /> About How We Work
            </h2>
          </div>
          <div className="button">
            <button className="btn" onClick={openModal}>How we work</button>
          </div>
        </div>
      </div>
      <ReactModal
      isOpen={showModal}
      className="Modal-about"
      overlayClassName="Overlay-about"
      >
       <h2>Here’s how we work for you</h2>
       <h3>A provider that’ll help you 24/7</h3>
        <p>
        Talk to a provider within minutes at any time for $0 — all from the comfort of home.
        </p>
        <h3>A Care Team that makes things just right</h3>
        <p>
        A team of care guides and a nurse who can help answer questions and help you save money.
        </p>
        <h3>Connect to the right kind of care</h3>
        <p>
        Access providers that understand your language, race, ethnicity, and health situation.
        </p>
    <button onClick={() =>  setShowModal(false)} className="close-about">Close</button>
      </ReactModal>
    </div>
  );
};

export default Banner;
