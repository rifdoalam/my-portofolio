import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="w-screen flex justify-between items-center px-[80px] py-[30px] z-10 fixed">
        <div>
          <Link href={"/"} className="text-[24px] font-bold">
            R.
          </Link>
        </div>
        <div className="flex list-none text-[16px] text-[#D9D9D9]">
          <li className="pl-10">
            <Link className="nav-link" href={"#"}>
              About me
            </Link>
          </li>
          <li className="pl-10">
            <Link className="nav-link" href={"portofolio"}>
              Portofolio
            </Link>
          </li>
          <li className="pl-10">
            <Link className="nav-link" href={"contact"}>
              Contact
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
}
