import React from "react";
import { Link } from "react-router-dom";
import "./price.css";
import plog1 from "../../assets/plog1.png"
import plog2 from "../../assets/plog2.png"
import plog3 from "../../assets/plane3.png"
const Price = () => {
  return (
    <>
      <div className="price_card">
        <div className="price_container">
          <div className="card">
          <img src={plog1} alt="" />
            <h3 style={{color:"black"}}>-- BASIC --</h3>
            <span className="bar"></span>
            <p className="BTC">₹ 499 /-</p>
            <p>-- 365 Days --</p>
            <p>
              Basic Listing - Online Presence | QR Code Online Order | Table QR
              Code Order | Room QR Code Order | Waiter Call | Tingal App
              Registration | 10% on Order |
            </p>
            <Link  className="btn_price">
              Start
            </Link>
          </div>

          <div className="card">
          <img src={plog3} alt="" />
            <h3 style={{color:"black"}}>-- PREMIUM --</h3>
            <span className="bar"></span>
            <p className="BTC"> ₹ 9999 /-</p>
            <p>--365 Days--</p>
            <p>
              Premium Listing - Online Presence | QR Code Online Order | Table
              QR Code Order | Room QR Code Order | Waiter Call | Tingal App
              Registration | No Charges on Order | POS System - Account/ Bill |
              DM Advertise - By Tingal | Table Booking For occasion |
            </p>
            <Link  className="btn_price">
              Start
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
