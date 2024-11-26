import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  text: string;
}

const Tooltip = (props: Props) => {
  const { text, children } = props;
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
