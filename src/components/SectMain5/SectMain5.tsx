import { Container, Button } from "@mui/material";
import imgMultifacetica from "../../assets/AppMultifacetica.png";
import phone from "../../assets/Phone.png";
import "./SectMain5.css";
export default function SectionMain5() {
  return (
    <Container className="ContainerSectMain5" sx={{ backgroundColor: "#F4F4F4", paddingBottom: 10 }}>
      <img src={imgMultifacetica} alt="" />
      <p>!TODO DENTRO DE UN MOVIL!</p>
      <div className="containerImgsSectMain5">
        <img className="imgPhoneSectMain5" src={phone} alt="" />
        <img className="imgPhoneSectMain5" src={phone} alt="" />
        <img className="imgPhoneSectMain5" src={phone} alt="" />
      </div>
      <p style={{ fontWeight: "bold", fontSize: "14px" }}>
        CONFIGURA LA APP CON LA IDENTIDAD VISUAL DE TU EMPRESA
      </p>
      <p style={{ fontSize: "14px" }}>
        Es una aplicacion divisificada que se adapta a tus necesiadades,
        llevando el control y la supervicion por cada area de tu empresa
      </p>
      <Button
      className="btnSectionBeficiosDesktop"
        sx={{
          backgroundColor: "#007AFF",
          color: "white",
          marginTop: 3,
          padding: "10px 20px 10px 20px",
        }}
      >
        PRUEBALO
      </Button>
    </Container>
  );
}
