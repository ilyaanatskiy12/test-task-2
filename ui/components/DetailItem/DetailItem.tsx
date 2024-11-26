"use client";

import React from "react";

type Props = {
  label: string;
  value: React.ReactNode;
};

const DetailItem = (props: Props) => {
  const { label, value } = props;

  return (
    <p className="text-lg text-gray-600 dark:text-gray-400">
      <strong className="text-gray-900 dark:text-gray-100">{label}:</strong>{" "}
      {value}
    </p>
  );
};

export default DetailItem;
