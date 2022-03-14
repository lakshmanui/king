import React from "react";
import { Button, Grid } from "@mui/material";

type Props = {
  url: string;
};

const ListenRecording: React.FC<Props> = (props: Props) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "200px",
          marginBottom: "40px",
        }}
      >
        <video
          src={props.url}
          controls
          style={{ height: "60px", width: "300px" }}
        />
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Button variant="contained">Listen</Button>
        <Button variant="contained">StartOver</Button>
      </Grid>
    </Grid>
  );
};

export default ListenRecording;
