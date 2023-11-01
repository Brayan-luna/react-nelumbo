import { Button } from "@mui/material";
import './SectMain10.css'
export default function SectionMain10() {
  return (
    <section style={{ padding: "20px 35px" }}>
      <div
        style={{
          border: "solid 4px #5807D3",
          display: "flex",
          flexDirection:'column' ,
          justifyContent: "center",
          alignItems:'center',
          padding:'30px 40px 40px 40px'
          
        }}
      >
        <p style={{}}>
          !Conoce nuestro demo y entenderas por que necesitas Check+!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptatem tempore eum sapiente suscipit, voluptatum doloremque libero
          debitis velit nisi nihil, autem facilis officia aliquam hic esse
          laboriosam, eveniet necessitatibus.
        </p>
        <div className="divContainerBtnsConoceDemo">
        <Button className="btnSolicitarDemoSect10" sx={{ backgroundColor: "#3A87D9", color:'white', marginBottom:'20px', padding:'10px 20px' }}>SOLICITAR DEMO</Button>
        <Button className= 'btnConoceBeneficiosSect10' sx={{ backgroundColor: "#5807D3", color:'white',padding:'10px 20px'  }}>
          CONOCE NUESTROS BENEFICIOS
        </Button>
        </div>
      </div>
    </section>
  );
}
