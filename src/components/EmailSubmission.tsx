import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { EMAIL_REGEX, EMAIL_SUBMIT_URL } from "../AppConstants";

const EmailSubission: React.FC = () => {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = async () => {
    var pattern = new RegExp(EMAIL_REGEX);
    var isValid = pattern.test(email);

    if (isValid) {
      try {
        const data = new URLSearchParams();
        data.append("emailaddress", email);

        var response = await fetch(EMAIL_SUBMIT_URL, {
          method: "POST",
          body: data,
        });
        const result = await response.text();
        console.log("Success:", result);
      } catch (e) {
        console.log("Error occurred white sumbitting email address: ", e);
      }
    } else {
      console.log("Invalid Email Address");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          id="emailaddress"
          label="Enter Email"
          variant="outlined"
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={() => setConfirm(!confirm)} />}
            label="Check to confirm you have read and accepted terms* before submitting"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button
          variant="contained"
          disabled={!confirm || email.length === 0}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="caption" display="block" gutterBottom>
          *By entering your email address you affirm that you are at least 18
          years of age and a U.S. resident, and you are consenting to receive
          marketing emails from Ally. This will allow Ally to digitally
          communicate with you via email which might contain newsletters,
          product information and updates or special offers. You may withdraw
          your consent at any time by clicking on the Unsubscribe link contained
          in our emails. Learn more about Ally’s privacy practices at
          https://www.ally.com/privacy“
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="caption" display="block" gutterBottom>
          If you are a California resident, please review Ally’s CCPA Notice at
          Collection prior to proceeding.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EmailSubission;
