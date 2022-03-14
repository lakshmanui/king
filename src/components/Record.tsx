import React from "react";
import { Button, Grid } from "@mui/material";
import MicOutlined from "@mui/icons-material/MicOutlined";

type Props = {
  startRecording: () => void;
};

const Record: React.FC<Props> = (props: Props) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <MicOutlined fontSize="large" color="primary"></MicOutlined>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={props.startRecording}>
          Record new message
        </Button>
      </Grid>
    </Grid>
  );
};
export default Record;
