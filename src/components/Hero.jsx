import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import reactImg from "../media/react_svg.svg";
import { Link } from "react-scroll";

const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Curriculum_Vitae.pdf`;
    link.href = "./Curriculum_Vitae.pdf";
    link.click();
  };


  return (
    <Box
      sx={{
        mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto",
      }}
      id="home"
    >
      <Typography
        sx={{ color: "white", textAlign: "center", mb: 2 }}
        variant="h6"
      >
        Hello, I'm Jerry
      </Typography>

      <CustomTitle variant="h1">
        I enjoy{" "}
        <span style={{ color: "rgba(0,199,255,255)" }}>programming,</span> where
        logic meets creativity, and innovation flourishes.
      </CustomTitle>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 150,
            width: 150,
            mt: 4,
            mb: 4,
          }}
          src={reactImg}
        />

        <CustomButton>
          <Link onClick={onDownload} className="link" smooth>
            CURRICULUM VITAE
          </Link>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Hero;
