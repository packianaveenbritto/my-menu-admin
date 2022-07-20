import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';

const HeaderWithOnlyLogo = () => {
	return (
		<Header className='header-with-only-logo'>
			<HeaderLeft>My Menu</HeaderLeft>
		</Header>
	);
};

export default HeaderWithOnlyLogo;
