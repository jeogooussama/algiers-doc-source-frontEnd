// ContactUs.jsx
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Footer, Navbar } from "../../components/";
import pcHome from './undraw_programming_re_kg9v.svg'
const ContactUs = () => {
  return (
    <div>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" color="#21BF73" gutterBottom>
          اتصل بنا
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: { xs: "2rem", md: "3rem" },
                background: "#F9FCFB",
                borderRadius: 16,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h5" color="#21BF73" gutterBottom>
                تواصل معنا{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, color: "#333" }}
              >
                لديك أي استفسار أو رغبة في التواصل؟ نحن هنا للمساعدة! استخدم
                النموذج أدناه لإرسال رسالتك.
              </Typography>

              {/* Contact Form */}
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      label={"اسمك"}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      label={"بريدك الإلكتروني"}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label={"رسالتك"}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#21BF73", color: "#fff" }}
                      size="large"
                    >
                      إرسال الرسالة{" "}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} display={"block"}>
            <Paper
              elevation={3}
              sx={{
                padding: { xs: "2rem", md: "3rem" },
                background: "#F9FCFB",
                borderRadius: 16,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h5" color="#21BF73" gutterBottom>
                من نحن؟{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginBottom: 2, color: "#333" }}
              >
                مرحبًا! أنا مطور برمجيات يعمل من المنزل. نحن هنا لتقديم الدعم
                والمساعدة فيما تحتاج، لا تتردد في التواصل معنا في أي وقت.
              </Typography>

              {/* Image or Icon for Work from Home */}
              <Box
                component="img"
                src={pcHome}
                alt="Home Icon"
                sx={{ width: "83%", height: "auto", marginTop: 2 }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default ContactUs;
