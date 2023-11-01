import { Button, Container } from "@mui/material";
// style
import "./styles.css";
// pictures
import imgSolicDemoPhone from "../../assets/phoneSolictDemo.png";

export default function SectSolicDemo() {
  return (
    <Container
      className="containerSect1"
      sx={{ display: "flex", flexDirection: "column"}}
    >
      <div className="divContainerSabesQGente">
        <i style={{color:'black'}}>¿Sabes que esta haciendo tu gente en este momento?</i>

        <p>Con Check+. Mejora la operacion de tu empresa.<br/>A traves de una AOO de alta deficion</p>
  
        <Button href="#SectionBeneficios" sx={{backgroundColor:'#5807D3', color:"white", fontWeight:'400', padding:'15px 15px'}}>SOLICITAR DEMO</Button>
      </div>
      
        <img className="imgSolicDemoPhone" src={imgSolicDemoPhone} alt="" />
    
    </Container>
  );
}
