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
    <Grid container spacing={2} sx={{ backgroundColor: "#300042", borderRadius:"20px" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MicOutlined fontSize="large" color="primary"></MicOutlined>
      </Grid>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {props.pause ? (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              onClick={props.resumeRecording}
              size="large"
            >
              Resume
            </Button>
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              onClick={props.pauseRecording}
              size="large"
            >
              Pause
            </Button>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            onClick={props.finishRecording}
            size="large"
          >
            Finish
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Recording;
