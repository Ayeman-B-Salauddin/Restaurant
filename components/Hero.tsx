import { Button } from "@mui/material";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="info">
          <h1>Hungry?</h1>
          <h2>Try out a double-cheese beef burger </h2>
          <p>
            Ready in 60 seconds, place your order and we'll be on your doorstep
            within 10 minutes.
          </p>
          <br />
          <Button variant="contained" size="large">
            Place Order
          </Button>
        </div>
      </div>
    </section>
  );
};
