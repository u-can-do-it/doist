import React, { useRef, useEffect } from "react";

const CatchOutsideClick = ({ children, onOutsideClick, ...rest }) => {
  const wrapperRef = useRef();

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div ref={wrapperRef} {...rest}>
      {children}
    </div>
  );
};

export default CatchOutsideClick;
