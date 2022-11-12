import { FaAngleDoubleUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function BackToTheTop() {
  const [backToTheTop, setBackToTheTop] = useState(false);
  const { theme } = useTheme();
  const [mounted, setIsMounted] = useState(false);

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

  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="z-0">
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
            style={
              theme === "dark"
                ? {
                    cursor: "pointer",
                    background: "#FFBC00",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: 0,
                  }
                : {
                    cursor: "pointer",
                    background: "#4169E1",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: 0,
                  }
            }
          >
            <FaAngleDoubleUp
              size={20}
              color={theme === "dark" ? "black" : "white"}
            />
          </button>
        </div>
      )}
    </div>
  );
}
