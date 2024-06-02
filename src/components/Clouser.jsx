import Banner_one from "../assets/Banner_01.jpeg";
import Banner_Two from "../assets/Banner_02.webp";
import Banner_Three from "../assets/Banner_03.webp";

const Clouser = () => {
  return (
    <div>
    

    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner_Two} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Banner_one} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Banner_Three} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




      
    </div>
  )
}

export default Clouser
