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
import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";

export const Recipes = ({ recipes }: any) => {
  console.log(recipes);
  const handleClick = () => {
    Swal.fire({
      title: "Do you want to order now?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, I'm hungry!",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Order was successful!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Order failed!", "", "info");
      }
    });
  };

  return (
    <div id="scroll">
      <CssBaseline />
      <Container sx={{ backgroundColor: "#202A36" }} maxWidth={false}>
        <Container sx={{ py: 9, backgroundColor: "#202A36" }}>
          <Grid container spacing={4}>
            {recipes.map((recipe: any) => (
              <Grid item key={recipe.sys.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#FFC107",
                  }}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL={recipe.fields.img}
                    src={recipe.fields.img}
                    height={350}
                    width={500}
                    objectFit="cover"
                    alt="image of the selected items"
                  />
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
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClick}
                    >
                      Order Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};
