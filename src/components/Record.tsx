import React from "react";
import { Button, Grid, Theme } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import MicOutlined from "@mui/icons-material/MicOutlined";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    centerAlign: {
      display: "flex",
      justifyContent: "center",
      padding:"20px"
    },
    container: {
      backgroundColor: "#300042",
      borderRadius:"20px"
    },
  })
);

type Props = {
  startRecording: () => void;
};

const Record: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      className={clsx(classes.centerAlign, classes.container)}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.centerAlign}
      >
        <MicOutlined fontSize="large" color="primary"></MicOutlined>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.centerAlign}
      >
        <Button variant="contained" onClick={props.startRecording}>
          Record new message
        </Button>
      </Grid>
    </Grid>
  );
};
export default Record;
