import React, { Component } from 'react';
import LandingPageSVG from './SVG/LandingPageSVG';

import './LandingPage.scss';

class LandingPageMain extends Component {
	render() {
		return (
			<div className='main'>
				<div className='main__feature'>
					<div className='main__feature__icon'>
						<LandingPageSVG
							name='MainFeatureFast'
							className='main__feature__icon__foreground'
						/>
						<LandingPageSVG
							name='MainFeatureBackground'
							className='main__feature__icon__background'
						/>
					</div>

					<span className='main__feature__title'>سریع و آسان</span>

					<span className='main__feature__description'>
						به سرعت با سایت آشنا می‌شید و کار کردن باهاش رو یاد
						می‌گیرید ...
					</span>
				</div>

				<div className='main__feature'>
					<div className='main__feature__icon'>
						<LandingPageSVG
							name='MainFeatureCommunity'
							className='main__feature__icon__foreground'
						/>
						<LandingPageSVG
							name='MainFeatureBackground'
							className='main__feature__icon__background'
						/>
					</div>

					<span className='main__feature__title'>انجمن</span>

					<span className='main__feature__description'>
						با بقیه دانشجوها بحث و گفت‌وگو کنید و ازشون تو درس‌ها
						کمک بگیرید.
					</span>
				</div>

				<div className='main__feature'>
					<div className='main__feature__icon'>
						<LandingPageSVG
							name='MainFeatureSecurity'
							className='main__feature__icon__foreground'
						/>
						<LandingPageSVG
							name='MainFeatureBackground'
							className='main__feature__icon__background'
						/>
					</div>

					<span className='main__feature__title'>آزادی بیان</span>

					<span className='main__feature__description'>
						با خیال راحت مشکلتون رو بیان کنید؛ اطلاعاتتون پیش ما
						میمونه!
					</span>
				</div>

				<div className='main__feature'>
					<div className='main__feature__icon'>
						<LandingPageSVG
							name='MainFeatureFree'
							className='main__feature__icon__foreground'
						/>
						<LandingPageSVG
							name='MainFeatureBackground'
							className='main__feature__icon__background'
						/>
					</div>

					<span className='main__feature__title'>رایگان</span>

					<span className='main__feature__description'>
						تمام امکاناتی که ما در اختیار شما قرار میدیم کاملاً
						رایگانه.
					</span>
				</div>
			</div>
		);
	}
}

export default LandingPageMain;
