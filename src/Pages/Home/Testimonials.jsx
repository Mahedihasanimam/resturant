import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import reviewimg from "../../assets/home/Group.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  console.log(testimonial);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonial(data);
      });
  }, []);
  return (
    <section>
      <div>
        <SectionTitle
          subtitle={"What Our Clients Say"}
          title={"TESTIMONIALS"}
        />
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonial.map((reviewtext) => (
            <SwiperSlide key={reviewtext._id} reviewtext={reviewtext}>
              <div className="text-center mb-20 w-1/2 mx-auto space-y-8 ">
                <Rating className="mx-auto"
                  style={{ maxWidth: 180 }}
                  value={reviewtext.rating}
                  readOnly
                />
                <img className="mx-auto" src={reviewimg} alt="" />
                <p>{reviewtext.details}</p>
                <h3 className="font-bold text-xl text-[#BB8506]">
                  {reviewtext.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
