import React from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';
import logoImage from './images/logo.jpg'
function FirstPage() {

  return (
    <div>
      <section className="header">
        <nav>
          <img id="logo" src={logoImage} alt="logo"/>
          <div className="nav-links" id="navLinks">
          </div>
        </nav>

        <div className="text-box">
          <h1> BruinPool </h1>
          <p>The only website to meet other carpooling Bruins!</p>
          <div>
            <Link to="/SignIn" className="SignIn-btn">Sign In!</Link>
          </div>
          <div>
            <Link to="/SignUp" className="SignUp-btn">Create a Free Account today!</Link>
          </div>
        </div>
      </section>

      <section className="course">
        <h1>Join us Today!</h1>
        <p>Save money, time, and help the world become a better place!</p>

        <div className="row">
          <div className="course-col">
            <h3>Become a Rider!</h3>
            <p> Join our platform to make your commute cost-effective and eco-friendly. Whether you have extra seats or need another rider, become a user to save on bills, parking, and reduce your carbon footprint. Sign up now to connect with fellow Bruins and contribute to sustainable transportation.
            </p>
          </div>
          <div className="course-col">
            <h3>Find Bruins!</h3>
            <p>Escape campus traffic and public transport hassles by connecting with carpool companions on our student platform. Whether you're a freshman or a graduate student, find like-minded peers to share rides, split costs, and streamline your commute. Say goodbye to commuting woes and join a hassle-free carpool community today!
            </p>
          </div>
          <div className="course-col">
            <h3>Benefits!</h3>
            <p>Join our carpool program for financial savings, reduced environmental impact, and a sense of community. Cut commuting expenses, lower emissions, and connect with fellow Bruins for a sustainable and enjoyable campus journey. Join today and make a positive impact on your campus and the planet!</p>
          </div>
        </div>
      </section>


      <section className="footer">
        <h4>About Us</h4>
        <p>We're just five Bruins trying to help others save money, while doing good for our Earth at the same time. </p>
      </section>
    </div>
  );
}

export default FirstPage;