import { Grid, CircularProgress } from "@mui/material";
import InterfaceCard from "../InterfaceCard/InterfaceCard";

const InterfacesContainer = ({ interfaces }) => {
  if (interfaces.length === 0) {
    // If interfaces array is empty or loading, show CircularProgress
    return (
      <Grid container justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      container
      p={1}
      spacing={{ xs: 4, sm: 3 }} 
      width="100%"
      justifyContent="center"
    >
      {interfaces.map((interfaceData) => (
        <Grid key={interfaceData._id} item xs={8} sm={4} md={3} lg={3} xl={2.1}>
          <InterfaceCard {...interfaceData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InterfacesContainer;
