import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackBar = (open: any) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert severity="error" sx={{ width: "100%" }}>
        City not found, try another!
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
