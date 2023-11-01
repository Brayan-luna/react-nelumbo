import { Box, List, ListItem, ListItemText } from "@mui/material";
interface props{
  open:any;
  set:any;
}
export default function NavListDrawer({
  set
}:props) {

  const onClose =(set:any)=>{
      set(false)
      return set
  }

  return (
    <Box sx={{ width: 250, backgroundColor: "ffff" }}>
      <nav>
        <List>
          <ListItem>
            <ListItemText primary='Contacto'></ListItemText>
          </ListItem>
          <ListItem onClick={()=>onClose(set)} component="a" href="#SectionBeneficios">
            <ListItemText  primary='SOLICITAR DEMO'></ListItemText>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
