import { Card, CardContent, Typography, Box, Link, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./InterfaceCard.css";

const PaperCard = ({ _id, title, language, image }) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
      <Link
        component={RouterLink}
        to={`/paper/${_id}`}
        underline="none"
        sx={{ width: "100%" }}
      >
        <Card
          sx={{
            borderRadius: 8,
            boxShadow: 4,
            position: "relative",
            height: "360px",
            width: "240px",
            marginBottom: 2,
            border: "2px solid #2e7d32",
            transition: "border-color 0.3s, box-shadow 0.3s",
            "&:hover": {
              borderColor: "#2e7d32",
              boxShadow: "0 0 10px #2e7d32",
              "& .card-content": {
                transform: "translateY(0%)",
              },
            },
            "@media (max-width: 960px)": {
              width: "200px",
              height: "300px",
            },
            "@media (max-width: 600px)": {
              width: "180px",
              height: "240px",
            },
          }}
        >
          <Box
            component="img"
            alt={title}
            srcSet={image}
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <CardContent
            className="card-content"
            sx={{ padding: "12px", transform: "translateY(100%)" }}
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
    </Grid>
  );
};

export default PaperCard;
