import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Icon from '@mui/material/Icon';
import Modal from "@mui/material/Modal";

import EmailSubission from "../components/EmailSubmission";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PartnershipModal: React.FC<Props> = (props: Props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={10} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h5" component="div">
              Stay up to date on all things Personally
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Icon color="primary">add_circle</Icon>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="subtitle2" component="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <EmailSubission></EmailSubission>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default PartnershipModal;
