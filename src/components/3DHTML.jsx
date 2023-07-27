import React from "react";

function HtmlComp() {
  return (
    <div className="container">
      <iframe
        src="/3d-plot.html"
        title="3D Plot"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default HtmlComp;
