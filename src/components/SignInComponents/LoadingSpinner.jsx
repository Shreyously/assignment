import React from 'react';

const LoadingSpinner = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#171717] border-t-transparent"></div>
      <span>{text}</span>
    </div>
  );
};

export default LoadingSpinner;