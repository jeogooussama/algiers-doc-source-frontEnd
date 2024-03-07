import { Button } from "@mui/material";

const DownloadButton = ({ fileName, format, color }) => {
  const handleDownload = () => {
    // Logic to trigger the download, you can use window.location or fetch API
    // For now, let's simulate a download
    alert(`Downloading ${fileName}.${format}`);
  };

  return (
    <Button variant="contained" color={color} onClick={handleDownload}>
      Download {format.toUpperCase()}
    </Button>
  );
};

export default DownloadButton;
