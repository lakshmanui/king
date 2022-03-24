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
      margin: "20px auto",
      width: "65%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    titleContainer: {
      display: "flex",
      justifyContent: "flex-end",
      height: "350px",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        alignItems: "flex-end",
      },
    },
    titlewrapper: {
      [theme.breakpoints.down("md")]: {
        backgroundColor: "#FFF",
        borderRadius: "20px",
        padding: "20px",
      },
    },
    title: {
      marginRight: "50px",
      textAlign: "right",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        marginRight: "0",
      },
    },
    subtitle: {
      marginRight: "50px",
      textAlign: "right",
      [theme.breakpoints.down("md")]: {
        marginRight: "0",
        textAlign: "center",
      },
    },
  })
);

const ImageCardComponent: React.FC = () => {
  const classes = useStyles();
  return (
      <Paper className={classes.paperContainer}>
        <Grid container spacing={2} className={classes.titleContainer}>
          <Grid
            item
            xs={10}
            sm={6}
            md={6}
            lg={5}
            xl={5}
            className={classes.titlewrapper}
          >
            <Typography variant="h2" component="div" className={classes.title}>
              Person ally
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              className={classes.subtitle}
            >
              We put you first in everything we do. That's why we want to know
              what having a financial ally means to you.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
  );
};

export default ImageCardComponent;
