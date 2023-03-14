import Slider from "react-slick";

import "./Banner.scss";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div className="slider__item">
        <img
          src="https://images.unsplash.com/photo-1674853245453-1f6f6818a354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="img-1"
        />
      </div>
      <div className="slider__item">
        <img
          src="https://images.unsplash.com/photo-1674718044330-bd08bddce5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="img-1"
        />
      </div>
      <div className="slider__item">
        <img
          src="https://images.unsplash.com/photo-1674817267962-1b4d93f7f3d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="img-1"
        />
      </div>
      <div className="slider__item">
        <img
          src="https://images.unsplash.com/photo-1674757273875-e47dbfbda82c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="img-1"
        />
      </div>
    </Slider>
  );
}

export default Banner;
