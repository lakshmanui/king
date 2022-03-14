import React from "react";
import { Grid, Typography } from "@mui/material";

const PartnershipSection: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        backgroundColor: "white",
        width: "100%",
        margin: "auto",
      }}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        lg={7}
        xl={8}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="subtitle2" component="div">
          Comic books are at the nexus of pop culture, yet Black and diverse
          creators remain woefully underrepresented. Only 5.8% of comic book
          writers and 3.9% of artists are Black. Even fewer Black characters
          appear in comic books. Milestone Comics launched in 1993 with the
          vision of building a new universe of Black and diverse Super Heroes.
          Now Ally is teaming up with Milestone Media and DC to champion the
          next generation of diverse comic book creators.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PartnershipSection;
