import React from "react";

import NavbarSection from "./sections/NavBarSection";
import ImageCardComponent from "./sections/ImageCard";
import HearYouComponent from "./sections/HearYou";

import "./App.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavbarSection></NavbarSection>
      <ImageCardComponent></ImageCardComponent>
      <HearYouComponent></HearYouComponent>
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
