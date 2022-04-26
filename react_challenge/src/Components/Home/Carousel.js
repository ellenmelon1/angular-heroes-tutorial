import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import '../../Styling/Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { fetchCarouselImages } from '../../api';
import { useState, useEffect } from 'react';
import Home from './Home.js';

SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [slides, setSlides] = useState();

  useEffect(() => {
    fetchCarouselImages().then((images) => {
      console.log(images);
      setSlides(images);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Swiper
        id="main"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay
      >
        <SwiperSlide>
          <img
            src={slides[0].ImageUrl}
            alt={slides[0].alt}
            key="slide-1"
            className="swiper_img"
          ></img>
          <div className="swiper_text">
            <h3 className="swiper_title">{slides[0]['Title']}</h3>
            <p className="swiper_subtitle">{slides[0]['Subtitle']}</p>
            <button>Contact us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slides[1].ImageUrl}
            alt={slides[1].alt}
            key="slide-2"
            className="swiper_img"
          ></img>
          <div className="swiper_text">
            <h3 className="swiper_title">{slides[1]['Title']}</h3>
            <p className="swiper_subtitle">{slides[1]['Subtitle']}</p>
            <button>Contact us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slides[2].ImageUrl}
            alt={slides[2].alt}
            className="swiper_img"
            key="slide-3"
          ></img>
          <div className="swiper_text">
            <h3 className="swiper_title">{slides[2]['Title']}</h3>
            <p className="swiper_subtitle">{slides[2]['Subtitle']}</p>
            <button>Contact us</button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Home />
    </div>
  );
};

export default Carousel;
