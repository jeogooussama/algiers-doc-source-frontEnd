// InterfacesContainer.jsx
/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import InterfaceCard from "../InterfaceCard/InterfaceCard";

const InterfacesContainer = ({ interfaces }) => {
  return (
    <Grid container spacing={2} p={5}>
      {interfaces?.map((interfaceData) => (
        <Grid key={interfaceData._id} item xs={12} sm={4} md={4} lg={3} xl={2}>
          <InterfaceCard {...interfaceData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InterfacesContainer;
