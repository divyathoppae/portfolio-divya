import About from "@/components/About";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Impact />
        <Testimonials />
        <Resume />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
