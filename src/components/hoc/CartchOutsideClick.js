import React, { useRef, useEffect } from "react";

const CatchOutsideClick = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return <div ref={wrapperRef}>{children}</div>;
};

export default CatchOutsideClick;
