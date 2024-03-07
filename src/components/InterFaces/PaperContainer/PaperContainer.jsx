import { Grid, CircularProgress } from "@mui/material";
import PaperCard from "../PaperCard/PaperCard";

const PaperContainer = ({ data }) => {
  if (data?.length === 0) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        bgcolor="#F9FCFB"
      >
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      container
      mt={3}
      display={"flex"}
      justifyContent={"center"}
      bgcolor="#F9FCFB" // Set background color
    >
      {data?.map((interfaceData) => (
        <Grid
          key={interfaceData._id}
          item
          width={"100%"}
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
        >
          <PaperCard {...interfaceData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PaperContainer;
