import Link from "next/link";
import { type } from "os";

type CardPortoProps = {
  children: React.ReactNode;
};
const CardPorto = (props: CardPortoProps) => {
  const { children } = props;
  return (
    <>
      <div className="w-full h-[50vh]  bg-black flex flex-col justify-end p-4 overflow-hidden">
        {children}
      </div>
    </>
  );
};
type BodyProps = {
  title: string;
  type: string;
  role: string;
  link: string;
};
const Body = ({ title, type, role, link }: BodyProps) => {
  return (
    <>
      <div className="info-porto flex flex-col">
        <div className="mb-3">
          <h2 className="font-bold text-[18px]">{title}</h2>
          <span>{type}</span>
          <br></br>
          <span>{role}</span>
        </div>
        <Link href={link} className="px-4 py-3 text-center bg-slate-500">
          Visit
        </Link>
      </div>
    </>
  );
};
CardPorto.Body = Body;
export default CardPorto;
