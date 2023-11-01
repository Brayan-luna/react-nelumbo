interface props {
  img: any;
  text: string;
}

export default function MiniCardNuestraApp({ img, text }: props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-around',
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "blue",
          border: "3px blue solid",
          width: "50px",
          height: "50px",
          borderRadius:'10px',
          padding:'10px'
        }}
      >
        {img}
      </div>
      <p>{text}</p>
    </div>
  );
}
