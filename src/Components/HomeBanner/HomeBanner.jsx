import bannerImage1 from "../../assets/images/HomeBanner/banner1.jpg";
import bannerImage2 from "../../assets/images/HomeBanner/banner2.jpg";
import bannerImage3 from "../../assets/images/HomeBanner/banner3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./HomeBanner.css";

import { Pagination, Navigation, EffectFade } from "swiper/modules";
const HomeBanner = () => {
  const bannerData = [
    {
      image: bannerImage1,
      title: "Prime Office Spaces for Your Business Growth",
      description:
        "Unlock the potential of prime office spaces strategically located in bustling urban centers. Elevate your business presence and foster innovation with state-of-the-art facilities and amenities. Whether you're a startup looking for a collaborative workspace or an established corporation in need of a prestigious headquarters, we have the perfect office solution for you.",
      websiteName: "Urban Edge",
    },
    {
      image: bannerImage2,

      title: "Inspiring Office Interiors for Productivity",
      description:
        "Transform your workspace into a hub of productivity and creativity with inspiring office interiors. From modern design elements to ergonomic furnishings, create an environment that empowers your team to thrive. Our office spaces are meticulously designed to enhance collaboration, focus, and employee well-being, ensuring your business stays ahead of the curve.",
      websiteName: "Urban Edge",
    },
    {
      image: bannerImage3,
      title: "Retail Spaces in High-Traffic Locations",
      description:
        "Discover vibrant retail spaces in high-traffic locations, perfect for showcasing your products and attracting customers. Maximize visibility and drive sales with storefronts designed to captivate your audience.From trendy boutiques to flagship stores, our retail properties offer endless opportunities to establish your brand and grow your business.",
      websiteName: "Urban Edge",
    },
  ];
  return (
    <div className="mt-12 mb-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          navigation:"true"
        }}
        effect="fade"
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {bannerData.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="hero min-h-screen bg-no-repeat bg-cover rounded-xl"
              style={{
                backgroundImage: `url(${data.image})`,backgroundRepeat:"no-repeat",
              }}
            >
              <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="w-11/12">
                  <h1 className="mb-5 text-2xl lg:text-5xl font-bold"> {data.title} </h1>
                  <p className="mb-5 text-sm md:text-base lg:text-base">{data.description}</p>
                  <button className="btn btn-primary btn-sm md:btn-md lg:btn-md">Explore More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
