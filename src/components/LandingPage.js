import React, { Component } from 'react';
import LandingPageHeader from './LandingPageHeader';
import LandingPageMain from './LandingPageMain';
import LandingPageFooter from './LandingPageFooter';

class LandingPage extends Component {
	render() {
		return (
			<React.Fragment>
				<LandingPageHeader />
				<LandingPageMain />
				<LandingPageFooter />
			</React.Fragment>
		);
	}
}

export default LandingPage;
