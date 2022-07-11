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
import Button, { ButtonGroup } from '../../bootstrap/Button';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../../bootstrap/Dropdown';
import './styles.scss';

const CustomGridView = ({ top, mid, bottem }) => {
	const renderTop = () => {
		// eslint-disable-next-line react/destructuring-assignment
		return top.map((data) => {
			// const image = require(`../../../assets/img/custom/food-plate.png`);
			return (
				<div key={data.id} className='col-4 mb-3' style={{ width: '149px' }}>
					<div>
						<img key={data.id} src={data.image} alt='' width={130} height={120} />
					</div>
					<div className='top-image-title'>{data.name}</div>
					<div className='top-image-description'>{data.description}</div>
				</div>
			);
		});
	};

	const renderMiddle = () => {
		return (
			<div  style={{ width: '100%' }}>
				<img className='middle-image' src={mid} alt='' height={150} />
			</div>
		);
	};

	const renderBottem = () => {
		return bottem.map((data) => {
			return (
				<div key={data.id} className='col-6 p-2' style={{ width: '220px' }}>
					<div>
						<img key={data.id} src={data.image} alt='' width={210} height={170} />
					</div>
					<div className='top-image-title'>{data.name}</div>
					<div className='top-image-description'>{data.description}</div>
				</div>
			);
		});
	};
	return (
		<div className='container-card'>
			<div className='dropdown-section'>
				<ButtonGroup>
					<Dropdown>
						<DropdownToggle>
							<Button color='info' icon='Public' isLight>
								Preview Resolution
							</Button>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>1920x1080</DropdownItem>
							<DropdownItem>1080x720</DropdownItem>
							<DropdownItem>1366x768</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</ButtonGroup>
			</div>
			<div className='content-card p-4'>
				<div className=' mb-3'>
					<h4>Grid View</h4>
				</div>
				<div className='row mb-3'>{renderTop()}</div>
				<div className='row mb-3'>{renderMiddle()}</div>
				<div className='row'>{renderBottem()}</div>
			</div>
		</div>
	);
};
CustomGridView.propTypes = {
	top: PropTypes.any,
	mid: PropTypes.any,
	bottem: PropTypes.any,
};
CustomGridView.defaultProps = {
	top: [],
	mid: '',
	bottem: [],
};

export default CustomGridView;
