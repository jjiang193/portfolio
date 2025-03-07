"use client";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Education,
  Tech,
  Works,
  Contact,
} from "./components";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Education />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
