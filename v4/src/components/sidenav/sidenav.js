import React from 'react'
import Link from 'gatsby-link'

import style from './style.module.scss';

const Sidenav = ({ props }) => (
    <ul className={style.sidenav}>
        <li><Link to="/">{this.props}</Link></li>
        <li><Link to="/page-2/">Page 2</Link></li>
    </ul>
)

export default Sidenav
