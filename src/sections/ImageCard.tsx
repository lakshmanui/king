import React from "react";
import { Grid, Paper, Theme, Typography } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import Image from "../assets/one.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperContainer: {
      backgroundImage: `url(${Image})`,
      height: "350px",
      width: "100%",
      marginTop: "2px",
      display: "flex",
      alignSelf: "center",
      justifyContent: "center",
    },
  })
);

const ImageCardComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperContainer}>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={0} md={6} lg={6} xl={6}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h2" component="div">
                Person ally
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ textAlign: "right" }}
              >
                Comic books are at the nexus of pop culture, yet Black and
                diverse creators remain woefully underrepresented. Only 5.8% of
                comic book writers and 3.9% of artists are Black. Even fewer
                Black characters appear in comic books.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ImageCardComponent;
