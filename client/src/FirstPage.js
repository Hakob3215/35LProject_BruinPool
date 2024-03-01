import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'; 
import './FirstPage.css';


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
	<a href="" class="hero-btn"> Sign In or Create a Free Account Today!</a>
</div>
	
	</section>
  </body>



  );
}

export default FirstPage;
