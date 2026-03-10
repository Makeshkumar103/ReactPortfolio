import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button className="to-top" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default BackToTop;