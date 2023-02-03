import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import ReactModal from 'react-modal';
import { images } from '../../images';
import { toast } from 'react-toastify';
import './payment.scss';

export const Payment = () => {
  const price = localStorage.getItem('price');
  const health_plan = localStorage.getItem('health plan');

  const [showModal, setShowModal] = useState(false);
  const publicKey = 'pk_test_744831081643a15ebb74baf0d07d2a800911c7d3';
  const amount = price * 100;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onCloseRequest = () => {
    setShowModal(false);
    window.location.href = '/';
  };
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () => {
      setShowModal(true);
    },
    onClose: () => toast.error("Await, don't leave. You'd enjoy our services"),
  };

  return (
    <div className="App">
      <div className="container_pay">
        <div className="item">
          <img className="item-image" src={images.payment_pic} alt="product" />
          <div className="item-details">
            <p>Insure+ Plan: {health_plan}</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
      <ReactModal
        isOpen={showModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Transaction Successful!</h2>
        <p>
          Thank you for subscribing to health plan. Kindly expect a call on your
          mobile number within 5mins for confirmation
        </p>
        <button onClick={onCloseRequest}>Close</button>
      </ReactModal>
    </div>
  );
};
