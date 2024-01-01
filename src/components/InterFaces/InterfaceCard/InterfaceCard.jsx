// InterfaceCard.jsx
/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const InterfaceCard = ({ id, title, language }) => {
  const location = useLocation();
  const currentLangParam = location.pathname.split("/")[1];
  return (
    <Link component={RouterLink} to={`/${currentLangParam}/interfaces/${id}`} underline="none">
            <Card
        sx={{
          borderRadius: 8,
          height: "100%",
          boxShadow: 4,
          position: "relative",
          overflow: "hidden",
          border: "2px solid #2e7d32", // Green border
          transition: "border-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            borderColor: "#1976D2", // Updated hover color to a shade of blue
            boxShadow: "0 0 10px #1976D2", // Updated hover shadow color
            "& .text-block": {
              opacity: 1,
            },
          },
        }}
      >
        {/* Use https://via.placeholder.com for image */}
        <Box
          component="img"
          alt={title}
          src={`https://via.placeholder.com/200x300?text=${title}`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 8,
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <CardContent sx={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
          <Box
            className="text-block"
            sx={{
              color: "black",
              padding: "10px",
              borderRadius: 8,
              opacity: 0,
              transition: "opacity 0.3s",
              backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
            }}
          >
            <Typography variant="h6" color="#2e7d32"> {/* Green text color */}
              {title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Language: {language}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InterfaceCard;
