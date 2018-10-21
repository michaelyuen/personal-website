import React from 'react'
import Avatar from '../components/avatar/avatar';

import style from './index.module.scss'
import ResyLogo from '../assets/images/svg/resy-logo.svg'

const IndexPage = () => (

	<div className={['MyContainer__fixed', style.MyContainer__fixed].join(' ')}>

		<Avatar/>

		<div className="MyContainer MyContainer__rectangle">
			<div className={style.MyContent}>

				<h1>Brooklyn Based Frontend Engineer</h1>

				<p className={style.MySecondLine}>
					<span>enjoying myself</span>
					<span>&&</span>
					<span>improving myself</span>
					<span>&&</span>
					<span>building&nbsp;<a href="https://resy.com"><ResyLogo className={style.ResyLogo} /></a></span>
				</p>

			</div>
		</div>

	</div>
)

export default IndexPage
