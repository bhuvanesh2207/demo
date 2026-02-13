import React from "react";
import celebGif from "../gif/celeb.gif";

const Success = () => {
  return (
    <div className="success-container">
      {/* Rose Petals Falling */}
      <div className="rose-petals">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>

      {/* Glowing Hearts Background */}
      <div className="hearts-bg">
        <div className="heart-glow">💖</div>
        <div className="heart-glow">💗</div>
        <div className="heart-glow">💕</div>
        <div className="heart-glow">❤️</div>
      </div>

      <div className="success-card">
        <h1 className="success-title">💖 YAY!!! 💖</h1>

        <p className="success-text">Smart decision ever 🫶</p>

        <img
          src={celebGif}
          alt="celebration"
          className="celebration-gif" 
        />

        <p className="success-subtext">
          We love building your success story.. ❤️
        </p>
      </div>
    </div>
  );
};

export default Success;