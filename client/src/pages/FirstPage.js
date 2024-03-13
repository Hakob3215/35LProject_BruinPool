import React from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';
import SignIn from './SignInPage.js'
import SignUp from './SignUpPage.js'

import logoImage from './images/logo.jpg'
import happyCar from './images/happyCar.png'
import yourPrice from './images/yourPrice.png'
import whyUs from './images/whyUs.png'
import review1 from './images/review1.png'
import review2 from './images/review2.png'



function FirstPage({ handleSignInClick }) {

  return (


<body>
	<section class="header">
		<nav>
			<a> <img id = "logo" src={logoImage} /></a>
			<div class="nav-links" id="navLinks">
				<i class="fa fa-times" onclick="hideMenu()"></i>


			</div>

			<i class="fas fa-bars" onclick="showMenu()"></i>
		
		</nav>


<div class="text-box">
	
	<h1> BruinPool </h1>
	<p>The only website to meet other carpooling college students!</p>
  <div>
	<Link to="/SignIn" className="SignIn-btn">Sign In!</Link>
  </div>
  <div>
  <Link to="/SignUp" className="SignUp-btn">Create a Free Account today!</Link>
  </div>

</div>
	
	</section>

	<section class="course">
  <h1>Join us Today!</h1>
  <p>Save money, time, and help the world become a better place!</p>

  <div class="row">
    <div class="course-col">
      <h3>Become a Driver!</h3>
      <p> Join our student carpool platform to make your commute cost-effective and eco-friendly. Whether you have extra seats or need a ride, become a driver to save on gas, parking, and reduce your carbon footprint. Sign up now to connect with fellow students and contribute to sustainable transportation.
</p>
    </div>
    <div class="course-col">
      <h3>Find Students!</h3>
      <p>Escape campus traffic and public transport hassles by connecting with carpool companions on our student platform. Whether you're a freshman or a graduate student, find like-minded peers to share rides, split costs, and streamline your commute. Say goodbye to commuting woes and join a hassle-free carpool community today!
</p>
    </div>
    <div class="course-col">
      <h3>Benefits!</h3>
      <p>Join our student carpool program for financial savings, reduced environmental impact, and a sense of community. Cut commuting expenses, lower emissions, and connect with fellow students for a sustainable and enjoyable campus journey. Join today and make a positive impact on your campus and the planet!</p>
    </div>
  </div>
</section>



<section class="campus">

<h1>Our Goals and Operation</h1>
<p>What we're here to do. </p>
<div class="row">
  <div class="campus-col">
    <img src={happyCar}/>
    <div class="layer">
      <h3>Choose who you ride with</h3>
      <p> With over 250 carpools happening each day, you're guaranteed to find the perfect driver!</p>
    </div>
  </div>
  <div class="campus-col">
    <img src={whyUs}/>
    <div class="layer">
      <h3>Why Us?</h3>
      <p> Our carefully curated system has allowed for over 3,500 successful and reiable trips, ensuring a safe and cose effective form of transportation. </p>
    </div>
  </div>
  <div class="campus-col">
    <img src={yourPrice}/>
    <div class="layer">
      <h3>Your Price</h3>
      <p> Name the driver, and we'll find one within your price range</p>
    </div>
  </div>
</div>

</section>

<section class="facilities">
  <h1>Our Community</h1>
  <p>Join thousand of students just like you!</p>

  <div class="row">
    <div class="facilities-col">
      <h3>Miles Traveled</h3>
      <p> Over 63,000 miles travled by students!</p>

    </div>
    <div class="facilities-col">
      <h3>Money Saved</h3>
      <p> $35,000 in gas saved!</p>
      
    </div>
    <div class="facilities-col">
      <h3>Students Transported</h3>
      <p> Join nearly 3,500 students using BruinPool!</p>
      
    </div>
  </div>

</section>




<section class="testimonials">
<h1>What our clients say</h1>
<p> Don't just listen to us, read our thousands of 5 star reviews!</p>
  <div class="row">
  <div class="testimonial-col">
    <img src={review1}/>
    <div>
      <p>Amazing and simple service! Will definitely use again. </p>
      <h3>Ahmed Abbdulah</h3>
  
    </div>
  </div>
  <div class="testimonial-col">
    <img src={review2}/>
    <div>
      <p> Iconic service with amazing people!</p>
      <h3>Alexa Fosani</h3>
 
    </div>
    </div>
  </div>
</section>


<section class="cta">
  <h1>We can take you anywhere, as long as we find a carpooler!</h1>
  <a href="">Contact us!</a>


</section>

<section class="footer">
  <h4>About Us</h4>
  <p>We're just four students trying to help other save money, while doing good for our Earth at the same time. </p>

</section>

</body>  



  );
}

export default FirstPage;