// InterfacesContainer.jsx
/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import InterfaceCard from "../InterfaceCard/InterfaceCard";

const InterfacesContainer = ({ interfaces }) => {
  return (
    <Grid
      container
      spacing={2}
      p={2}
      width={"100%"}
      display="flex"
      justifyContent={"center"}
    >
      {interfaces?.map((interfaceData) => (
        <Grid key={interfaceData._id} item xs={5.9} sm={4} md={3} lg={3} xl={2.1}>
          <InterfaceCard {...interfaceData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InterfacesContainer;
