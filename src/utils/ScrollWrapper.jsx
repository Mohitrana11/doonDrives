import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.4,
      multiplier: 2.5, // scroll speed
    });

    // Update scroll on page resize
    const handleResize = () => scroll.update();
    window.addEventListener("resize", handleResize);

    return () => {
      scroll.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollWrapper;
