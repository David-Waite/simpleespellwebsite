import { useState, useEffect } from "react";
import { useRef } from "react";
import styles from "./index.css";

export default function App(props) {
  let images = [
    "../simplySpell1.PNG",
    "../simplySpell2.PNG",
    "../simplySpell3.PNG",
    "../simplySpell4.PNG",
    "../simplySpell5.PNG",
    "../simplySpell6.PNG",
    "../simplySpell7.PNG",
    "../simplySpell8.PNG",
    "../simplySpell9.PNG",
  ];

  function resetSlideShow() {
    slideContainerRef.current.scrollLeft = 0;
  }

  const slideContainerRef = useRef(null);
  const [hideLeft, setHideLeft] = useState("none");
  const [hideRight, setHideRight] = useState("");

  function handleBackArrow() {
    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft -
      slideContainerRef.current.children[0].clientWidth;
  }

  function handleScroll() {
    const totalLength =
      slideContainerRef.current.children[0].clientWidth * (images.length - 1);

    if (slideContainerRef.current.scrollLeft === 0) {
      setHideLeft("none");
    } else {
      setHideLeft("");
    }

    if (slideContainerRef.current.scrollLeft >= totalLength - 100) {
      setHideRight("none");
    } else {
      setHideRight("");
    }
  }
  function handleFowardArrow() {
    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft +
      slideContainerRef.current.children[0].clientWidth;
  }
  const slideElements = images.map((image) => {
    return (
      <div key={image} className={styles.slide}>
        <img src={image} />
      </div>
    );
  });

  useEffect(() => {
    resetSlideShow();
  }, [props]);

  return (
    <>
      <div className={"carousel"}>
        <div
          className={"slideContainer"}
          ref={slideContainerRef}
          onScroll={handleScroll}
        >
          {slideElements}
        </div>

        <div
          style={{ display: hideLeft }}
          className={`${styles.arrow} ${styles.arrowBack}`}
          onClick={handleBackArrow}
        >
          <p>❮</p>
        </div>

        <div
          style={{ display: hideRight }}
          className={`${styles.arrow} ${styles.arrowForward}`}
          onClick={handleFowardArrow}
        >
          <p>❯</p>
        </div>
      </div>
    </>
  );
}
