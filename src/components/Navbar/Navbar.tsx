import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import './Navbar.css'
import { useState } from "react";
import NavListDrawer from "./NavList";
import iconCheckplus from "../../assets/Check.png";
// iconos
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar position="fixed" sx={{boxShadow: 'none'}}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: 'space-between',
            backgroundColor: "#ffff",
            
          }}
        >
          <IconButton
          className="btnMenuHamburguesa"
            sx={{ color: "black", backgroundColor: "#F2F2F2", borderRadius: 1}}
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box   className="ContainerLinksNavar">
            <Button sx={{backgroundColor:'white', color:"black", fontWeight:'400', marginRight:'10px'}}>CONTACTO</Button>
            <Button href="#SectionBeneficios" sx={{backgroundColor:'#5807D3', color:"white", fontWeight:'400', padding:'15px 15px'}}>SOLICITAR DEMO</Button>
          </Box>
          <img src={iconCheckplus} alt="" />
        </Toolbar>
      </AppBar>

      <Drawer  open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer  open={open} set={setOpen}></NavListDrawer>
      </Drawer>
    </>
  );
}
