import { Button, Container } from "@mui/material";
import iconCheckPlus from "../../assets/Check+.png";
import imgTrasfomEmpresa from "../../assets/TrasfomEmpresa.png";
import imgTrasformEmpresaLong from "../../assets/TrasformEmpresaLong.png";
import "./SectMain7.css";
export default function SectionMain7() {
  return (
    <Container
      style={{
        backgroundColor: "#F4F4F4",
        padding: "20px 10px 40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth:'100%'
      }}
    >
      <img src={iconCheckPlus} />
      <p style={{ fontSize: "25px", fontWeight: "bold", color: "#5807D3" }}>
        Que nos hace diferentes?
      </p>
      <p style={{ fontSize: "14px" }}>
        No somos una herramuenta mas, buscamos ser un socio que{" "}
        <span style={{ fontWeight: "bold" }}>
          te acompaña 24/7 en tu negocio
        </span>
        con superviciones efectivas y personalizadas de acuerdo a tus
        necesidades para que puedas implementar planes de accion
      </p>
      <img className="imgTrasFormEmpresa" src={imgTrasfomEmpresa} />
      <img className="imgTrasFormEmpresaLong" src={imgTrasformEmpresaLong} />
      <div className="containerBtnsSection7">
        <Button
        className="btnDescubreloSect7"
          sx={{
            backgroundColor: "#3A87D9",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "8px",
        
          }}
        >
          DESCUBRELO
        </Button>
        <Button
        className="btnConoceAppSect7"
          sx={{
            backgroundColor: "#5807D3",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          CONOCE NUESTRA APP
        </Button>
      </div>
    </Container>
  );
}
