import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container sx={{ backgroundColor: "#202A36" }} maxWidth={false}>
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
            color="white"
            gutterBottom
          >
            Copyright 2022
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="overline"
            display="block"
            color="white"
            gutterBottom
          >
            Source Code
          </Typography>
          <Typography
            variant="overline"
            display="block"
            color="white"
            gutterBottom
          >
            See Other Works
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
