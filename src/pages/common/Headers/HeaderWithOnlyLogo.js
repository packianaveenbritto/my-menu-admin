import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import logo from '../../../assets/logos/myMenuLogo.svg';

const HeaderWithOnlyLogo = () => {
	return (
		<Header className='header-with-only-logo'>
			<HeaderLeft>
				<img style={{ position: 'relative', top: '15px' }} src={logo} alt='' />
			</HeaderLeft>
		</Header>
	);
};

export default HeaderWithOnlyLogo;
