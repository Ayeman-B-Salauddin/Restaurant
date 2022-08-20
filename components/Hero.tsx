import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

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
      <div className="fade">
        <div className="new2">
          <Link href="#scroll">
            <a>
              <ArrowDropDownIcon fontSize="large" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
