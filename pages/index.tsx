import { Hero } from "../components/Hero";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createClient } from "contentful";
import { Recipes } from "../components/Recipes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc107",
    },
    secondary: {
      main: "#523F2E",
    },
  },
});

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "recipe",
    // order: "fields.slug",
  });

  return {
    props: {
      recipes: res.items,
      revalidate: 60 * 60,
    },
  };
}

const Home = ({ recipes }: any) => {
  console.log(recipes);
  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <Recipes recipes={recipes} />
    </ThemeProvider>
  );
};

export default Home;
