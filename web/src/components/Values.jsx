import '../assets/css/value.css'

import expertImg from '../assets/img/81-4.png';
import customerImg from '../assets/img/86-1.jpg';
import supportImg from '../assets/img/86-2.jpg';
import safeSecure from '../assets/img/86.jpg';

const Values = () => {
  return (
    <section className="section-padding whyus-section" id="why-us">
      <div className="sectioner-header">
        <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  color: "#F27405",
                  fontWeight: "700",
                    marginTop: "-60px"
          }}
        ><br/><br/>What We Truly Believe In</h2>
        <p style={{textAlign:'left'}}>At We Movers Abu Dhabi, our beliefs form how we serve our clients every day. We consider moving to be a meaningful life transition, not just a provider. Trust, care, commitment, and obligation guide each client we take care of, making sure secure, smooth, and effective relocation stories for families and groups alike.</p>
      </div>
      <div className="section-content features-grid">
        <div className="single-feature">
          <img src={expertImg} alt="Trusted Experts" className="feature-image" />
          <h3>Quality Care</h3>
          <p style={{textAlign: 'center'}}>We treat every item as if it were our personal. From careful packing to secure transportation, our educated team specializes in protective property and turning them in securely, without compromise.</p>
        </div>

        <div className="single-feature">
          <img src={customerImg} alt="Customer Focused" className="feature-image" />
          <h3>Honest Service</h3>
          <p style={{textAlign: 'center'}}>The middle of our job is integrity. We assure that clients feel assured, informed, and safe throughout the entire relocation process by means of offering obvious pricing, reasonable cut-off dates, and proper verbal communication.</p>
        </div>

        <div className="single-feature">
          <img src={supportImg} alt="24/7 Support" className="feature-image" />
          <h3>Customer First</h3>
          <p style={{textAlign: 'center'}}>We agree that every purchaser merits respect, transparency, and personalised interest. Understanding character wishes allows us to create shifting answers that reduce strain, build agreement, and deliver delight at every level of the relocation journey.</p>
        </div>
        <div className="single-feature">
          <img src={safeSecure} alt="24/7 Support" className="feature-image" />
          <h3> Reliable Commitment</h3>
          <p style={{textAlign: 'center'}}>We stand by our promises. Punctuality, obligation, and expert execution ensure each pass is finished efficiently, on time, and with complete peace of mind for our customers.</p>
        </div>

      </div>
    </section>
  );
};

export default Values;
