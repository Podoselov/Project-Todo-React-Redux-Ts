import * as React from "react";
import { useState } from "react";
import { Container, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { StyledWraperEl } from "./styledHomePage";
import FormComponent from "./FormComponent";

const HomePAge: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <StyledWraperEl>
      <Container>
        <FormComponent handleClick={handleClick} />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Task successfully added
          </MuiAlert>
        </Snackbar>
      </Container>
    </StyledWraperEl>
  );
};

export default HomePAge;
