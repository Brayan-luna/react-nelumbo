import grafica from "../../assets/Graficas.png";
import imgMideMejora from "../../assets/MideMejora.png";
import "./SectMain8.css";
export default function SectionMain8() {
  return (
    <section style={{ padding: 3, marginBottom: 80 }}>
      <img className='imgNoseMejoraSectMain8' src={imgMideMejora} alt="" />
      <p>
        Entregamos a las empresa informacion detallada de cada sucursa; a traves
        de reportes que son alimentados <br /> de{" "}
        <span style={{ fontWeight: "bold" }}> data en timepo real</span>
      </p>
      <div className="containerTwoGrafits">
        <div className="containerImgBtnSect8">
          <img className="imgGrafica" src={grafica} alt="" />
          <p style={{ color: "rgba(0, 0, 0, 0.545)", padding:10 }}>
            Visibilidad sobre las indicadores que deben alcanzar determinado
            valor para{" "}
            <span className="colorBlackSpanSect8">
              sastisfacer objectivos de la empresa.
            </span>
            <br />
            <span className="colorBlueSpanSect8">
              Reportes jerarquizados para direccion, regiones y sucursales
            </span>
          </p>
          <button className="btnDegradado">
            Dashboards <br />
            Personalizados
          </button>
        </div>
        <div className="containerImgBtnSect8Two">
          <img className="imgGrafica" src={grafica} alt="" />
          <p style={{ color: "rgba(0, 0, 0, 0.545)", padding:10  }}>
            Visibilidad sobre las indicadores que deben alcanzar determinado
            valor para{" "}
            <span className="colorBlackSpanSect8">
              sastisfacer objectivos de la empresa.
            </span>
            <br />
            <span className="colorBlueSpanSect8">
              Reportes jerarquizados para direccion, regiones y sucursales
            </span>
          </p>
          <button className="btnDegradado">
            Dashboards <br />
            Personalizados
          </button>
        </div>
      </div>
    </section>
  );
}
