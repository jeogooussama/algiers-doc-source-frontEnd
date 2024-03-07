<<<<<<< HEAD:src/components/InterFaces/PaperContainer/PaperContainer.jsx
import { Grid, CircularProgress } from "@mui/material";
import PaperCard from "../PaperCard/PaperCard";

const PaperContainer = ({ data }) => {
  if (data?.length === 0) {
=======
import { Grid, CircularProgress, Typography } from "@mui/material";
import InterfaceCard from "../InterfaceCard/InterfaceCard";

const InterfacesContainer = ({ interfaces }) => {
  if (!interfaces) {
    // If interfaces data is not provided yet, show CircularProgress
>>>>>>> 05709aaf045735c3d08df5c0a5e1ed8a62a87588:src/components/InterFaces/InterfacesContainer/InterfacesContainer.jsx
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

  if (interfaces.length === 0) {
    // If interfaces array is empty, show a message
    return (
      <Typography variant="h5" align="center" mt={3}>
        No interfaces available.
      </Typography>
    );
  }

  return (
    <Grid
      container
      mt={3}
      display={"flex"}
      justifyContent={"center"}
      bgcolor="#F9FCFB"
    >
<<<<<<< HEAD:src/components/InterFaces/PaperContainer/PaperContainer.jsx
      {data?.map((interfaceData) => (
=======
      {interfaces.map((interfaceData) => (
>>>>>>> 05709aaf045735c3d08df5c0a5e1ed8a62a87588:src/components/InterFaces/InterfacesContainer/InterfacesContainer.jsx
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
