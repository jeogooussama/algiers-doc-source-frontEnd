// Usage.jsx
import { Container, Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { Assignment, GetApp, Edit, EmojiEvents, Help } from "@mui/icons-material";
import ArrowUp from "../../../assets/arrowUp.png";
import ArrowDown from "../../../assets/arrowDown.png";
import { useLocation } from "react-router-dom";
import translations from "./UsageTranslations"; // Import translations
import "./Usage.css";

const Usage = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1]; // Extract language from URL

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#2e7d32", padding: "40px 0", textAlign: "center" }}>
      <Box sx={{ color: "#fff", textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column", gap: 1 }}>
        <Help />
        <Typography variant="h5" sx={{ color: "#fff" }}>
          {translations[currentLanguage].howToUse}
        </Typography>
      </Box>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-around" alignItems="center" mt={4}>
        <img className="firstArrow" alt="" srcSet={ArrowDown} width={"200px"} style={{ position: "absolute", left: 300, top: 550 }} />
        <Card sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", mb: 2 }}>
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#2196F3", mb: 2 }}>
              <Assignment />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {translations[currentLanguage].discoverVariety}
            </Typography>
          </CardContent>
        </Card>
        <img alt="" srcSet={ArrowUp} width={"200px"} style={{ position: "absolute", bottom: -230 }} />

        <Card sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", mb: 2, ml: { xs: 0, md: 2 } }}>
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#FF5722", mb: 2 }}>
              <GetApp />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {translations[currentLanguage].downloadFormat}
            </Typography>
          </CardContent>
        </Card>
        <img alt="" srcSet={ArrowDown} width={"200px"} style={{ position: "absolute", right: 300, top: 550 }} />

        <Card sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", mb: 2, ml: { xs: 0, md: 2 } }}>
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#4CAF50", mb: 2 }}>
              <Edit />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {translations[currentLanguage].personalizeEdit}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 200, height: 300, borderRadius: 10, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#FFC107", mb: 2 }}>
              <EmojiEvents />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {translations[currentLanguage].achieveSuccess}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Usage;
