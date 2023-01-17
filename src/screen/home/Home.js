import React from "react";
import homeimg from "../../assets/homepageimg.png"
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="parent_container">
          <div className="left_side">
            <h1>Re-open your<br/> restaurants</h1>

            <p>
              With a contactless <span style={{fontWeight:"bold"}}>CHEF MENU</span> .<br/> Make your restaurant a safe place to
              eat or grab-and-go by <br/> deploying a touch-free QR Code menu.
            </p>
            <button className="btn_google"><span style={{fontSize:"1rem"}}>GET IT ON</span> <br/>  <span style={{fontWeight:"bold",fontSize:"1.rem"}}>GOOGLE PLAY</span></button>
          </div>

          <div className="right_side">
          <img src={homeimg} alt="img" style={{height:"90vh"}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
