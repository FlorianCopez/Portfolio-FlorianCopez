import { X } from "lucide-react";
import React, { useState } from "react";

type Props = {
  status: string;
  message: string;
};

export default function FlashMessage({ status, message }: Props) {
  const [isHidden, setIsHidden] = useState(false);

  const getBackgroundColor = () => {
    switch (status) {
      case "Success":
        return "bg-green-500";
      case "Warning":
        return "bg-orange-500";
      case "Error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`rounded-sm flex justify-between p-4 mb-8 text-white ${
        isHidden ? "hidden" : ""
      } ${getBackgroundColor()}`}
    >
      <p>{message}</p>
      <button className=" text-black rounded" onClick={() => setIsHidden(true)}>
        <X />
      </button>
    </div>
  );
}
