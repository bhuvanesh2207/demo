import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMoved, setIsMoved] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [isPeeking, setIsPeeking] = useState(false);

  const moveButton = () => {
    // Increment hover count
    const newCount = hoverCount + 1;
    setHoverCount(newCount);

    // After 3 hovers, make button peek from top right
    if (newCount >= 3) {
      setIsPeeking(true);
      setIsMoved(false);
      // Reset counter for next round
      setTimeout(() => {
        setHoverCount(0);
      }, 100);
      return;
    }

    // Normal random movement (faster and more range)
    const randomX = Math.floor(Math.random() * 500) - 250; // More horizontal range
    const randomY = Math.floor(Math.random() * 300) - 150; // More vertical range

    setPosition({
      top: randomY,
      left: randomX,
    });

    setIsMoved(true);
    setIsPeeking(false);
  };

  const handlePeekHover = () => {
    // When hovering on peek button, move it back to random position
    setIsPeeking(false);
    const randomX = Math.floor(Math.random() * 500) - 250;
    const randomY = Math.floor(Math.random() * 300) - 150;
    
    setPosition({
      top: randomY,
      left: randomX,
    });
    setIsMoved(true);
  };

  return (
    <div className="home-container">
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

      <div className="home-card">
        <h1 className="question">
          Will you choose JRM infotech💕 as your Technology Partner(Valentine)?
        </h1>

        <div className="button-container">
          {/* YES BUTTON - Always Fixed */}
          <button className="yes-button" onClick={() => navigate("/success")}>
            YES
          </button>

          {/* NO BUTTON - Moves on Hover */}
          <button
            className={`no-button ${isMoved ? "moved" : ""} ${isPeeking ? "peek" : ""}`}
            onMouseEnter={isPeeking ? handlePeekHover : moveButton}
            style={
              isMoved && !isPeeking
                ? {
                    top: position.top + "px",
                    left: position.left + "px",
                  }
                : {}
            }
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;