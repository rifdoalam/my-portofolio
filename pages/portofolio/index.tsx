import Layout from "@/components/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import CardPorto from "@/components/fragments/card-porto";
interface Portofolio {
  title: number;
  type: string;
  image: string;
  role: string;
  link: string;
}
export default function Portofolio() {
  const [swiper, setSwiper] = useState<any>(null);
  const [data, setData] = useState<any>([]);
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

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/porto");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="w-screen h-screen  overflow-hidden  relative">
          <h1 className="font-bold text-gradient text-[32px] px-[20px] md:text-[70px]  pt-[100px] md:pb-[30px] md:px-[100px]">
            Explore My Portfolio: Showcasing creativity one project at a time.
          </h1>
          <div className="flex gap-4 pl-[20px] md:px-[100px] mb-4">
            <button onClick={goPrev}>
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
            <button onClick={goNext}>
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
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
            }}
            loop={true}
            className="mySwiper ml-4 md:ml-[100px] layout-porto overflow-x-hidden">
            {data.map((item: Portofolio) => {
              return (
                <>
                  <SwiperSlide className="inline-block">
                    <CardPorto>
                      <CardPorto.Body
                        title={`${item.title}`}
                        type={`${item.type}`}
                        role={`${item.role}`}
                        link={`${item.link}`}
                      />
                    </CardPorto>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </Layout>
    </>
  );
}
