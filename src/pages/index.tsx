import About from "@/components/About";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/NavBar";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <WhatIDo />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
