import { Typography, Box } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }} id="contact">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "2rem",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
        >
          Contact Me
        </Typography>

        <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
          The best way to get in touch is to send me an email ywang872@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};
export default Contact;
