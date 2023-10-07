import React from "react";

const SpanTitle = ({ children }) => {
  return (
    <div className="text-sm text-title-sm text-center mb-8 sm:mb-2 sm:text-left dark:text-darkP">
      {children}
    </div>
  );
};

export default SpanTitle;
