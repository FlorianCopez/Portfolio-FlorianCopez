import React from "react";
import { Button } from "./ui/button";

type Props = {
  filePath: string;
  fileName: string;
  textButton: string;
};

/**
 * DownloadFile component for handling file downloads.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.filePath - The path or URL of the file to be downloaded.
 * @param {string} props.fileName - The name to be used when saving the downloaded file.
 * @param {string} props.textButton - The text to be displayed on the download button.
 * @returns {JSX.Element} The rendered DownloadFile component.
 */
export default function DownloadFile({
  filePath,
  fileName,
  textButton,
}: Props) {
  /**
   * Handles the download action when the button is clicked.
   *
   * @function
   * @private
   * @returns {void}
   */
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    // Render a Button component that triggers the handleDownload function on click.
    <Button variant="linkCustom" onClick={handleDownload}>
      {textButton}
    </Button>
  );
}
