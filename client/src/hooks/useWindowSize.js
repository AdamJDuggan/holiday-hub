import { useState, useEffect } from "react";

function useWindowSize(small = 640, medium = 768, large = 1024, xl = 1280) {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmall = width <= small;
  const isMedium = width <= medium;
  const isLarge = width <= large;
  const isXL = width <= xl;

  return { width, height, isSmall, isMedium, isLarge, isXL };
}

export default useWindowSize;
