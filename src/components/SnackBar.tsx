import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";

const SnackBar = (info: any) => {
  const [error, setError] = useState<boolean>(info.open);

  useEffect(() => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 6000);
  }, [open]);

  const TransitionDown = (props: any) => {
    return <Slide {...props} direction="left" />;
  };

  return (
    <Snackbar
      open={error}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={TransitionDown}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {info.text}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
