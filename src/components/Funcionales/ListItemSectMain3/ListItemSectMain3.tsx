import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
interface props {
  title: string;
  icon: any;
  setState: any;
  setRender: any;
}
import imgOne from "../../../assets/imgAcordion.jpg";
const cardInfo = [
  {
    title: "Tecnologia",
    text: "Garantizar la mejora de productos, servicios, procesos y especificamente,la generacion de patentes",
    li: ["control", "Organizacion", "Planificacion"],
    img: imgOne,
  },
  {
    title: "Automotriz",
    text: "Garantizar la mejora de productos, servicios, procesos y especificamente,la generacion de patentes",
    li: ["control", "Organizacion", "Planificacion"],
    img: imgOne,
  },
  {
    title: "Retail",
    text: "Garantizar la mejora de productos, servicios, procesos y especificamente,la generacion de patentes",
    li: ["control", "Organizacion", "Planificacion"],
    img: imgOne,
  },
  {
    title: "Salud",
    text: "Garantizar la mejora de productos, servicios, procesos y especificamente,la generacion de patentes",
    li: ["control", "Organizacion", "Planificacion"],
    img: imgOne,
  },
  {
    title: "Industrias",
    text: "Garantizar la mejora de productos, servicios, procesos y especificamente,la generacion de patentes",
    li: ["control", "Organizacion", "Planificacion"],
    img: imgOne,
  },
  {
    title: "Obras",
    text: "Garantizar la mejora de productos, servicios, procesos y especificamente,la generacion de patentes",
    li: ["control", "Organizacion", "Planificacion"],
    img: imgOne,
  },
  {
    title: "Trasporte",
    text: "Garantizar la mejora de productos, servicios, procesos y especificamente,la generacion de patentes",
    li: ["control", "Organizacion", "Planificacion"],
    img: imgOne,
  },
];
import { useRef } from "react";
export default function ListItemSectMain3({
  title,
  icon,
  setState,
  setRender
}: props) {
  const btnRef = useRef<any>(null);
  const myComponetRender = () => {
    setRender(true)
    setState(
      cardInfo.map((item: any) => {
        if (item.title == btnRef.current.innerText) {
          
          return (
            <div key={item.title} className="ConponentCardRenderSect3">
              <div className="containerDivCardRenderText">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul style={{textAlign:'left'}}>
                  {item.li.map((liText: any) => (
                    <li>{liText}</li>
                  ))}
                </ul>
              </div>
              <div className="containerDivCardRenderImg">
                <img style={{width:'350px', borderRadius:'10px'}} src={item.img} />
              </div>
            </div>
          );
        }
      })
    );
  };

  const Onclick = () => {
    myComponetRender();
  };
  return (
    <ListItem>
      <ListItemButton className="SectionMain3BtnList">
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText onClick={Onclick} ref={btnRef} primary={title} />
      </ListItemButton>
    </ListItem>
  );
}
