import CardBenficios from "../Funcionales/CardBeneficios/CardBeneficios";
import Icon1 from "../../assets/IconsBeneficios/incremento.png";
import ImgBeneficios from "../../assets/QueBenefi.png";

import { Container,Button } from "@mui/material";

import './SectionBeneficios.css'
export default function SectionBeficios() {
  return (
    <section style={{ padding: "10px" }} id="SectionBeneficios">
      <img src={ImgBeneficios} alt="" />

      <p style={{ fontSize: 14, fontWeight: 600 }}>
        ! ESTAMOS EN LA ERA DE LA TECNOLOGIA, CON UN SOLO CLICK TODO ES POSIBLE
        !
      </p>
      <p style={{ fontSize: 13, fontWeight: 400 }}>
        Es el momento de dejar de usuar metodos tradicionales
      </p>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardBenficios
          img={Icon1}
          text="Incremento de ventas"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Reduccion de costos"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Auditoria Costante"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Geolocali-zacion"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Eficacia de negocios"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Valor agregado"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Metodologia 5w2H."
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Cumple estandares"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
        <CardBenficios
          img={Icon1}
          text="Optimizar tiempo"
          nexTex="Como Consecuencia de una eficiencia operativa"
        />
      </Container>
      <Button
      className="btnSectionBeficiosDesktop"
        sx={{
          backgroundColor: "#007AFF",
          color: "white",
          marginTop: 3,
          padding: "10px 20px 10px 20px",
        }}
      >
        SOLICITA DEMOSTRACION GRATUITA
      </Button>
    </section>
  );
}
