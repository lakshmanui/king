import React, { useState } from "react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";

import PartnershipModal from "../modals/PartnershipModal";

const NavbarSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary"
          >
            ally
          </Typography>
          <Link href="#" color="primary" onClick={handleOpen}>
            PARTNERSHIP
          </Link>
        </Toolbar>
      </AppBar>
      <PartnershipModal
        open={open}
        handleClose={handleClose}
      ></PartnershipModal>
    </React.Fragment>
  );
};

export default NavbarSection;
