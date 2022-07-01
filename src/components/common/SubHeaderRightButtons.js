/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import Button from '../bootstrap/Button';

const SubHeaderRightButtons = ({ buttons }) => {
	// eslint-disable-next-line no-unused-vars
	const [activeTab, setactiveTab] = React.useState();
	return (
		<div>
			{buttons &&
				buttons.map((data) => {
					return (
						// eslint-disable-next-line react/button-has-type
						<button
							className={
								activeTab === data.name
									? 'sub-header-right-button-clicked'
									: 'sub-header-right-button'
							}
							key={data.id}
							style={{ 'margin-right': '10px' }}
							onClick={() => {
								setactiveTab(data.name);
							}}>
							{data.name}
						</button>
					);
				})}
		</div>
	);
};
SubHeaderRightButtons.propTypes = {
	buttons: PropTypes.any,
};
SubHeaderRightButtons.defaultProps = {
	buttons: [],
};

export default SubHeaderRightButtons;
