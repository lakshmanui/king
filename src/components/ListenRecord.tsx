import React from "react";
import { Button, Grid } from "@mui/material";

type Props = {
  url: string;
};

const ListenRecording: React.FC<Props> = (props: Props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "#300042", borderRadius: "20px" }}
    >
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
          width: "200px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <video
          src={props.url}
          controls
          style={{ height: "60px", width: "300px" }}
        />
      </Grid>
      <Grid item container>
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
          <Button variant="contained">Listen</Button>
        </Grid>
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
          <Button variant="contained">StartOver</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListenRecording;
