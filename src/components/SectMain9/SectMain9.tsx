import { Button } from "@mui/material";
import imgConocimientoPoder from "../../assets/ConocimientoPoder.png";
import imgSabemosNecesitas from "../../assets/SabemosNecesitas.png";
import imgSabemosNecesitasLong from "../../assets/SabemosNecesitasLong.png";
import CardsPruebas from "../Funcionales/CardsPruebas/CardsPruebas";
import "./SectMain9.css";
export default function SectionMain9() {
  return (
    <section
      style={{
        display: "flex",
        backgroundColor: "#F4F4F4",
        padding: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="imgConocimientoEsPoderSectMain5"
        src={imgConocimientoPoder}
        alt=""
      />
      <p style={{ textAlign: "left", padding: "20px" }}>
        La falta de estandarizacion y digitalizacion de procesos, provova
        deficiencia en la sencibilizacion del equipo de trabajo, servicio al
        cliente, retraso en la productividad, que conlleva a generar{" "}
        <span style={{ fontWeight: "bold" }}>
          un gasto innecesario de recursos financieron,tiempo y esfuerzo.
        </span>
      </p>
      <img className="imgSabemosNecesitas" src={imgSabemosNecesitas} alt="" />
      <img
        className="imgSabemosNecesitasLong"
        src={imgSabemosNecesitasLong}
        alt=""
      />
      <Button
        className="btnSolicitaDemostracionSectMain9Mobile"
        sx={{
          backgroundColor: "#3A87D9",
          color: "white",
          padding: "10px 0px",
          width: "100%",
          fontWeight: "bold",
          marginBottom: 3,
        }}
      >
        SOLICITA DEMOSTRACION GRATUITA
      </Button>
      <div className="containerDivCardsPruebasSectMain9">
        <CardsPruebas porcentaje="100%" text="Procesos Operaticos" />
        <CardsPruebas porcentaje="57%" text="ROI a partir del año 1" />
        <CardsPruebas porcentaje="+50" text="Templates de Check+" />
        <CardsPruebas porcentaje="100%" text="Personalizacion" />
      </div>

      <Button
        className="btnSolicitaDemostracionSectMain9desktop"
        sx={{
          backgroundColor: "#3A87D9",
          color: "white",
          padding: "10px 0px",
          width: "100%",
          fontWeight: "bold",
          marginBottom: 3,
        }}
      >
        SOLICITA DEMOSTRACION GRATUITA
      </Button>
    </section>
  );
}
