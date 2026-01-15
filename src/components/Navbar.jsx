// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 bg-black h-20 w-full flex flex-col sm:flex-col md:flex-row justify-between items-center pl-5 pr-5 z-20">
//       <div className="flex gap-1">
//         <img src="/images/logo.png" />
//         <h1 className="text-purple-300 text-3xl">Velvet Pour</h1>
//       </div>

//       <div className="list-none flex gap-6 text-1xl text-white pt-2">
//         <li>
//           <a href="#cocktails">Cocktails</a>
//         </li>
//         <li>
//           <a href="#about">About Us</a>
//         </li>
//         <li>
//           <a href="#art">The Art</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.to(navRef.current, {
      backdropFilter: "0",
      backgroundColor: "rgba(0,0,0,0)",
      scrollTrigger: {
        trigger: document.body,
        start: "top -80",
        end: 99999,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <nav
      ref={navRef}
      className="fixed top-0 h-20 w-full flex flex-col sm:flex-col md:flex-row justify-between items-center pl-5 pr-5 z-20
                 bg-black/40 backdrop-blur-0 transition-none"
    >
      <div className="flex gap-1 items-center">
        <img src="/images/logo.png" alt="logo" />
        <h1 className="text-purple-300 text-3xl">Velvet Pour</h1>
      </div>

      <ul className="flex gap-6 text-white pt-2">
        <li>
          <a href="#cocktails">Cocktails</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#art">The Art</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
