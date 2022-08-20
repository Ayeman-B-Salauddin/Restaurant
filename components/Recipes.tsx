import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  CssBaseline,
} from "@mui/material";
import React from "react";

export const Recipes = ({ recipes }) => {
  return (
    <div id="scroll">
      <CssBaseline />
      <Container sx={{ py: 9, backgroundColor: "#202A36" }} maxWidth={false}>
        <Grid container spacing={4}>
          {recipes.map((recipe) => (
            <Grid item key={recipe.sys.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FFC107",
                }}
              >
                {/* <CardMedia
                  component="img"
                  sx={{
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                /> */}

                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {recipe.fields.title}
                  </Typography>
                  <Typography>{recipe.fields.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="secondary">
                    Order Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
