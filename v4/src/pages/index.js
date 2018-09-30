import React from 'react'
import Avatar from '../components/avatar/avatar';
import Layout from '../components/layout/layout';

import style from './index.module.scss'

const IndexPage = () => (

	<Layout>
		<div className="MyContainer__fixed">

			<Avatar/>

			<div className="MyContainer MyContainer__rectangle">
				<div className={style.MyContent}>

					<h1>Brooklyn Based Frontend Engineer</h1>

					<p><span>enjoying myself</span><span>&&</span><span>improving myself</span><span>&&</span><span>making <a href="https://resy.com">resy.com</a></span></p>

				</div>
			</div>

		</div>
	</Layout>
)

export default IndexPage
