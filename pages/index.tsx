import { Hero } from "../components/Hero";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createClient } from "contentful";
import { Recipes } from "../components/Recipes";
import { Footer } from "../components/Footer";
import Head from "next/head";

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
    //@ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    //@ts-ignore
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
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Foods, flavors, and more" />
        <link
          rel="icon"
          href="https://img.icons8.com/bubbles/50/000000/restaurant.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Hero />
        <Recipes recipes={recipes} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
