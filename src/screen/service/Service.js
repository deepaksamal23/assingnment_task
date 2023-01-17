import React from "react";
import "./service.css";
import simg1 from "../../assets/simg1.png";
import simg2 from "../../assets/simg2.png";
import simg3 from "../../assets/simg3.png";
import simg4 from "../../assets/simg4.png";
const Service = () => {
  return (
    <>
      <div className="container_SERVICES">
        <div className="header">
          <h1 >Why Contactless Menu?</h1>
        </div>

        <div className="price_card">
          <div className="price_container">
            <div className="card">
            <img src={simg1} alt="" />
              <h3 style={{color:"black"}}>Safety First</h3>
              <span className="bar"></span>
              <p>
                Limiting the use of physical menus and promoting touchless QR
                Code menus reduces the risk of virus transmission, and keeps
                your customers and employees safe.
              </p>
            </div>

            <div className="card">
              <img src={simg2} alt="" />
              <h3 style={{color:"black"}}>No App Download Required</h3>
              <span className="bar"></span>
              <p>Your diners can scan the QR Code using their phone camera</p>
            </div>

            <div className="card">
              <img src={simg3} alt="" />
              <h3 style={{color:"black"}}>Easy To Build & Update</h3>
              <span className="bar"></span>
              <p>
                Create contactless menu QR Codes under 3 minutes. Later, upload
                & save a new menu to the same QR Code.
              </p>
            </div>

            <div className="card">
              <img src={simg4} alt="" srcset="" />
              <h3 style={{color:"black"}}>Inspires The Confidence To Step Out</h3>
              <span className="bar"></span>
              <p>
                Re-align your restaurant functioning with contactless at the
                core.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
