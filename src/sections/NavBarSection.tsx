import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";

const NavbarSection: React.FC = () => {
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
          <Link href="#" color="primary">
            PARTNERSHIP
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavbarSection;
