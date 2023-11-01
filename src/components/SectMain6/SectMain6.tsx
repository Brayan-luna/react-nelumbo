import imgGesAreas from "../../assets/GestArea.png";
import imgGestionAreaDesktop from "../../assets/imgAcordion.jpg";
import "./sectMain6.css";
export default function SectionMain6() {
  return (
    <section className="SectionMain6">
      <img src={imgGesAreas} alt="" />
      <h5 className="">Adaptable al organigrama de cada empresa</h5>
      <div className="containerUlAndImgGestionArea">
        <div style={{ textAlign: "left" }}>
          <div className="containerCarGestionArea">
            <p className="titleGestionArea">Direcion General</p>
            <ul>
              <li>Conocimiento de problemas.</li>
              <li>Medicion de la efectividad de cada region.</li>
              <li>Medicion de la estandarizacion.</li>
            </ul>
          </div>
          <div className="containerCarGestionArea">
            <p className="titleGestionArea">Subdireccion</p>
            <ul>
              <li>Conocimiento de problemas.</li>
              <li>Medicion de la efectividad de cada region.</li>
            </ul>
          </div>
          <div className="containerCarGestionArea">
            <p className="titleGestionArea">Gerente de Sucursal</p>
            <ul>
              <li>Conocimiento de problemas.</li>
              <li>Medicion de la efectividad de cada region.</li>
            </ul>
          </div>
        </div>
        <img
          className="imgGestionAreaDesktop"
          src={imgGestionAreaDesktop}
          alt=""
        />
      </div>
    </section>
  );
}
