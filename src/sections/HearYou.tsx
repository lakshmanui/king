import React from "react";
import { Grid, Theme, Typography } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import Record from "../components/Record";
import PlayerSection from "./PlayerSection";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    centerAlign: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      backgroundColor: "#300042",
    },
    recordSection: {
      backgroundColor: "#FFF",
      margin: "20px",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      borderRadius: "20px",
    },
    heading: {
      color: "#300042",
    },
    textAlignCenter: {
      textAlign: "center",
    },
  })
);

const HearYouComponent: React.FC = () => {
  const classes = useStyles();
  const startRecording = async () => {};
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      item
      className={classes.container}
    >
      <Grid item className={classes.centerAlign}>
        <Grid
          container
          spacing={2}
          xs={10}
          sm={10}
          md={8}
          lg={8}
          xl={8}
          className={classes.recordSection}
        >
          <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
            <PlayerSection></PlayerSection>
          </Grid>
          <Grid container item xs={10} sm={10} md={6} lg={6} xl={6}>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <Typography
                variant="h3"
                component="div"
                className={clsx(classes.heading, classes.textAlignCenter)}
              >
                We want to hear your story
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                className={classes.textAlignCenter}
              >
                Comic books are at the nexus of pop culture, yet Black and
                diverse creators remain woefully underrepresented. Only 5.8% of
                comic book writers and 3.9% of artists are Black.
              </Typography>
              <Typography
                variant="h3"
                component="div"
                className={clsx(classes.heading, classes.textAlignCenter)}
              >
                We want to hear your story
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                className={classes.textAlignCenter}
              >
                Comic books are at the nexus of pop culture, yet Black and
                diverse creators remain woefully underrepresented. Only 5.8% of
                comic book writers and 3.9% of artists are Black.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.centerAlign}
        sx={{ color: "white", height: "250px", backgroundColor: "#5f2779" }}
      >
        <Grid container spacing={2} xs={10} sm={10} md={8} lg={8} xl={8}>
          <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
            <Typography variant="h3" component="div">
              What people are saying
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
            <Typography
              variant="subtitle2"
              component="div"
              className={classes.textAlignCenter}
            >
              Comic books are at the nexus of pop culture, yet Black and diverse
              creators remain woefully underrepresented. Only 5.8% of comic book
              writers and 3.9% of artists are Black.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        component="div"
        className={classes.textAlignCenter}
        sx={{ color: "white", marginTop: "20px", marginBottom: "20px" }}
      >
        Explore our products
      </Typography>
    </Grid>
  );
};

export default HearYouComponent;
