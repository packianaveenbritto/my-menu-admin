/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../bootstrap/Button';
import Card from '../bootstrap/Card';

const CardWithNumbrrAndButton = ({ number }) => {
	return (
		<div>
			<Card className='custom-card'>
				<div className='bg-l25-primary card-with-number'>
					<div style={{ 'text-align': 'end' }}>
						<Button
							icon='CustomMoreVert'
							color='bg-l25-primary'
							shadow='default'
							hoverShadow='none'
						/>
					</div>
					<div className='fw-bold fs-4'>{number}</div>
				</div>
			</Card>
		</div>
	);
};

CardWithNumbrrAndButton.propTypes = {
	number: PropTypes.string,
};
CardWithNumbrrAndButton.defaultProps = {
	number: '000',
};

export default CardWithNumbrrAndButton;
