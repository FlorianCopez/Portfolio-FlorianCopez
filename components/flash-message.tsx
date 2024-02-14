import { X } from "lucide-react";
import React, { useState } from "react";

type Props = {
  status: string;
  message: string;
};

/**
 * FlashMessage component for displaying status messages.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.status - The status of the flash message (Success, Warning, Error).
 * @param {string} props.message - The message content of the flash message.
 * @returns {JSX.Element} The rendered FlashMessage component.
 */
export default function FlashMessage({ status, message }: Props) {
  // State to control the visibility of the flash message.
  const [isHidden, setIsHidden] = useState(false);

  /**
   * Determines the background color based on the provided status.
   *
   * @function
   * @private
   * @returns {string} The background color class.
   */
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
    // Render the FlashMessage component with dynamic styling based on status.
    <div
      className={`rounded-sm flex justify-between p-4 mb-8 text-white ${
        isHidden ? "hidden" : ""
      } ${getBackgroundColor()}`}
    >
      {/* Display the message content */}
      <p>{message}</p>

      {/* Button to close the flash message */}
      <button className="text-white rounded" onClick={() => setIsHidden(true)}>
        <X />
      </button>
    </div>
  );
}
