import React from 'react'

import style from './hamburger.module.scss';

const Hamburger = (props) => (

	<div className={`${style.MyHamburger} ${props.isOpen ? style.MyHamburger__open : ''}`} onClick={props.onClick()}>
		{/* :first-child */}
		<span></span>
		{/* :last-child */}
	</div>
)

export default Hamburger