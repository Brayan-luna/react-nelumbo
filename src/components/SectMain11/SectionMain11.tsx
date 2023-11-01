import imgCheckPlus from "../../assets/Check+.png";
import imgHablaExpertp from "../../assets/HablaConExperto.png";
import { TextField, MenuItem, Box, Button } from "@mui/material";
import './SectMain11.css'
const currencies = [
  {
    value: "automotriz",
    label: "Automotriz",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function SectionMain11() {
  return (
    <section className="sectionMain11Container" >
      <div>
        <img src={imgCheckPlus} alt="" />
        <p>ASISTENCIA DE VENTAS</p>
        <img src={imgHablaExpertp} alt="" />
        <p style={{ fontSize: "20px" }}>
          Contamos con profecionales que estan listos para responder tus
          preguntas y acelerar la eficieencia opereacional de tu empresa.
        </p>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          boxShadow: "rgba(0,0,0,21%) 0px 5px 15px",
          backgroundColor: "white",
          margin: "40px 20px 60px 20px",
          padding: "40px 60px",
          borderRadius: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <p
            style={{
              textAlign: "left",
              paddingLeft: "8px",
              paddingRight: "51px",
              fontWeight: "600",
              fontSize: "26px",
            }}
          >
            Completa tus datos y pronto nos comunicaremos contigo
          </p>

          <TextField
            fullWidth
            sx={{ backgroundColor: "#DBE9F8" }}
            id="Name"
            label="Nombres y Apellidos*"
            type="text"
          />
          <TextField
            sx={{ backgroundColor: "#DBE9F8" }}
            id="Correo"
            label="Correo eltronico*"
            type="text"
          />
          <TextField
            sx={{ backgroundColor: "#DBE9F8" }}
            id="Telefono"
            label="Telefono de contacto*"
            type="text"
          />
          <TextField
            id="outlined-select-currency"
            select
            defaultValue="automotriz"
            sx={{ backgroundColor: "#DBE9F8", textAlign: "left" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={{ overflowY: "scroll", backgroundColor: "#DBE9F8" }}
            id="Name"
            multiline
            rows={3}
          />
        </div>
        <Button
          sx={{
            padding: "15px 35px",
            color: "white",
            backgroundColor: "#5807D3",
            marginTop: "20px",
            fontWeight: "600",
          }}
        >
          ENVIAR
        </Button>
      </Box>
    </section>
  );
}
