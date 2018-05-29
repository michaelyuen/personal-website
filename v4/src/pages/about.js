import React from 'react'
import Link from 'gatsby-link'

import zeus from '../assets/images/zeus.jpg';

const AboutPage = () => (
	<div className="body-container">
		<div className="body about">

			<h1 className="emphasis">about</h1>

			<div className="beta">
				Hello! My name is <strong>Michael</strong>, and I'm a software engineer with a passion for front-end development.
			</div>

			<div className="beta">
				I specialize in web apps built with <a target="_blank" href="https://angularjs.org/">AngularJS</a> and particularly enjoy promoting good practices in unit testing them with <a target="_blank" href="https://karma-runner.github.io/1.0/index.html">Karma</a> and <a target="_blank" href="http://jasmine.github.io/">Jasmine</a>. Additionally, some of my current areas of interest include <a target="_blank" href="https://github.com/michaelyuen/ngWordpress">ngWordpress</a>, profiling application memory performance, and Angular 2 + Typescript.
			</div>

			<div className="beta">
				Graduating from the University of Central Florida with a Bachelor's in IT, I hit the ground running with a foundation of knowledge and a thirst for learning. Since then, I've been working professionally as a web developer. Currently I'm on the Consumer UI Team with <a target="_blank" href="http://accesso.com/">accesso</a> working on the Passport eCommerce Platform.
			</div>

			<br /><br /><br /><br />

			<h1 className="emphasis">hobbies</h1>

			<div className="beta">
				One of my <strong>proudest</strong> achievements is the change I've made through a serious commitment to fitness. What began as a simple desire to build muscle has developed into an active lifestyle that has improved my life in countless ways and translated well into a love of the outdoors - especially hiking and kayaking!
				<br /><br />
				<figure>
					<div className="kayak" title="Picture of beautiful day kayaking on the Apopka Beauclair Canal"></div>
					<figcaption className="epsilon">Beautiful day on the Apopka Beauclair Canal</figcaption>
				</figure>
			</div>

			<div className="beta">
				Additionally, I also practice <a target="_blank" href="http://www.jkdinstitute.com/">Jeet Kune Do</a>, which has quickly become one of my favorite activities. There is nothing quite like the unique ability martial arts and fighting has to make you feel both empowered and humbled.
			</div>

			<div className="beta">
				<img className="zeus hidden-xs" src={zeus} alt="Michael Clayton Yuen and Zeus the dog at Pet Alliance of Greater Orlando" />
				Another gigantic passion of mine is <strong>animals</strong>. I'm not yet ready to commit to being a dog owner, but by volunteering at <a target="_blank" href="http://petallianceorlando.org/">Pet Alliance of Greater Orlando</a> it allows me to help them and also get my fix for belly rubs and slobber. Here I am with my friend Zeus; with a smile like that it's no wonder he was adopted that day!
				<img className="zeus visible-xs" src={zeus} alt="Michael Clayton Yuen and Zeus the dog at Pet Alliance of Greater Orlando" />
			</div>

			<div className="beta">
				Lastly, I'm a brand new aquarist and simply <strong>obsessed</strong> with the hobby! I recently finished setting up and cycling my 10 gallon planted tank and stocked it with three Dwarf Puffers, Puff Daddy, BB, and Grunt, and 1 Clown Pleco named Salty Sam. There are also two goofy Golden Apple Snails named Sunny and Cher, along with a Nerite Snail and several other small snails. They make for an <strong>amazing</strong> cleaning crew and are really fascinating to watch! If ever I'm reported missing, be sure to check that I'm not just staring into the aquarium mesermized.
				<br/><br/>
				<figure>
					<div className="aquarium" title="10 gallon planted aquarium"></div>
					<figcaption className="epsilon">Aren't the puffers cute!?</figcaption>
				</figure>
			</div>
		</div>
	</div>
)

export default AboutPage
