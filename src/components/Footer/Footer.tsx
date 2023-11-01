import iconWasaApp from "../../assets/whasaApp.png";
import iconFacebook from "../../assets/facebook.png";
import iconLinkeding from "../../assets/linkding.png";
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      
        <p style={{ color: "white" }}>
          Check+ @ 2023- Todos los derechos reservados
        </p>
        <div>
          <img src={iconLinkeding} alt="" />
          <img src={iconFacebook} alt="" />
          <img src={iconWasaApp} alt="" />
        </div>
      
    </footer>
  );
}
