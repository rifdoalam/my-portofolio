import Layout from "@/components/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useRef, useState } from "react";
export default function Portofolio() {
  const [swiper, setSwiper] = useState<any>(null);
  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <>
      <Layout>
        <div className="w-screen h-screen overflow-hidden relative">
          <h1 className="font-bold text-gradient text-[50px]  pt-[100px] pb-[30px] px-[100px]">
            Exploring My Portfolio: Showcasing Achievements, Projects, and
            <br></br>
            Creative Ventures
          </h1>
          <div className="flex gap-4 px-[100px] mb-4">
            <button onClick={goNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#d9d9d9"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#d9d9d9"
                className="w-8 h-8">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button onClick={goPrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#d9d9d9 "
                className="w-8 h-8">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={4}
            loop={true}
            className="mySwiper ml-[100px] layout-porto overflow-x-hidden">
            <SwiperSlide className="w-full h-[50vh] inline-block bg-slate-500">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="w-full h-[50vh] inline-block bg-slate-400">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="w-full h-[50vh] inline-block bg-slate-500">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="w-full h-[50vh] inline-block bg-slate-400">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="w-full h-[50vh] inline-block bg-slate-500">
              Slide 1
            </SwiperSlide>
          </Swiper>
          {/* 
          <div className=" ml-[100px]  layout-porto">
            <div className="w-3/12 h-[50vh] inline-block bg-slate-500"></div>
            <div className="w-3/12 h-[50vh] inline-block bg-slate-300"></div>
            <div className="w-3/12 h-[50vh] inline-block bg-slate-500"></div>
            <div className="w-3/12 h-[50vh] inline-block bg-slate-300"></div>
            <div className="w-3/12 h-[50vh] inline-block bg-slate-500"></div>
            <div className="w-3/12 h-[50vh] inline-block bg-slate-300"></div>
          </div> */}
        </div>
      </Layout>
    </>
  );
}
