import React from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';
import SignIn from './SignInPage.js'
import SignUp from './SignUpPage.js'

import logoImage from './images/logo.jpg'
import happyCar from './images/happyCar.avif'
import yourPrice from './images/yourPrice.png'
import whyUs from './images/whyUs.avif'



function FirstPage({ handleSignInClick }) {

  return (


<body>
	<section class="header">
		<nav>
			<a> <img src={logoImage} /></a>
			<div class="nav-links" id="navLinks">
				<i class="fa fa-times" onclick="hideMenu()"></i>
				<ul>
					<li><a href="">HOME</a></li>
					<li><a href="">ABOUT</a></li>
          <li><a href="">STUDENTS</a></li>

				</ul>

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
      <p>Are you looking to make your commute more cost-effective and environmentally friendly? Become a driver with our student carpool website and embark on a journey of convenience and camaraderie! Whether you have extra seats in your car or want to coordinate with fellow students to share rides, joining as a driver opens up opportunities to save money on gas and parking while reducing your carbon footprint. Sign up today to start connecting with passengers and contributing to a more sustainable transportation solution.
</p>
    </div>
    <div class="course-col">
      <h3>Find Students!</h3>
      <p>Tired of navigating campus traffic or relying solely on public transportation? Discover the perfect carpool companions through our student-centric platform! Whether you're a freshman searching for reliable transportation to classes or a graduate student seeking like-minded peers for shared rides, our website connects you with fellow students who share your schedule, route, and preferences. Forge new friendships, split costs, and streamline your commute by finding students just like you who are eager to collaborate on transportation solutions. Say goodbye to commuting woes and hello to a hassle-free journey with your newfound carpool community!
</p>
    </div>
    <div class="course-col">
      <h3>Benefits!</h3>
      <p>Unlock a myriad of benefits by participating in our student carpooling program! From financial savings to environmental impact reduction, there are countless advantages to sharing rides with your peers. By pooling resources, you can significantly cut down on commuting expenses such as gas, parking fees, and vehicle maintenance costs. Additionally, you'll reduce traffic congestion and lower carbon emissions, contributing to a cleaner and greener campus environment. Beyond the practical benefits, carpooling fosters a sense of community and fosters social connections among students, making your journey to campus more enjoyable and sustainable. Join us today to reap the rewards of collaborative transportation and make a positive impact on your campus and the planet!</p>
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
    </div>
  </div>
  <div class="campus-col">
    <img src={whyUs}/>
    <div class="layer">
      <h3>Why Us?</h3>
    </div>
  </div>
  <div class="campus-col">
    <img src={yourPrice}/>
    <div class="layer">
      <h3>Your Price</h3>
    </div>
  </div>
</div>

</section>

<section class="facilities">
  <h1>Our Community</h1>
  <p>Lorgem ipsom dolor sit amet, consectetur adipiscing elit.</p>

  <div class="row">
    <div class="facilities-col">
      <img src="images/library.jpg"/>
      <h3>Miles Traveled</h3>
      <p> Loren ipsum dolor sit amet, consectuatro adipisiceing elit. Pellenteseque aliquest turpis nulla.</p>

    </div>
    <div class="facilities-col">
      <img src="images/tools.png"/>
      <h3>Money Saved</h3>
      <p> Loren ipsum dolor sit amet, consectuatro adipisiceing elit. Pellenteseque aliquest turpis nulla.</p>
      
    </div>
    <div class="facilities-col">
      <img src="images/availability.png"/>
      <h3>Students Transported</h3>
      <p> Loren ipsum dolor sit amet, consectuatro adipisiceing elit. Pellenteseque aliquest turpis nulla.</p>
      
    </div>
  </div>

</section>



</body> 
  



  );
}

export default FirstPage;