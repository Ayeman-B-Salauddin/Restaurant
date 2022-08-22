import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ListItem,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Swal from "sweetalert2";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    Swal.fire("You need to sign up first!");
  };

  const closer = () => {
    setIsOpen(false);
    Swal.close();
  };

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={closer}>
        <Box
          p={2}
          width="250px"
          height="100%"
          textAlign="center"
          role="presentation"
          sx={{ backgroundColor: "orange" }}
        >
          <Typography variant="h6" component="div">
            Food Delivery
          </Typography>
          <Divider />
          <List>
            {["Full Menu", "Orders", "History", "Voucher", "Address"].map(
              (text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={handleClick}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
