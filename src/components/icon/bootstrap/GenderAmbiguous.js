import * as React from 'react';

function SvgGenderAmbiguous(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M11.5 1a.5.5 0 010-1h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V1.707l-3.45 3.45A4 4 0 018.5 10.97V13H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V14H6a.5.5 0 010-1h1.5v-2.03a4 4 0 113.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 10-5.006 3.309 3 3 0 005.006-3.31z'
			/>
		</svg>
	);
}

export default SvgGenderAmbiguous;
