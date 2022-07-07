import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function BackToTheTop() {
  const [backToTheTop, setBackToTheTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTheTop(true);
      } else {
        setBackToTheTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTheTop && (
        <div
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "10px",
            right: "5px",
            height: "50px",
            width: "50px",
            cursor: "pointer",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              background: "#2e3192",
              padding: "0.5rem",
              borderRadius: "4px",
              border: 0,
            }}
          >
            <FaAngleDoubleUp size={20} color="white" />
          </button>
        </div>
      )}
    </div>
  );
}
