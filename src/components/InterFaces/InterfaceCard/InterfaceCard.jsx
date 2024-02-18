// InterfaceCard.jsx
/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const InterfaceCard = ({ _id, title, language, image }) => {
  return (
    <Link component={RouterLink} to={`/interfaces/${_id}`} underline="none">
      <Card
        sx={{
          borderRadius: 8,
          boxShadow: 4,
          position: "relative",
          height: "360px", // Changed height to auto for flexibility
          width: "250px", // Set minimum height to ensure the card is not too small
          overflow: "hidden",
          border: "2px solid #2e7d32",
          transition: "border-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            borderColor: "#2e7d32",
            boxShadow: "0 0 10px #2e7d32",
            "& .text-block": {
              opacity: 1,
            },
          },
          "@media (max-width: 600px)": {
            // On small screens, make the card smaller
            width: "190px", // You can adjust this value as needed
            height: "240px",
            p: 1, // Let the height adjust automatically
          },
        }}
      >
        <Box
          component="img"
          alt={title}
          srcSet={image} // Use the actual image URL from your API response
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0", // Rounded corners only at the top
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <CardContent
          sx={{ padding: "12px" }} // Add padding to the content
        >
          <Typography variant="h6" color="#21BF73">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="#21BF73">
            اللغة: {language}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InterfaceCard;
