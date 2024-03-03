import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'; 
import './FirstPage.css';
import SignIn from './SignInPage.js'


function FirstPage({ handleSignInClick }) {
  return (


<body>
	<section class="header">
		<nav>
			<a> <img src="images/logo.png"/></a>
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
	<Link to="/SignInPage" className="hero-btn">Sign In or Create a Free Account Today!</Link>

</div>
	
	</section>

	<section class="course">
  <h1>Join us Today!</h1>
  <p>We offer a lot lorgem ups si</p>

  <div class="row">
    <div class="course-col">
      <h3>Become a Driver!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="course-col">
      <h3>Find Students!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="course-col">
      <h3>Benefits!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</section>

</body> 
  



  );
}

export default FirstPage;
