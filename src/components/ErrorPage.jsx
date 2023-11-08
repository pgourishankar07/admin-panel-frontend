import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ErrImg from "assets/Err.png";

const ErrorPage = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20vh" }}>
        <Box component="img" src={ErrImg} sx={{ objectFit: "cover" }} />
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for does not exist.</p>
        <Button>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              backgroundColor: "#ffda85",
              borderRadius: "5%",
              margin: "5px",
              padding: "5px",
            }}
            to="/"
          >
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ErrorPage;
