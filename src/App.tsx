import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import NavbarSection from "./sections/NavBarSection";
import PartnershipSection from "./sections/PartnershipSection";
import PlayerSection from "./sections/PlayerSection";

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavbarSection></NavbarSection>
      <PartnershipSection></PartnershipSection>
      <PlayerSection></PlayerSection>
    </Box>
  );
};

export default App;
