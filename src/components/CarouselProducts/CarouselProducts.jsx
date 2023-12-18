import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselProducts.css'
import { BiHeart } from 'react-icons/bi'
function CarouselProducts({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="carousel">
      <h1 className="titlecarousel">Sapatos</h1>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <div className="divimageproduct">
              <img src={product.image} alt="" className="imgproduct" />
              <button className="seeproduct">ver produto</button>
              <div className="buttonproduct">
                <BiHeart className="heartproduct" />
              </div>
            </div>
            <h1 className="nameproduct">{product.name}</h1>
            <h2 className="descriptionproduct">{product.description}</h2>
            <h3 className="priceproduct">R${product.price}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselProducts