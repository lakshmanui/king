import React from "react";
import { Button, Grid } from "@mui/material";
import MicOutlined from "@mui/icons-material/MicOutlined";

type Props = {
  pauseRecording: () => void;
  resumeRecording: () => void;
  finishRecording: () => void;
  pause: boolean;
};

const Recording: React.FC<Props> = (props: Props) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <MicOutlined fontSize="large" color="primary"></MicOutlined>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        {props.pause ? (
          <Button variant="contained" onClick={props.resumeRecording}>
            Resume
          </Button>
        ) : (
          <Button variant="contained" onClick={props.pauseRecording}>
            Pause
          </Button>
        )}
        <Button variant="contained" onClick={props.finishRecording}>
          Finish
        </Button>
      </Grid>
    </Grid>
  );
};
export default Recording;
