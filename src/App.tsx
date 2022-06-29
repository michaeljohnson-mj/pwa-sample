import "./App.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import { isNumericField } from "./utils/ValidationUtils";

const App = () => {
  const [name, setName] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isConsentChecked, setConsentChecked] = useState(false);
  const [offline, setOffline] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("offline", offlineListener);
  //   return () => {
  //     window.removeEventListener("offline", offlineListener);
  //   };
  // }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.trim());
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.trim());
  };

  const handleMobileNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isNumericField(event.target.value)) {
      setMobileNumber(event.target.value);
    }
  };

  const handlePanNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPanNumber(event.target.value.trim());
  };

  const handleConsentCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConsentChecked(event.target.checked);
  };

  const handleSubmit = () => {
    alert("Data submitted succesfully!");
  };

  return (
    <Fragment>
      <header className="header">
        <h1>IndusInd Bank</h1>
      </header>
      <div className="container">
        {/* <h2>Registration Form</h2> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              autoFocus
              focused
              value={name}
              onChange={handleNameChange}
              // onBlur={handleOnBlurEmail}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              variant="outlined"
              inputProps={{ maxLength: 10 }}
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              // onBlur={handleOnBlurEmail}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              required
              fullWidth
              id="pan"
              label="PAN Number"
              variant="outlined"
              inputProps={{ maxLength: 10 }}
              value={panNumber}
              onChange={handlePanNumberChange}
              // onBlur={handleOnBlurEmail}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email ID"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              // onBlur={handleOnBlurEmail}
            />
          </Grid>
        </Grid>

        <div className="checkbox-text-holder ">
          <Checkbox
            checked={isConsentChecked}
            onChange={handleConsentCheckboxChange}
          />
          <Typography>
            Consent to override any DND subscription, Business Executive to
            contact and fetch CIBIL score to process loan request
          </Typography>
        </div>

        <Button
          disabled={isConsentChecked ? false : true}
          className="submit-btn"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

      {offline ? (
        <div className="banner-offline">The app is currently offline</div>
      ) : null}
    </Fragment>
  );
};

export default App;
