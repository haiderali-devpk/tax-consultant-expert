import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({
  children,
  animation = "fadeUp",
  duration = 1,
  delay = 0,
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animations = {
        fadeUp: {
          opacity: 0,
          y: 80,
        },

        fadeDown: {
          opacity: 0,
          y: -80,
        },

        fadeLeft: {
          opacity: 0,
          x: -80,
        },

        fadeRight: {
          opacity: 0,
          x: 80,
        },

        scale: {
          opacity: 0,
          scale: 0.8,
        },
      };

      gsap.fromTo(
        containerRef.current,
        animations[animation] || animations.fadeUp,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",

          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animation, duration, delay]);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollAnimation;

