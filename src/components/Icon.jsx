import { Box, Typography } from "@mui/material";
import React from "react";

const Icon = ({ name, src }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 3,
      }}
    >
      <img src={src} height="40px" width="40px" alt="skill" />
      <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
        {name}
      </Typography>
    </Box>
  );
};

export default Icon;
