import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import {
  Assignment,
  GetApp,
  Edit,
  EmojiEvents,
  Help,
} from "@mui/icons-material";
import "./Usage.css";
import { Link } from "react-router-dom";

const Usage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#F4F4F4", // Updated background color
        padding: "40px 0",
        textAlign: "center",
        direction: "rtl",
      }}
    >
      <Box
        sx={{
          color: "#4CAF50", // Updated color for icon and title
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Help sx={{ color: "#FD5E53" }} /> {/* Updated color for help icon */}
        <h1 style={{ color: "#FD5E53", fontSize: "30px" }}> كيفية الاستخدام</h1>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row-reverse" }}
        justifyContent="space-around"
        alignItems="center"
        mt={4}
        position="relative"
      >
        <Card
          sx={{
            width: 200,
            height: 300,
            borderRadius: 10,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            mb: 2,
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#FD5E53", mb: 2 }}>
              <Assignment />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              اكتشف مجموعة متنوعة من
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                href="/paper"
                sx={{
                  background: "#21BF73",
                  "&:hover": { background: "#21BF73" },
                }}
              >
                الواجهات
              </Button>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 200,
            height: 300,
            borderRadius: 10,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            mb: 2,
            mr: { xs: 0, md: 2 },
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#FD5E53", mb: 2 }}>
              <GetApp />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              تحميل بتنسيق Word أو PDF
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: 200,
            height: 300,
            borderRadius: 10,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            mb: 2,
            mr: { xs: 0, md: 2 },
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#FD5E53", mb: 2 }}>
              <Edit />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              تخصيص وتحرير مستنداتك
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 200,
            height: 300,
            borderRadius: 10,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent>
            <IconButton sx={{ fontSize: 50, color: "#FD5E53", mb: 2 }}>
              <EmojiEvents />
            </IconButton>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              تحقيق النجاح في دراستك
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Usage;
