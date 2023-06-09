import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-30 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
            setActive("");
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Turbold
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          <div className="flex  gap-5">
            <a
              className="cursor-pointer"
              target="blank"
              href="https://www.facebook.com/Fateu9/">
              <AiFillFacebook className="w-[30px] h-[30px]  " />
            </a>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://www.instagram.com/innerrae02/">
              <AiFillInstagram className="w-[30px] h-[30px] cursor-pointer" />
            </a>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://github.com/RayeTheDev">
              <AiFillGithub className="w-[30px] h-[30px] cursor-pointer" />
            </a>
          </div>

          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active == link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}></img>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <a
                className="cursor-pointer"
                target="blank"
                href="https://www.facebook.com/Fateu9/">
                Facebook
              </a>
              <a
                className="cursor-pointer"
                target="blank"
                href="https://www.instagram.com/innerrae02/">
                Insatgram
              </a>
              <a
                className="cursor-pointer"
                target="blank"
                href="https://github.com/RayeTheDev">
                Github
              </a>
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active == link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
