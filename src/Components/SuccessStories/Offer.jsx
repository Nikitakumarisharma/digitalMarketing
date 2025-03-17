import React from "react";

const SuccessStories = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/assets/img/audience-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src="/assets/img/testimonial/03.png"
          alt="Success Story"
          style={{
            width: "auto",
            maxWidth: "90%",
            height: "auto",
            maxHeight: "500px",
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
};

export default SuccessStories;
