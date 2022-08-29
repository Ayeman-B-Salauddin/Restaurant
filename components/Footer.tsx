import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <>
      <Container
        sx={{ background: "linear-gradient(to bottom, #202A36, #010011)" }}
        maxWidth={false}
      >
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            {" "}
            <Typography
              variant="overline"
              display="block"
              color="#FCFF8C"
              gutterBottom
            >
              Copyright 2022
            </Typography>
          </Grid>

          {/* Buttons */}

          <Grid item xs={4}>
            <a
              target="_blank"
              href="https://github.com/Ayeman-B-Salauddin/Restaurant"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button variant="text">Source Code</Button>
            </a>
            <Grid item xs={4}>
              <a
                target="_blank"
                href="https://ayeman-b-salauddin.vercel.app/"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button variant="text">See Other Works</Button>
              </a>
            </Grid>
            <Grid item xs={4}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ayeman-bin-salauddin-0ab071204/z"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button variant="text" endIcon={<LinkedInIcon />}>
                  Contact
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <br />
      </Container>
    </>
  );
};
