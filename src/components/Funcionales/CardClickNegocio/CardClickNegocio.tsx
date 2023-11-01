import {
  CardMedia,
  Typography,
  Card,
  CardContent,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface props {
  img: any;
  title: string;
  text: string;
}

export default function CardClickNegocio({ img, title, text }: props) {
  return (
    <>
      <Accordion
        sx={{
          boxShadow: "none",
          backgroundColor: "#F4F4F4",
          border: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card
            className="CardImgAcordion"
            sx={{
              maxWidth: 345,
              border: "none",
              backgroundColor: "#F4F4F4",
              boxShadow: "none",
            }}
          >
            <CardMedia
              className="imgCardMedia"
              sx={{ height: 230, borderRadius: "20px" }}
              title="green iguana"
            >
              <img className="imgCardMedia" src={img} alt="" />
            </CardMedia>
            <CardContent sx={{ width: "100%", padding: "20px 0px 0px 0px" }}>
              <Typography sx={{ textAlign: "" }} color="text.secondary">
                {text}
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
