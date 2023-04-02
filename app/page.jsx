import AboutSectionOne from "@/components/About/AboutSectionOne";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features />
      <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
