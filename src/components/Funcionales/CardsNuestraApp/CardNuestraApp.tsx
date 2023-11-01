interface props {
    img: any;
    title: string;
    text: string;
}
export default function CardNuestraApp({ img,title, text }: props) {
    return (
      <div className="divPhoneNuestraApp">
            <h3 className="titleNuestraAppPhone">{title}</h3>
            <img style={{width:'140', height:'260px'}} src={img} alt="" />
            <p style={{padding:'10px'}}>{text}</p>
      </div>
    );
  }
  
  

