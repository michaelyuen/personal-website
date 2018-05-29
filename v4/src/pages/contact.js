import React from 'react'
import Link from 'gatsby-link'

const ContactPage = () => (
	<div className="body-container">
		<div className="body contact">
			<h1 className="emphasis">contact</h1>
			<div className="beta">
				Thank you for visiting my website and I hope you enjoyed the experience. If you would like to contact me, the best method is to email me directly.
			</div>

			<div className="beta">
				For professional networking and more information about my job history and experience, visit my LinkedIn.
			</div>

			<div className="beta">
				If my website has sparked your curiosity, you can dig into the code at Github.
			</div>

			<div className="beta last">
				I look forward to hearing from you!
			</div>

			<div className="row icons text-center">

				<div className="col-xs-4">
					<a className="fa fa-envelope fa-3x" href="mailto:michaelclaytonyuen@gmail.com"></a>
				</div>

				<div className="col-xs-4">
					<a className="fa fa-linkedin fa-3x" target="_blank" href="https://www.linkedin.com/in/yuenmichael"></a>
				</div>

				<div className="col-xs-4">
					<a className="fa fa-github-alt fa-3x" target="_blank" href="https://www.github.com/michaelyuen"></a>
				</div>
			</div>
		</div>
	</div>
)

export default ContactPage
