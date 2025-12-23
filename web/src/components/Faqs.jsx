import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "1. What moving offerings do you provide?",
      answer: "We Movers Abu Dhabi gives complete shifting answers, inclusive of the best home movers in Abu Dhabi, office transferring, professional packing, loading, transportation, unloading, and stable garage offerings, making sure an easy and stress-free transferring experience for each consumer."
    },
    {
      question: "2. How do you ensure the safety of assets?",
      answer: "Our educated group makes use of brilliant packing substances, proper managing techniques, and steady vehicles to protect objects. To reduce harm and make certain that the property reaches the vacation destination accurately, every drift adheres to stringent protection procedures."
    },
    {
      question: "3. Do you offer help for packing and unpacking?",
      answer: "Yes, we provide expert packing and unpacking offerings. In order to save you time and ensure ultimate safety in the course of the switch technique, our specialists carefully handle massive, delicate, and precious objects."
    },
    {
      question: "4. Are your charges obvious and inexpensive?",
      answer: "We agree on honest pricing without hidden prices. Our quotes are clean, aggressive, and custom-designed based on your shifting requirements, making sure affordability without compromising the carrier's best or reliability."
    },
    {
      question: "5. Can you cope with office and industrial actions?",
      answer: (
        <>
          Absolutely. We specialize in workplace and{" "}
          <a
            href="https://www.wemovers.ae/services/commercial-relocation-services"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FFFFFF', textDecoration: 'underline' }}
          >
            commercial relocations
          </a>
          , planning each detail cautiously to minimize business downtime whilst safely shifting furniture, documents, and devices effectively and professionally.
        </>
      )
    }
    ,
    {
      question: "6. How early should I book your services?",
      answer: "We recommend booking at least one week earlier to secure your selected moving date. Early booking allows better making plans, green resource allocation, and a smoother transferring experience."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        backgroundColor: '#fff5f0',
        color: '#000',
        padding: '60px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
      id='faqs'
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          style={{
            color: '#450693',
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '2.5rem',
            fontWeight: 'bold',
          }}
        >
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: '20px',
              border: '2px solid #FF3F7F',
              borderRadius: '8px',
              backgroundColor: '#FF3F7F',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <div
              onClick={() => toggleAccordion(index)}
              style={{
                padding: '15px 20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                color: '#FFFFFF',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {faq.question}
              <span style={{ fontSize: '1.2rem' }}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>

            {activeIndex === index && (
              <div
                style={{
                  padding: '0 20px 15px',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
