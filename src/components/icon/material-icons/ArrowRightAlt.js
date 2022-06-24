import * as React from 'react';

function SvgArrowRightAlt(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z' />
		</svg>
	);
}

export default SvgArrowRightAlt;
