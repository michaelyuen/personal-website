import React from 'react'
import Avatar from '../components/avatar/avatar';

import style from './index.module.scss'

const IndexPage = () => (

	<div className={style.MyIndex}>

		<Avatar/>

		<div className="MyContainer MyContainer__rectangle">
			<div>

				<h1>Brooklyn Based Frontend Engineer</h1>

				<p>I make resy.com</p>

			</div>
		</div>
		
  	</div>
)

export default IndexPage
