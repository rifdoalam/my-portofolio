import Layout from "@/components/layout";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Layout>
        <div className="w-screen h-screen overflow-hidden relative flex pt-[150px] px-[80px]">
          <div>
            <span>Unveiling the Journey, Passions, and Pursuits Within</span>
            <h1 className="text-[70px] font-bold text-gradient">
              RIFDO SHAH ALAM
            </h1>
            <p className="w-4/12 leading-8">
              I am a software engineer with a focus on developing innovative and
              scalable software.I enjoy collaborating in teams and continuously
              learning to broaden my horizons in the world of technology.
            </p>
          </div>
          <div className="h-full flex flex-col justify-center">
            <h1 className="font-bold text-[#d9d9d9] text-[25px]">Experience</h1>
          </div>
          {/* <div>
            <Image
              src={"/rifdo.png"}
              className="absolute bottom-0 left-1  w-[450px]"
              width={500}
              height={500}
              alt=""
            />
          </div> */}
        </div>
      </Layout>
    </>
  );
}
