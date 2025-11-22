import { Link } from "react-router";
import HeaderLogo from "../../assets/header-bg.png";
import "../../Custom_Style.css";
export default function Header() {
  const MenuLinks = (
    <>
      <ul className="flex justify-evenly items-center h-full gap-12">
        <Link to={"/"}>
          <li className="text-[22px] s-text-color">Home</li>
        </Link>
        <Link to={"/"}>
          <li className="text-[22px] s-text-color">Courses</li>
        </Link>
        <Link to={"/"}>
          <li className="text-[22px] s-text-color">Careers</li>
        </Link>
        <Link to={"/"}>
          <li className="text-[22px] s-text-color">Blog</li>
        </Link>
        <Link to={"/"}>
          <li className="text-[22px] s-text-color">About Us</li>
        </Link>
        <div className="flex gap-5">
          <Link to={"/"}>
            <li className="text-[22px] main-text-color py-2 px-[50px] bg-white rounded-4xl">
              Login
            </li>
          </Link>
          <Link to={"/"}>
            <li className="text-[22px] s-text-color py-2 px-[35px] bg-white/40 rounded-4xl">
              Sign Up
            </li>
          </Link>
        </div>
      </ul>
    </>
  );

  return (
    <section className="pop-regular main-bg-color">
      <div className=" h-[100px] flex items-center justify-between max-w-[1400px] mx-auto">
        <div>
          <img className="w-[60px]" src={HeaderLogo} alt="" />
        </div>
        <div>{MenuLinks}</div>
      </div>
    </section>
  );
}
