import React from "react";

const AboutWeMovers = () => {
  return (
    <section
      style={{
        background: "#450693",
        padding: "100px 8%",
        color: "#ffffff",
      }}
    >
      {/* MAIN WRAPPER */}
      <div
        style={{
          display: "flex",
          gap: "80px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <span
            style={{
              background: "#FFC400",
              color: "#450693",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            About WeMovers
          </span>

          <h2
            style={{
              margin: "22px 0",
              fontSize: "44px",
              lineHeight: "1.2",
              color: "#ffffff",
            }}
          >
            We Don’t Just Move <br /> Homes — We Move Lives
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.9",
              color: "#ffffff",
              opacity: 0.9,
              marginBottom: "18px",
            }}
          >
            At <strong>WeMovers.ae</strong>, relocation is more than transportation.
            It’s about trust, responsibility, and delivering peace of mind.
            From apartments to offices and villas, every move is handled with
            precision and care.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.9",
              color: "#ffffff",
              opacity: 0.9,
            }}
          >
            Backed by trained professionals, modern equipment, and a customer-first
            mindset, we ensure smooth, secure, and stress-free moving experiences
            across the UAE.
          </p>

          {/* VALUES */}
          <div style={{ marginTop: "28px" }}>
            {[
              "Expert packing & careful handling",
              "Fast, secure & damage-free delivery",
              "Clear pricing with zero hidden charges",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    color: "#FFC400",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  ✔
                </span>
                <p style={{ margin: 0, opacity: 0.95 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO CARDS */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            display: "grid",
            gap: "26px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "linear-gradient(135deg, #8C00FF, #450693)",
              padding: "38px",
              borderRadius: "22px",
              textAlign: "center",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            }}
          >
            <h3 style={{ fontSize: "38px", margin: 0, color: "#FFC400" }}>
              10+
            </h3>
            <p style={{ marginTop: "8px", opacity: 0.9 }}>
              Years of Excellence
            </p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "#8C00FF",
              padding: "38px",
              borderRadius: "22px",
              textAlign: "center",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            }}
          >
            <h3 style={{ fontSize: "38px", margin: 0, color: "#FFC400" }}>
              5,000+
            </h3>
            <p style={{ marginTop: "8px", opacity: 0.9 }}>
              Successful Moves
            </p>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "#FF3F7F",
              padding: "38px",
              borderRadius: "22px",
              textAlign: "center",
              boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            }}
          >
            <h3 style={{ fontSize: "38px", margin: 0, color: "#ffffff" }}>
              24/7
            </h3>
            <p style={{ marginTop: "8px" }}>
              Dedicated Support
            </p>
          </div>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div
        style={{
          marginTop: "90px",
          background: "#8C00FF",
          padding: "28px",
          borderRadius: "18px",
          textAlign: "center",
          fontWeight: 600,
          letterSpacing: "0.3px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}
      >
        Trusted by homeowners & businesses across Dubai and Abu Dhabi
      </div>
    </section>
  );
};

export default AboutWeMovers;
