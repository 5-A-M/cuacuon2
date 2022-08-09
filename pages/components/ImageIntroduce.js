import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper";

const ImageIntroduce = (props) => {
  return (
    <div className="sjklasjkaasleww" style={{width: "100%", position: "relative", zIndex: 4}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{width: "100%", position: "relative", zIndex: 4}}
      >
        <SwiperSlide>
          <img src="images/banner1.jpg" alt="open" className="dsjkjaksjwkqa" style={{width: "100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner2.jpg" alt="open" className="dsjkjaksjwkqa" style={{width: "100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner3.jpg" alt="open" className="dsjkjaksjwkqa" style={{width: "100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner4.jpg" alt="open" className="dsjkjaksjwkqa" style={{width: "100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner5.jpg" alt="open" className="dsjkjaksjwkqa" style={{width: "100%"}} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageIntroduce