import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16">
      <div className={`w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
