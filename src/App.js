import './App.css';
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

function App() {
  const cards = [
    {
      titulo:"Remera Sin Manga Tropics Palm ",
      descripcion: "Muscle Fit. Estampa side to side. Estampa interna de marca y talle. Grifa logo lateral. 100% Algodón",
      img:"https://www.cristobalcolon.com/fullaccess/item24944foto106290.jpg",
      btnText:"+ INFO",
    },
    {
      titulo:"Vestido Rip Curl Batik",
      descripcion: "Vestido Rip Curl Batik. Full print. Vestido miin. Breteles regulables. Botones coco. Multietiquetas. Dije logo RC. 100% Algodón. Tejido diferenciado. El proceso de batik es un teñido artesanal y existen variaciones en cada prenda.",
      img:"https://www.cristobalcolon.com/fullaccess/item25282foto107300.jpg",
      btnText:"+ INFO",
    },
    {
      titulo:"Remera Rip Curl Cosmic Tribal",
      descripcion:"Remera Rip Curl Cosmic Tribal. Standard fit. Fullprint. Multi etiquetas. 100% algodón. Jersey. ",
      img:"https://www.cristobalcolon.com/fullaccess/item25375foto107612.jpg",
      btnText:"+ INFO",
    },
  ]
  return (
    <div className="App">
      <Navbar/>
      <div className='d-flex'>
        {cards.map(({titulo, descripcion, img, btnText}, index) => (<Card
          key={index}
          titulo={titulo}
          descripcion={descripcion}
          img={img}
          btnText={btnText}
      />))} 
      </div>
      
    </div>
  );
}

export default App;
