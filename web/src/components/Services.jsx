import React from "react";
import {
  FaHome,
  FaGlobe,
  FaTruckMoving,
  FaWarehouse,
  FaBoxes,
} from "react-icons/fa";

const Services = () => {
  // 🎨 THEME COLORS
  const primaryColor = "#8C00FF";
  const accentColor = "#FFC400";
  const highlightColor = "#FF3F7F";
  const bgColor = "#ffffff";
  const textColor = "#333333";

  const services = [
    {
      title: "Home Relocation",
      desc: "Safe and efficient home moving solutions handled by experienced professionals.",
      icon: <FaHome />,
      borderColor: primaryColor,
    },
    {
      title: "International Relocation",
      desc: "Complete international moving services with customs and documentation support.",
      icon: <FaGlobe />,
      borderColor: highlightColor,
    },
    {
      title: "Global Freight",
      desc: "Reliable air, sea, and land freight services to destinations worldwide.",
      icon: <FaTruckMoving />,
      borderColor: accentColor,
    },
    {
      title: "Short-Term Storage",
      desc: "Secure short-term storage solutions with flexible rental options.",
      icon: <FaWarehouse />,
      borderColor: primaryColor,
    },
    
  ];

  return (
    <section
      id="services"
      style={{
        backgroundColor: bgColor,
        padding: "80px 40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          style={{
            color: primaryColor,
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Our Services
        </h2>
        <p style={{ maxWidth: "650px", margin: "0 auto", color: textColor }}>
          WeMovers provides comprehensive relocation, courier, freight, and
          storage services tailored to your needs.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "14px",
              padding: "30px 25px",
              borderTop: `6px solid ${service.borderColor}`,
              boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: "36px",
                color: accentColor,
                marginBottom: "18px",
              }}
            >
              {service.icon}
            </div>

            <h3
              style={{
                color: primaryColor,
                fontSize: "1.3rem",
                marginBottom: "10px",
              }}
            >
              {service.title}
            </h3>

            <p style={{ color: textColor, lineHeight: "1.6" }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
