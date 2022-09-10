import React from "react";
import photo from '../../Assets/Darr_Profile_Image.jpeg'

function About () {
  return (
		<div className='container'>
			<div className='glass-effect about'>
				<img src={ photo } className='profile-picture' alt="Ashley Darr"></img>
				<div className='profile'>
					<h1 className='about-header ms-3 mb-4'>Hello,</h1>
                    <h1 className='about-header ms-3 mb-4'>I'm Ashley!</h1>
					<hr className='mx-3 mb-4' />
					<p className='about-text ms-3'>
                    I am a passionate and results-oriented communications professional, graduated from the University of North Carolina at Chapel Hill,
                    with 5+ years of experience in multimedia functions and public relations. I specialize in multi-channel communication and audio/visual
                    production. I am currently working on a certificate in Full Stack Development and have picked up skills in HTML, CSS, Javascript, Node.js, Express.js, responsive web design, and more!
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;