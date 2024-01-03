import React from 'react';
import { Link } from 'react-router-dom';
import './Final.css';
function Final() {
  return (
    <div>
      <div className="menu-btn">
        <i className="fas fa-bars fa-2x"></i>
      </div>
      <div className="container">
        <nav className="main-nav">
        <ul className="main-menu">
            <Link to="/"><li>Home</li></Link>
            <Link to="/abott"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to="/login"><li>Login</li></Link>
          </ul>
        </nav>
        {/* Showcase */}
        <header className="showcase">
          <h2>Pharmacy</h2>
          <p>
            Book your appointment Now!
          </p>
        </header>
        {/* Home cards 1 */}
        <section className="home-cards">
          <div>
            <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <h3>Feeling unwell?</h3>
            <p>
            Take an assessment in less than 3 min and get suggestions on what to do next
            </p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Safe & Secure</h3>
            <p>
            Personal Health Record stores your data in a secure environment. Control who can access your Health Records.
            </p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Track & Monitor</h3>
            <p>
            Personal Health Records digitizes all your health records and helps in tracking your health parameters. 
            </p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h3>Circle Exclusive</h3>
            <p>
            CIRCLE membership is a one-of-its-kind membership designed to deliver the best care and value to its subscribers. 
            </p>
          </div>
        </section>
  {/* Carbon */}
        <section className="carbon dark">
          <div className="content">
            <h2>Committed To Our Goal</h2>
            <p>
            True health isn't just skin deep; it's a wholesome union of mind, body, and soul. It's about embracing nutrition, exercise, and self-care, nurturing not just the exterior but also fostering a vibrant, energized inner being.
            </p>
          </div>
        </section>
        {/* Follow */}
        <section className="follow">
          <p>Follow Us</p>
          <a href="https://facebook.com">
            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com">
            <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
          </a>
        </section>
      </div>
        {/* Links */}
        <footer className="links">
          <div className="links-inner">
            <ul>
              <li>
                <h2>Contact Us</h2>
                <h3 className='font'>
                Thank you for your interest in connecting with us. 
                Whether you have a question, need assistance, or want to 
                provide feedback, our team is here to help.
For queries  Contact us at: contactusnow@Vpharmacy.org
</h3>
              </li>
            </ul>
            <ul>
              <li>
                <h2 >About Us</h2>
                <h3 className='font'>
                With a legacy of trust and reliability, our pharmacy company stands as a 
                beacon of healthcare excellence. We strive to offer a diverse range of medications, 
                health products, and expert advice to meet the unique needs of our customers
                </h3>
              </li>
            </ul>
            <ul>
              <li>
                <h2>Terms Of Service</h2>
                <h3 className='font'>
                "You" and "Your" refers to you, the person accessing this website and accepting the company's terms and conditions.
"The Company," "Ourselves," "We," "Our," and "Us" refers to the Pharmacy. "Party" and "Parties" refers to both the user and ourselves,
 or either the user or ourselves.
                </h3>
              </li>
            </ul>
          </div>
        </footer>
    </div>
  );
}
export default Final;