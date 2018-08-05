import React from 'react'
import Link from 'gatsby-link'

import style from './style.module.scss';

export const Menu = ({ items }) => (
    
    <ul className={style.menu}>

        {items.map((item, i) => 

            <li key={i}><Link to={item.path}>{item.name}</Link></li>
        )}

    </ul>
)

export default Menu