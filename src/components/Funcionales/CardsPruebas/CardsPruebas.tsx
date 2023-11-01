interface props {
  porcentaje: string;
  text: string;
}

export default function CardsPruebas({ porcentaje, text }: props) {
  return (
    <div className="divCardsPruebasSectMain9">
      <p style={{fontSize:'30px', fontWeight:'bold', marginBottom:'0px'}}>{porcentaje}</p>
      <p  style={{marginTop:'0px'}}>{text}</p>
    </div>
  );
}
