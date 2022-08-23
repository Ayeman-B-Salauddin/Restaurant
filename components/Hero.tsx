import { Button } from "@mui/material";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

export const Hero = () => {
  return (
    <>
      <section id="hero">
        <div>
          <Sidebar />
        </div>
        <div className="container">
          <div className="info">
            <h1>Hungry?</h1>
            <h2>Try out a double-cheese beef burger </h2>
            <p>
              Ready in 60 seconds, place your order right now and get 10% off.
              Hurry up, this voucher may not be valid tomorrow.
            </p>
            <br />
            <Link href="#scroll">
              <Button variant="contained" size="large">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
        <div className="fade"></div>
      </section>
    </>
  );
};
