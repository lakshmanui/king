import React, { useState } from "react";
import { Box, Grid, Link, Tab, Theme, Typography } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import { MicOutlined } from "@mui/icons-material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
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
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignContent: "space-around",
        alignItems: "stretch",
        flexWrap: "wrap",
      },
    },
    heading: {
      color: "#300042",
    },
    textAlignCenter: {
      textAlign: "center",
    },
    section: {
      color: "white",
      height: "250px",
      backgroundColor: "#5f2779",
      [theme.breakpoints.down("md")]: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        margin:"20px"
      },
    },
  })
);

const HearYouComponent: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
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
          <Grid item xs={10} sm={10} md={6} lg={6} xl={6} mt={3}>
            <PlayerSection></PlayerSection>
          </Grid>
          <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <Typography
                variant="h4"
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
                variant="h4"
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
      <Grid item className={clsx(classes.centerAlign, classes.section)}>
        <Grid container spacing={2} xs={10} sm={10} md={8} lg={8} xl={8}>
          <Grid
            item
            xs={10}
            sm={10}
            md={6}
            lg={6}
            xl={6}
            sx={{ textAlign: "center" }}
          >
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
      <Grid item className={classes.centerAlign}>
        <Grid container spacing={2} xs={10} sm={10} md={8} lg={8} xl={8}>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.centerAlign}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className={classes.centerAlign}
              sx={{
                color: "white",
                flexDirection: "column",
                textAlign: "center",
                backgroundColor: "#5f2779",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <MicOutlined fontSize="large" color="primary"></MicOutlined>
              <Typography variant="body2" mt={3} sx={{ height: "100px" }}>
                Save smarter, faster than ever. Our smart savings tools help you
                save an average of 2x more.
              </Typography>
              <Link href="#" mt={3} sx={{ height: "30px" }}>
                Explore buckets and boosters »
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.centerAlign}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className={classes.centerAlign}
              sx={{
                color: "white",
                flexDirection: "column",
                textAlign: "center",
                backgroundColor: "#5f2779",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <MicOutlined fontSize="large" color="primary"></MicOutlined>
              <Typography variant="body2" mt={3} sx={{ height: "100px" }}>
                Go from inspired to invested in just a few taps with Ally
                Invest.
              </Typography>
              <Link href="#" mt={3} sx={{ height: "30px" }}>
                Invest with Us »
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            className={classes.centerAlign}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              className={classes.centerAlign}
              sx={{
                color: "white",
                flexDirection: "column",
                textAlign: "center",
                backgroundColor: "#5f2779",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <MicOutlined fontSize="large" color="primary"></MicOutlined>
              <Typography variant="body2" mt={3} sx={{ height: "100px" }}>
                When you need to get moving on that house, right now, we're here
                to help.
              </Typography>
              <Link href="#" mt={3} sx={{ height: "30px" }}>
                Get pre-approved in as little as 3 minutes »
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.centerAlign} mt={4}>
        <Grid container spacing={2} xs={10} sm={10} md={8} lg={8} xl={8}>
          <Grid
            item
            xs={10}
            sm={10}
            md={6}
            lg={6}
            xl={6}
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign:"center"
            }}
          >
            <Typography variant="h3" component="div">
              We're all better off with an ally.
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="Digitally"
                      value="1"
                      sx={{
                        color: "white",
                      }}
                    />
                    <Tab
                      label="Financially"
                      value="2"
                      sx={{
                        color: "white",
                      }}
                    />
                    <Tab
                      label="Personally"
                      value="3"
                      sx={{
                        color: "white",
                      }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  We invest in the latest tech, inspiring products, anc people
                  who push boundaries to create intuitive experiences that fit
                  seamlessly into your life.
                </TabPanel>
                <TabPanel value="2">
                  We invest in the latest tech, inspiring products, anc people
                  who push boundaries to create intuitive experiences that fit
                  seamlessly into your life.
                </TabPanel>
                <TabPanel value="3">
                  We invest in the latest tech, inspiring products, anc people
                  who push boundaries to create intuitive experiences that fit
                  seamlessly into your life.
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HearYouComponent;
