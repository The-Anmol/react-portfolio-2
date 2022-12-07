import React, { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Project = lazy(() => import("./components/Project"));
const Hireme = lazy(() => import("./components/Hireme"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
import Bot from "./components/Bot";

const App = () => {
  return (
    <Suspense fallback={<Loader fullScreen />}>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default App;
