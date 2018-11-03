import React from 'react'
import { Link } from 'gatsby'

resize();
window.addEventListener('resize', resize);

function resize() {
  let vh = window.innerHeight * .01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const IndexPage = () => (
  <div className="MyContainer MyContainer__hero">
    <div>
      <h1>Michael Clayton Yuen</h1>
      <h3>Frontend Engineer</h3>
      <hr/>
      <h6>
        <Link to="about">About.</Link>
        &nbsp;
        <Link to="work">Work.</Link>
        &nbsp;
        <Link to="blog">Blog.</Link>
        &nbsp;
        <Link to="contact">Contact.</Link>
      </h6>
    </div>
  </div>
)

export default IndexPage
