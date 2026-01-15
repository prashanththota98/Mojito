import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const splitMocktail = new SplitText(".split-title", { type: "chars" });
    gsap.from(splitMocktail.chars, {
      y: 40,
      opacity: 0,
      stagger: 0.21,
      duration: 3,
      ease: "power3.out",
    });
    const video = document.querySelector("video");
    video.addEventListener("loadedmetadata", () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    });
  });
  return (
    <section className="relative bg-black text-white pt-20 overflow-hidden">
      {/* Left Leaf */}
      <img
        src="/images/hero-left-leaf.png"
        alt="left leaf"
        className="absolute left-0 top-1/4 w-24 md:w-64 z-10"
      />

      {/* Right Leaf */}
      <img
        src="/images/hero-right-leaf.png"
        alt="right leaf"
        className="absolute right-0 top-1/4 w-24 md:w-64 z-10"
      />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[6rem] md:text-[8rem] font-bold tracking-wide split-title">
          Mojito
        </h1>

        {/* Video BELOW heading */}
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          className="w-[50%] inset-0"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
