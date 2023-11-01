
import './style.css'
interface props {
  img: any;
  text: string;
  nexTex: string;
}


export default function CardBenficios({ img, text,nexTex }: props) {

  return (
    <div className="containerCardsBene" >
      <div  className='containerIcon'>
      <img src={img} className='Icon' />
      </div>
      <p className='text'>{text}<br/> <span className='nexText'>{nexTex}</span></p>
      
    </div>
  );
}
