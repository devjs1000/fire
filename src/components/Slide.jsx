import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

export default ({ children }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#000",
      }}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      // loop={true}
      // autoplay={{
      //     delay: 1500,
      //     disableOnInteraction: false
      // }}

      spaceBetween={20}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mt-4 py-8 lg:py-8"
    >
      {children}
    </Swiper>
  );
};
