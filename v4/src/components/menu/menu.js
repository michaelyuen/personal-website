import React, {Component} from 'react'
import { Link } from 'gatsby'
import Hamburger from '../hamburger/hamburger'

import style from './menu.module.scss';

const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? {style:{display: 'none'}} : null
}

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
			<div className={`${style.menu} ${this.state.isOpen ? style.menuOpen : ''}`}>
				<Hamburger onClick={() => this.onClick} isOpen={this.state.isOpen}/>
				<ul>
					{this.props.items.map((item, i) =>

						<li key={i}>
							<Link
                to={item.path}
                getProps={isActive}
                onClick={this.onClick}
              >
                {item.name}
              </Link>
						</li>
					)}
				</ul>
			</div>
		)
	}
}

export default Menu