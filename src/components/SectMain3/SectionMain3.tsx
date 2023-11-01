import ListItemSectMain3 from "../Funcionales/ListItemSectMain3/ListItemSectMain3";
import imgClick from "../../assets/HacemosClick.png";
import { Box, List } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import imgOne from "../../assets/imgAcordion.jpg";
import {useState} from 'react'
const infoItemList = [
  {
    title: "Tecnologia",

    icon: <InboxIcon />,
  },
  {
    title: "Automotriz",

    icon: <InboxIcon />,
  },
  {
    title: "Trasporte",

    icon: <InboxIcon />,
  },
  {
    title: "Retail",

    icon: <InboxIcon />,
  },
  {
    title: "Salud",

    icon: <InboxIcon />,
  },
  {
    title: "Industrias",

    icon: <InboxIcon />,
  },
  {
    title: "Obras",

    icon: <InboxIcon />,
  },
];


import CardClickNegocio from "../Funcionales/CardClickNegocio/CardClickNegocio";
import "./SectMain3.css";

export default function SectionMain3() {
  // funtion para renderizar cards segun el boton de cada lista

const [componentRender,setComponentRender] = useState()

  function onClickChild(state:any){
    setComponentRender(state)
  }
  return (
    <>
      <section
        className="SectionMain3Destock"
        style={{ backgroundColor: "#F4F4F4" }}
      >
        <img src={imgClick} alt="" />
        <h3>
          FLEXIBILIDAD Y ADAPTACION A LAS NECESIDADES DE{" "}
          <span> TU NEGOCIO</span>
        </h3>
        <div style={{ display: "flex", justifyContent: 'flex-start' }}>
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <div aria-label="main mailbox folders">
              <List className="SectionMain3List">
                {infoItemList.map((item) => (
                  <ListItemSectMain3  
                    state={componentRender}
                    setState={onClickChild}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </List>
            </div>
          </Box>
          <Box>{componentRender}</Box>
        </div>
      </section>
      <section
        className="SectionMain3AndroidTable"
        style={{ backgroundColor: "#F4F4F4" }}
      >
        <img src={imgClick} alt="" />
        <h3>
          FLEXIBILIDAD Y ADAPTACION A LAS NECESIDADES DE{" "}
          <span> TU NEGOCIO</span>
        </h3>
        <div>
          <CardClickNegocio
            img={imgOne}
            title="Tecnologia"
            text="  Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica"
          />
          <CardClickNegocio
            img={imgOne}
            title="Automotriz"
            text="  Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica"
          />
          <CardClickNegocio
            img={imgOne}
            title="Trasportes Publicos Y Privados"
            text="  Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica"
          />
          <CardClickNegocio
            img={imgOne}
            title="Retail"
            text="  Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica"
          />
          <CardClickNegocio
            img={imgOne}
            title="Salud"
            text="  Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica"
          />
          <CardClickNegocio
            img={imgOne}
            title="Industrias"
            text="  Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica"
          />
          <CardClickNegocio
            img={imgOne}
            title="Obras"
            text="  Lizards are a widespread group of squamate reptiles, with
        over 6,000 species, ranging across all continents except
        Antarctica"
          />
        </div>
      </section>
    </>
  );
}
