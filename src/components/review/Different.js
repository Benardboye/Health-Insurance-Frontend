import React from 'react';
import './different.scss';
import { images } from '../../images';
const Different = () => {
  return (
    <div className="we-are-different">
      <div className="container">
        <h2 className="title1 title1--mod">We're Different</h2>
        <div className="we-are-different__content">
          <div className="snappy">
            <img src={images.snappy_process} alt="" />
            <h3>What Insure+ does</h3>
            <p>
              Everyone deserves access to <br /> more affordable, high-quality <br />
              healthcare.
            </p>
          </div>
          <div className="affordable">
            <img src={images.affordable_prices} alt="" />
            <h3>Health/Wise</h3>
            <p>
            Get smart about how to <br /> maintain your health for the <br /> long term.
            </p>
          </div>
          <div className="people-first">
            <img src={images.people_first} alt="" />
            <h3> People First</h3>
            <p>
            Find out how Insure+ is boosting <br />the healthcare system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
