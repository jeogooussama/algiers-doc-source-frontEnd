// InterfacesContainer.jsx
/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import InterfaceCard from "../InterfaceCard/InterfaceCard";
const InterfacesContainer = ({ interfaces, language, }) => {
  return (
    <Grid container spacing={2} justifyContent="center"p={2} bgcolor={"white"}>
      {interfaces?.map((interfaceData) => (
        <Grid item key={interfaceData.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <InterfaceCard {...interfaceData} language={language} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InterfacesContainer;
