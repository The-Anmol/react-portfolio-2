import React, { useEffect, useState } from "react";

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
const Navbar = () => { 
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] bg-white/70  text-gray-900 `}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl font-bold uppercase">
            {/* A<span className="text-cyan-600">le</span>x */}
          </h4>
        </div>
        <div
          className={` md:bg-white/0 bg-white text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu) => (
              <li key={menu.name} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-900"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu black"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
