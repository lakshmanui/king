import React, { useState } from "react";
import { Box } from "@mui/material";

import PartnershipModal from "./modals/PartnershipModal";

import NavbarSection from "./sections/NavBarSection";
import PartnershipSection from "./sections/PartnershipSection";
import PlayerSection from "./sections/PlayerSection";

import "./App.css";

const App: React.FC = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavbarSection></NavbarSection>
      <PartnershipSection></PartnershipSection>
      <PlayerSection></PlayerSection>
      <PartnershipModal
        open={open}
        handleClose={handleClose}
      ></PartnershipModal>
    </Box>
  );
};

export default App;
