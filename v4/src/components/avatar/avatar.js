import React from 'react'
import Link from 'gatsby-link'

import style from './style.module.scss';

const Avatar = () => (
    <div className={['MyContainer', 'MyContainer__circle', style.MyAvatar__container].join(' ')}>
        <div className={style.MyAvatar} title="Portrait of Michael Clayton Yuen, Frontend Engineer"></div>
    </div>
)

export default Avatar
