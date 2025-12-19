import React from "react";
import heroImg from "../assets/img/Reliable3.jpg"; // ← change image if needed

const Hero = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "90vh",
        background:
          "linear-gradient(135deg, #450693 0%, #8C00FF 60%, #FF3F7F 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 5%",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blur shapes */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "300px",
          height: "300px",
          backgroundColor: "#FFC400",
          borderRadius: "50%",
          filter: "blur(140px)",
          opacity: 0.6,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "320px",
          height: "320px",
          backgroundColor: "#FF3F7F",
          borderRadius: "50%",
          filter: "blur(160px)",
          opacity: 0.45,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "8px 18px",
              backgroundColor: "rgba(255,196,0,0.15)",
              color: "#FFC400",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontWeight: "600",
              marginBottom: "18px",
            }}
          >
            Trusted Movers in UAE
          </span>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: "1.15",
              marginBottom: "20px",
              textAlign:"center"
            }}
          >
            Stress-Free Moving <br />
            <span style={{ color: "#FFC400" }}>
              Anywhere in the UAE
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#f3f0ff",
              lineHeight: "1.7",
              maxWidth: "520px",
              marginBottom: "35px",
              textAlign:"justify"
            }}
          >
            WeMovers provides professional house shifting, office relocation,
            packing, storage, and international moving services across Dubai,
            Abu Dhabi, and all UAE cities — safe, fast, and affordable.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            <a
              href="#contact"
              style={{
                padding: "14px 30px",
                background:
                  "linear-gradient(135deg, #FF3F7F, #8C00FF)",
                color: "#ffffff",
                borderRadius: "40px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              }}
            >
              Get Free Quote
            </a>

            <a
              href="#services"
              style={{
                padding: "14px 30px",
                border: "2px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                borderRadius: "40px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div
          style={{
            position: "relative",
            borderRadius: "22px",
            overflow: "hidden",
            boxShadow: "0 25px 45px rgba(0,0,0,0.35)",
          }}
        >
          <img
            src={heroImg}
            alt="Professional Movers in UAE"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              minHeight: "380px",
            }}
          />

          {/* Overlay badge */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              backgroundColor: "rgba(0,0,0,0.55)",
              padding: "12px 18px",
              borderRadius: "14px",
              color: "#fff",
              fontSize: "0.9rem",
              backdropFilter: "blur(6px)",
            }}
          >
            🚚 10+ Years of Trusted Moving Experience
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
