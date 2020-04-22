import React, { Component } from 'react';
import LandingPageSVG from './SVG/LandingPageSVG';

import './LandingPage.scss';

class LandingPageHeader extends Component {
	render() {
		return (
			<div className='header'>
				<div className='container'>
					<div className='header__navigation'>
						<a href='#'>
							<button>بزن بریم!</button>
						</a>

						<ul className='header__navigation__links'>
							<li>
								<a href='#'>انجمن</a>
							</li>
							<li>
								<a href='#'>دربارۀ ما</a>
							</li>
							<li>
								<a href='#'>صفحۀ اصلی</a>
							</li>
						</ul>

						<a href='#'>
							<LandingPageSVG
								name='HeaderNavigationLogo'
								className='header__navigation__logo'
							/>
						</a>
					</div>

					<div className='header__text'>
						<span className='header__text__title'>
							از تحصیل در دانشگاه لذت ببرید!
						</span>
						<span className='header__text__description'>
							<span>
								ما محیطی فراهم کرده‌ایم تا شما دانشجویان عزیز
							</span>
							<br />
							<span>
								.مشکلات، پیشنهادات و انتقادات خود را با ما و 
								مسئولین به اشتراک بذارید
							</span>
						</span>
					</div>
				</div>
				<div className='header__background'>
					<LandingPageSVG
						name='HeaderBackgroundTop'
						className='header__background__top'
					/>

					<LandingPageSVG
						name='HeaderBackgroundRings'
						className='header__background__rings'
					/>

					<LandingPageSVG
						name='HeaderBackgroundIllustration'
						className='header__background__illustration'
					/>
				</div>
			</div>
		);
	}
}

export default LandingPageHeader;
