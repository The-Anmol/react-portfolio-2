import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const skills = [
  {
    heading: "HTML",
    sub_heading: "lorem ipsum dolor sit  ",
    image: "html",
  },
  {
    heading: "CSS",
    sub_heading: "lorem ipsum dolor sit  ",
    image: "css",
  },
  {
    heading: "JS",
    sub_heading: "lorem ipsum dolor sit  ",
    image: "javascript",
  },
  {
    heading: "NODE JS",
    sub_heading: "lorem ipsum dolor sit  ",
    image: "node",
  },
];
export default function Skills() {
  useEffect(() => {
    AOS.init({
      delay: 2000,
    });
  }, []);
  return (
    <section id="skills" className="relative py-10 bg-tertiary">
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-4xl font-semibold">My Skills</h3>
        <p className="mt-3 text-lg text-secondary">My knowledge</p>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-12">
          {skills?.map((skill) => (
            <div
              key={skill.image}
              className="relative flex items-center w-full max-w-sm gap-5 p-5 text-gray-800 scale-95 bg-white border-2 rounded-md shadow-lg hover:scale-100 hover:shadow-2xl sm:cursor-pointer group border-slate-200 aos-init aos-animate"
            >
              <div className="w-6/12">
                <img
                  className={` w-36 p-2 rounded-2xl aspect-square`}
                  src={`./svg/` + skill.image + `.svg`}
                  alt="html"
                />
              </div>
              <div className="flex flex-col items-start w-full">
                <h6 className="text-xl font-semibold">{skill.heading}</h6>
                <p className="italic">{skill.sub_heading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
