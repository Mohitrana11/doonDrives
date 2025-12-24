import React, { useState, useEffect } from "react";
import { FaBolt, FaTag, FaTimes } from "react-icons/fa";

const DiscountBanner = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 50);
  }, []);

  if (!visible) return null;

  return (
    <div className={`discount-banner ${show ? "show" : ""}`}>
      <div className="banner-left">
        <FaBolt className="bolt-icon" />
        <div>
          <h3 className="banner-title">15% OFF on Online Car Rentals 🚗</h3>
          <p className="banner-subtitle">
            Valid only on online bookings at <strong>Dun Drive</strong>
          </p>
        </div>
      </div>

      <div className="banner-right">
        <button className="book-btn">
          <FaTag /> Book Online
        </button>

        <button
          className="close-btn"
          onClick={() => setVisible(false)}
          title="Close"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
