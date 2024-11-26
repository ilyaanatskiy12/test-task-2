import React from "react";

type Props = {
  name: string;
};
const Avatar = (props: Props) => {
  const { name } = props;

  return (
    <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
