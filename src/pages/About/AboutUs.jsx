// AboutUs.jsx
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { Navbar, Footer } from "../../components/";
import image from "./engineering_team.svg";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" color="#21BF73" gutterBottom>
          من نحن{" "}
        </Typography>

        <Paper
          elevation={3}
          sx={{
            padding: { xs: "2rem", md: "3rem" },
            background: "#F9FCFB",
            borderRadius: 16,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <img
                src={image}
                alt="Team"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 16,
                  display: "block",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" color="#21BF73" gutterBottom>
                فريقنا{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, color: "#333" }}
              >
                مرحبًا بك في AlgeriDocs نحن فريق متحمس ملتزم بتوفير واجهات بحث
                عالية الجودة لتعزيز رحلتك البحثية.{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, color: "#333" }}
              >
                مهمتنا هي جعل المعلومات متاحة وتمكين المستخدمين في دراستهم. سواء
                كنت طالبًا أو باحثًا أو محترفًا ، نهدف إلى دعم نجاحك من خلال
                واجهاتنا المختارة بعناية.{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, color: "#333" }}
              >
                لا تتردد في استكشاف موقعنا على الإنترنت ، وتنزيل الواجهات ،
                وتخصيص مستنداتك لتناسب احتياجاتك. نحن هنا لمساعدتك في تحقيق
                النجاح في دراستك!{" "}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" color="#21BF73" gutterBottom>
            قيمنا{" "}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
            التميز: نسعى لتحقيق التميز في توفير واجهات بحثية وخدمات على أعلى
            مستوى.{" "}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
            - الوصولية: نؤمن بجعل المعلومات متاحة للجميع ، وتعزيز التضمين في
            التعليم.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
            - الابتكار: نحن نتبنى الابتكار للبقاء في المقدمة في المشهد المتطور
            باستمرار للمعلومات والتكنولوجيا.
          </Typography>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default AboutUs;
