import React from 'react'

import style from './avatar.module.scss';

const Avatar = () => (

    <div className={['MyContainer', 'MyContainer__circle', style.MyAvatar__container].join(' ')}>

        <div className={style.MyAvatar} title="Portrait of Michael Clayton Yuen, Frontend Engineer"></div>

    </div>
)

export default Avatar
