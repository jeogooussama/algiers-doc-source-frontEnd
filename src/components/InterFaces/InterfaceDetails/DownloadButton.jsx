/* eslint-disable react/prop-types */
// DownloadButton.jsx
import { Button } from "@mui/material";

const DownloadButton = ({ fileName }) => {
  const handleDownload = () => {
    // Logic to trigger the download, you can use window.location or fetch API
    // For now, let's simulate a download
    alert(`Downloading ${fileName}`);
  };

  return (
    <Button variant="contained" color="success" onClick={handleDownload}>
      Download {fileName}
    </Button>
  );
};

export default DownloadButton;
