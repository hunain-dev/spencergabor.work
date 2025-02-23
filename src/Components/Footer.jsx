import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); 

    let footerAnimation = gsap.to(".Footer", {
      height: "100vh", // ✅ Stretch footer
      ease: "power2.out",
      scrollTrigger: {
        backgorund: "red",
        trigger: ".Footer",
        start: "top bottom", // 
        end: "top center", //
        scrub: true, // 
      },
    });

    return () => {
      footerAnimation.kill(); // ✅ Cleanup GSAP animation
    };
  }, []);

  return (
    <div className="Footer">
      <div className="Footertop">
        <h1>Contact</h1>
      </div>
      <div className="Footerbtm">
        <h2>SPENCERGMAIL.COM</h2>
        <h3>Instagram</h3>
        <h3>Dribbble</h3>
        <h6>All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
