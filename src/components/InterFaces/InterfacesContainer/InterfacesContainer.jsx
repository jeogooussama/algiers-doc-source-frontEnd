import { Grid, CircularProgress, Typography } from "@mui/material";
import InterfaceCard from "../InterfaceCard/InterfaceCard";

const InterfacesContainer = ({ interfaces }) => {
  if (!interfaces) {
    // If interfaces data is not provided yet, show CircularProgress
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
      {interfaces.map((interfaceData) => (
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
          <InterfaceCard {...interfaceData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InterfacesContainer;
