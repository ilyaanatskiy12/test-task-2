"use client";

import React from "react";

type Props = {
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;

  onClick?: () => void;
};

const Button = (props: Props) => {
  const { children, disabled = false, className, onClick } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-white bg-blue-500 disabled:bg-gray-400 rounded-lg hover:bg-blue-600 transition ${className}`} // TODO: improve it
    >
      {children}
    </button>
  );
};

export default Button;
