import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import hero from "../assets/images/hero.png";

AOS.init({ duration: 500 });
const social_media = [
  <FiInstagram color="#000" />,
  <FiFacebook color="#000" />,
  <FiLinkedin color="#000" />,
  <FiTwitter color="#000" />,
];
export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center min-h-screen py-10 md:flex-row"
    >
      <div
        data-aos="fade-in"
        className="flex items-center justify-center flex-1 h-full"
      >
        <img src={hero} alt="" className="object-cover h-full md:w-11/12" />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
            <span className="text-5xl text-cyan-600 md:text-6xl">
              Hello!
              <br />
            </span>
            My Name is <span>Anmol</span>
          </h1>
          <h4 className="mt-4 text-lg font-bold leading-5 text-gray-600 md:text-2xl md:leading-normal">
            Fullstack Developer
          </h4>
          <a href="#contact" className="mt-8 w-fit btn-primary">
            Contact Me
          </a>
          <div className="flex items-center justify-center gap-5 mt-8 text-3xl md:justify-start">
            {social_media?.map((icon,i) => (
              <div
                key={i}
                className="text-gray-600 cursor-pointer hover:text-black "
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};