// InterfacesContainer.jsx
/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import InterfaceCard from "../InterfaceCard/InterfaceCard";

const InterfacesContainer = ({ interfaces, language }) => {
  return (
    <Grid container spacing={2} justifyContent="center" p={5}>
      {interfaces?.map((interfaceData) => (
        <Grid key={interfaceData._id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <InterfaceCard {...interfaceData} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InterfacesContainer;
