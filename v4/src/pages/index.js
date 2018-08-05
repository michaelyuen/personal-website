import React from 'react'
import Link from 'gatsby-link'
import Avatar from '../components/avatar/avatar';

import style from './index.module.scss'

const IndexPage = () => (

	<div className="MyContainer__fixed">

		<Avatar/>

		<div className="MyContainer MyContainer__rectangle">
			<div className={style.MyContent}>

				<h1>Brooklyn Based Frontend Engineer</h1>

				<p><span>enjoying myself</span><span>&&</span><span>improving myself</span><span>&&</span><span>making <a href="https://resy.com">resy.com</a></span></p>

			</div>
		</div>
		
  	</div>
)

export default IndexPage
