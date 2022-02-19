import { Children } from "react";
import bluePrint from '../bluePrints/customersPrint'
import ContactCard from "../components/ContactCard";
import Slide from "../components/Slide";
import { SwiperSlide } from "swiper/react";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
export default () => {
  return (
    <>
      <Hero />
      <Slide>
        {Children.toArray(
          bluePrint.map((customer) => {
            return (
              <SwiperSlide>
                <ContactCard
                  name={customer.name}
                  mobile={customer.mobile}
                  about={customer.about}
                  image={customer.image}
                />
              </SwiperSlide>
            );
          })
        )}
      </Slide>

      <Testimonials />
    </>
  );
};
