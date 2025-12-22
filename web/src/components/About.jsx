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
       
          <h2
            style={{
              margin: "22px 0",
              fontSize: "44px",
              lineHeight: "1.2",
              color: "#ffffff",
              textAlign:"center"
            }}
          >
           We Don’t Just Move Homes, We Move Your Life

          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.9",
              color: "#ffffff",
              opacity: 0.9,
              marginBottom: "18px",
                 textAlign:"justify"
            }}
          >
           At We Movers Abu Dhabi, we accept as true that shifting is greater than transporting assets from one area to every other. It’s about new beginnings, sparkling possibilities, and crucial life moments. That’s why we recognize our expertise in our clients’ needs, timelines, and issues. Our experienced team handles each object with care, from delicate valuables to big fixtures, ensuring an easy and stress-free relocation experience constructed on accept as true with and professionalism.

     </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.9",
              color: "#ffffff",
              opacity: 0.9,
                 textAlign:"justify"
            }}
          >
           We go beyond primary transferring services by supplying personalized solutions, clear conversation, and reliable aid at every step. Whether you’re moving a domestic or office, our dedication is to make your transition easy, safe, and advantageous. With top Movers in Abu Dhabi, you’re now not just changing places, you’re moving ahead with self-assurance and peace of mind.

     
          </p>

          {/* VALUES */}
          <div style={{ marginTop: "28px" }}>
            {[
              "Personalized shifting answers with care",
              "Professional, educated, and relied on the group",
              "Stress-free, timely, and stable relocation",
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
              50,000+
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
          textAlign:"justify"
        }}
      >
      Approved for satisfactory, reliability, and client satisfaction, handing over relied on moving reviews that actually move lives.

      </div>
    </section>
  );
};

export default AboutWeMovers;
