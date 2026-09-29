import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.scss";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const numberRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    const progress = {
      value: 0,
    };

    tl.to(progress, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",

      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent =
            `${Math.round(progress.value)}`;
        }

        if (progressRef.current) {
          progressRef.current.style.width =
            `${progress.value}%`;
        }
      },
    })

    .to(".loader-content", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
    })

    .to(loaderRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
    });
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>

      <div className="loader-content">

        <div className="loader-top">
          <span>EST. 2026</span>
          <span>Tax & Accounting</span>
        </div>

        <div className="loader-center">

          <p className="loader-small">
            Welcome to
          </p>

          <h1 id="loder-heading">
            Adv. Babar & C0.
          </h1>

          <p id="loader-p">Tax Consultant</p>

          <div className="loader-progress">
            <div
              className="loader-progress-bar"
              ref={progressRef}
            ></div>
          </div>

          <div className="loader-bottom">
            <span>Preparing your experience</span>

            <span>
              <span ref={numberRef}>0</span>%
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Loader;