import imgPhone from "../../assets/Phone.png";
import imgNuestraApp from "../../assets/NuestraApp.png";
import CardNuestraApp from "../Funcionales/CardsNuestraApp/CardNuestraApp";
import MiniCardNuestraApp from "../Funcionales/MiniCardIconSectionNuestraApp/MiniCardSectNuestraApp";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import './SectMain4.css'
export default function SectionMain4() {
  return (
    <section style={{ padding: "20px" }}>
      <img src={imgNuestraApp} alt="" />
      <h3 style={{ color: "#4C2DD3", fontSize: "15px", fontWeight: "600" }}>
        TAREAS ACOMPAÑADAS DE EVIDENCIAS GRAFICAS INCORRUPTIBLES
      </h3>
      <div className="containerPhonesSectMain3">
        <CardNuestraApp
          img={imgPhone}
          title="Calendario de visitas"
          text="Visualiza las vistas programadas en tiempo real por dia, semana o mes"
        />
        <CardNuestraApp
          img={imgPhone}
          title="Planicificacion"
          text="Crea,organiza, ejcuta las actividades de operacion."
        />
        <CardNuestraApp
          img={imgPhone}
          title="Planicificacion"
          text="Crea,organiza, ejcuta las actividades de operacion."
        />
        <CardNuestraApp
          img={imgPhone}
          title="Planicificacion"
          text="Crea,organiza, ejcuta las actividades de operacion."
        />
     
   
    
      </div>
      {/* div targeticas */}
      <div className="containerTargeticasSectMain3">
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
        <MiniCardNuestraApp
          img={<LibraryBooksIcon />}
          text="Agenda de visitas"
        />
      </div>
    </section>
  );
}
