import React from "react";

import NavbarSection from "./sections/NavBarSection";
import ImageCardComponent from "./sections/ImageCard";
import HearYouComponent from "./sections/HearYou";

import "./App.css";
import { Grid } from "@mui/material";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavbarSection></NavbarSection>
      <Grid sx={{ backgroundColor: "#300042" }}>
        <ImageCardComponent></ImageCardComponent>
        <HearYouComponent></HearYouComponent>
      </Grid>
    </React.Fragment>

    // <Box sx={{ flexGrow: 1 }}>

    //   <PartnershipSection></PartnershipSection>
    //   <PlayerSection></PlayerSection>
    //   <PartnershipModal
    //     open={open}
    //     handleClose={handleClose}
    //   ></PartnershipModal>
    // </Box>
  );
};

export default App;
