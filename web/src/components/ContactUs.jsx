import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  // 🎨 THEME COLORS
  const bgColor = "#a99bdaff";        // White background
  const primaryColor = "#8C00FF";
  const accentColor = "#FFC400";
  const highlightColor = "#FF3F7F";
  const textColor = "#333333";

  const headingStyle = {
    color: primaryColor,
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const infoRow = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "18px",
    fontSize: "1rem",
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: bgColor,
        padding: "70px 40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* 🗺️ MAP SIDE */}
        <div
          style={{
            width: "100%",
            height: "350px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          <iframe
            title="WeMovers Location"
            src="https://www.google.com/maps?q=Mussaffah+M-33+Abu+Dhabi&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ℹ️ INFO SIDE */}
        <div>
          <h2 style={headingStyle}>Contact Us</h2>

          <p style={{ lineHeight: "1.7", marginBottom: "28px", color: textColor }}>
            Get in touch with <strong style={{ color: highlightColor }}>WeMovers</strong>{" "}
            for reliable moving, relocation, courier, and storage services
            across the UAE and worldwide.
          </p>

          <div style={infoRow}>
            <FaMapMarkerAlt style={{ color: accentColor, fontSize: "20px" }} />
            <span style={{ color: textColor }}>
              Mussaffah M-33, P.O. Box: 9809, Store No 2, Abu Dhabi
            </span>
          </div>

          <div style={infoRow}>
            <FaPhoneAlt style={{ color: accentColor, fontSize: "20px" }} />
            <span style={{ color: primaryColor, fontWeight: "600" }}>
              +971 50 303 1084
            </span>
          </div>

          <div style={infoRow}>
            <FaEnvelope style={{ color: accentColor, fontSize: "20px" }} />
            <span style={{ color: textColor }}>info@wemovers.ae</span>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            #contact > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactUs;
