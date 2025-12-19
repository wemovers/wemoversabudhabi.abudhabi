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
        ><br/><br/>What We Truly Believe</h2>
        <p style={{textAlign:'justify'}}>We believe in honesty, care, and difficult work. If your belongings are important to you, they can be important to us as well. We are in charge of that conduct as well as learning from it.. Our crew for relocation services in Abu Dhabi works with a satisfied heart to make your flow clean, secure, and strain-free. This is what we truly consider.</p>
      </div>
      <div className="section-content features-grid">
        <div className="single-feature">
          <img src={expertImg} alt="Trusted Experts" className="feature-image" />
          <h3>Careful Handling</h3>
          <p style={{textAlign: 'justify'}}>We understand your belongings are unique to you. That’s why we % and circulate the whole thing with extra care, similar to we might for our circle of relatives. From small objects to large furnishings, we make certain nothing gets damaged. Our watchful arms keep your belongings safe.</p>
        </div>

        <div className="single-feature">
          <img src={customerImg} alt="Customer Focused" className="feature-image" />
          <h3>Honest Service</h3>
          <p style={{textAlign: 'justify'}}>We always keep our word and speak the truth. No hidden fees, no surprises. Our crew works with honesty due to the fact believe it is an important thing to a happy past. From beginning to end, you may assume us to be fair, clean, and beneficial every step of the way.</p>
        </div>

        <div className="single-feature">
          <img src={supportImg} alt="24/7 Support" className="feature-image" />
          <h3>Customer Happiness</h3>
          <p style={{textAlign: 'justify'}}>Your happiness matters maximum to us. We need you to feel happy and comfortable for the duration of your flow. That’s why we listen, care, and paintings hard to make the entirety smooth and easy. When you smile on the stop of your pass, we recognize we’ve achieved an extraordinary task.</p>
        </div>
        <div className="single-feature">
          <img src={safeSecure} alt="24/7 Support" className="feature-image" />
          <h3> Safe & Secure Moves in Dubai</h3>
          <p style={{textAlign: 'justify'}}>We are highly concerned about safety. Our staff uses reliable packaging, thoughtful planning, and trustworthy transport to ensure that your belongings are safe from start to finish. Regardless they are across the road or the world, we make sure everything you have get to your new home safely and securely.</p>
        </div>

      </div>
    </section>
  );
};

export default Values;
