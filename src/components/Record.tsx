import React from "react";
import { Button, Grid } from "@mui/material";
import MicOutlined from "@mui/icons-material/MicOutlined";

type Props = {
  startRecording: () => void;
};

const Record: React.FC<Props> = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <MicOutlined fontSize="large" color="primary"></MicOutlined>
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Button variant="contained" onClick={props.startRecording}>
          Record new message
        </Button>
      </Grid>
    </Grid>
  );
};
export default Record;
