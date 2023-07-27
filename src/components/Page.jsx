import React, { useEffect, useRef } from "react";

function Page() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "opacity 0.5s";
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.transition = "opacity 2s";
          entry.target.style.opacity = "0";
        }
      },
      { threshold: 0.7 } // adjust this value to control when the fade out starts
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", background: "lightblue" }}>Section 1</div>
      <div
        ref={sectionRef}
        style={{ height: "100vh", background: "lightcoral", opacity: 0 }}
      >
        Section 2
      </div>
      <div style={{ height: "100vh", background: "lightgreen" }}>Section 3</div>
    </div>
  );
}

export default Page;
