import React, { useEffect } from 'react';
import { useAuth } from '../context/authcontext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = () => {

  const navigate = useNavigate();

  const { DisplayPlans, plans, DisplayPlan } = useAuth();
  useEffect(() => {
    DisplayPlans();
  }, []);

  const isLoggedIn = localStorage.getItem('signature');

  const handleClick = (id) => {
    if (isLoggedIn) {
       DisplayPlan(id);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="card-container">
      <div className="title1 title1--mod">
        <h2>Health Plans</h2>
      </div>
      <div className="flex">
        {plans.map((plan) => (
          <div key={plan._id} className="card">
            <div className="shop-plan">
              <h3>{plan.plan_type}</h3>
            </div>
            <div className="card-items">
              <div className="card-content">
                <div>
                  <h3>Number of member: {plan.number_of_members}</h3>
                  <h3>Total package: #{plan.planPrice}</h3>
                </div>
                <div className="main-content">
                  <h3>Benefits</h3>
                  {plan.packages.map((elem, index) => (
                    <p key={index}>{elem}</p>
                  ))}
                  <div className="card-content">
                    <button
                      className="card-btn"
                      onClick={() => handleClick(plan._id)}
                    >
                      <Link to="/payment">Subscribe</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
