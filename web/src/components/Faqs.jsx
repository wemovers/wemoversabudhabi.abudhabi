import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "1. How long does sea freight delivery take for household items?",
      answer: "The destination determines the shipping time. Delivery typically takes four to eight weeks. We will provide you with a straightforward timeline before the start of your move so you are aware of when to expect your home goods."
    },
    {
      question: "2. Are my fixtures and household stuff secure in the course of delivery?",
      answer: "Yes, we use strong packing materials and manage the whole lot cautiously. Your property is included for the duration of the adventure."
    },
    {
      question: "3. Do you assist with packing before shipping?",
      answer: "Yes, we provide expert packing services to ensure that your family's belongings are held steadily and safely during the shipping of freight by sea."
    },
    {
      question: "4. Can you assist in circulating massive gadgets like sofas and beds?",
      answer: "Yes, we will help circulate huge gadgets like sofas, beds, and heavy fixtures. Our team uses the right equipment and robust packing substances to ensure your massive household items are moved appropriately and reach your new home without any damage."
    },
    {
      question: "5. Do you offer a garage if my new home isn’t geared up yet?",
      answer: "Yes, we provide stable garage solutions for your belongings until you're geared up to get hold of them at your new location."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{
      backgroundColor: '#fff5f0',
      color: '#000',
      padding: '60px 20px',
      fontFamily: 'Arial, sans-serif',
    }}
    id='faqs'>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{
          color: '#F25205', // Dark Orange
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '2.5rem',
          fontWeight: 'bold'
        }}>
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} style={{
            marginBottom: '20px',
            border: '2px solid #F25205',
            borderRadius: '8px',
            backgroundColor: activeIndex === index ? '#f05d04' : '#F27405', // Darker when active
            transition: 'all 0.3s ease-in-out',
          }}>
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
                alignItems: 'center'
              }}
            >
              {faq.question}
              <span style={{ fontSize: '1.2rem' }}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div style={{
                padding: '0 20px 15px',
                color: '#FFFFFF',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
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
