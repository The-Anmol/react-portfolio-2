import React from "react";
import aboutImg from "../assets/images/about.png";
const info = [
  { text: "Years experience", count: "04" },
  { text: "Completed Projects", count: "24" },
  { text: "Companies Work", count: "06" },
];
export default function About() {
  return (
    <section id="about" className="py-10 text-white border border-t-tertiary">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <div className="flex flex-col-reverse items-center max-w-6xl gap-12 px-10 mx-auto md:flex-row md:gap-6">
          <div className="p-2">
            <div className="my-3 text-gray-600">
              <p className="w-11/12 mx-auto leading-7 text-justify text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                eos, quam vel quisquam, explicabo sit labore dignissimos optio
                ratione quibusdam doloribus pariatur consequuntur sint.
                Reprehenderit cupiditate possimus facere quasi voluptatem?
              </p>
              <div className="flex items-center mt-10 gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="text-2xl font-semibold text-white md:text-4xl">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="text-xs md:text-base">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="./src/assets/Code_a_program.pdf"
                className="bg-red-400 btn-primary w-fit"
                download
              > Download CV 
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 mt-6 md:mt-0">
            <div className="relative w-11/12 h-full max-w-sm lg:w-96 sm:w-10/12 aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="object-cover w-full bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};