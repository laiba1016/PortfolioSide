"use client"
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl-pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent"> Laiba Nadeem </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A passionate and detail-oriented Frontend Web Developer specializing in building modern, high-performance, and responsive web applications using Next.js.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/17L97uldm7phWDLMeV3rfn7xEOBf7q4FU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb:8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}