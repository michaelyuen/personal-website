import React, {Component} from 'react'
import { Link } from 'gatsby'
import Hamburger from '../hamburger/hamburger'

import style from './menu.module.scss';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {isOpen: false};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}))
	}

	render() {
		return(
			<div className={style.menu}>
				<Hamburger onClick={() => this.onClick} isOpen={this.state.isOpen}/>
				<ul className={`${style.ul} ${this.state.isOpen ? style.ulOpen : ''}`}>

					{this.props.items.map((item, i) =>

						<li key={i} className={style.li}>
							<Link to={item.path} onClick={this.onClick}>{item.name}</Link>
						</li>
					)}

				</ul>
			</div>
		)
	}
}

export default Menu