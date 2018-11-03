import React from 'react'

const ContactPage = () => (
  <div className="MyContainer MyContainer__content">
    <div>
      <h1>Contact</h1>
      <p>
        Thank you for visiting my website and I hope you enjoyed the experience. If you would like to contact me, the best method is to email me directly.
      </p>
      <p>
        For professional networking and more information about my job history and experience, visit my LinkedIn.
      </p>
      <p>
        If my website has sparked your curiosity, you can dig into the code at Github.
      </p>
      <p>
        I look forward to hearing from you!
      </p>

      <div className="row icons text-center">

        <div className="col-xs-4">
          <a className="fa fa-envelope fa-3x" href="mailto:michaelclaytonyuen@gmail.com">.</a>
        </div>

        <div className="col-xs-4">
          <a className="fa fa-linkedin fa-3x" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yuenmichael">.</a>
        </div>

        <div className="col-xs-4">
          <a className="fa fa-github-alt fa-3x" target="_blank" rel="noopener noreferrer" href="https://www.github.com/michaelyuen">.</a>
        </div>
      </div>

    </div>
  </div>
)

export default ContactPage
