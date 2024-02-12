import React from "react";
import { Button } from "./ui/button";

type Props = {
  filePath: string;
  fileName: string;
  textButton: string;
};

export default function DownloadFile({
  filePath,
  fileName,
  textButton,
}: Props) {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  return (
    <Button variant="linkCustom" onClick={handleDownload}>
      {textButton}
    </Button>
  );
}
