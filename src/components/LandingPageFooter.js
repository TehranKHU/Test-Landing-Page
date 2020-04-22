import React, { Component } from 'react';
import LandingPageSVG from './SVG/LandingPageSVG';

import './LandingPage.scss';

class LandingPageMain extends Component {
	render() {
		return (
			<div className='footer'>
				<div className='footer__foreground'>
					<span className='footer__foreground__text'>
						پس منتظر چی هستی؟ همین حالا ثبت نام کن!
					</span>

					<a href='#'>
						<button>ثبت نام</button>
					</a>
				</div>

				<div className='footer__background' />
			</div>
		);
	}
}

export default LandingPageMain;
