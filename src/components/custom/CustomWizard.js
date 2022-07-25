/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-nested-ternary */
import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useDarkMode from '../../hooks/useDarkMode';
import Popovers from '../bootstrap/Popovers';
// import Popovers from '../bootstrap/Popovers';

// import useDarkMode from '../hooks/useDarkMode';

export const CustomWizardItem = ({ id, title, children, className, ...props }) => {
	return (
		<section
			id={id}
			className={classNames('wizard-item', className)}
			role='tabpanel'
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</section>
	);
};
CustomWizardItem.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	className: PropTypes.string,
};
CustomWizardItem.defaultProps = {
	className: null,
	title: null,
};

const CustomWizard = ({ children, color, onClick, activeStep }) => {
	const { themeStatus } = useDarkMode();
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const childCount = children.length;

	const getTitleName = (i) => {
		return `Step ${i + 1}`;
	};

	React.useEffect(() => {
		setActiveItemIndex(activeStep);
	}, [activeStep]);

	return (
		<>
			<div>
				<div className='wizard-progress position-relative'>
					<div className='progress'>
						<div
							className={classNames('progress-bar', {
								[`bg-${color}`]: color !== 'primary',
							})}
							role='progressbar'
							style={{ width: `${(100 / (childCount - 1)) * activeItemIndex}%` }}
							aria-valuenow={(100 / (childCount - 1)) * activeItemIndex}
							aria-valuemin='0'
							aria-valuemax='100'
							aria-label='progress'
						/>
					</div>
					{Children.map(children, (child, index) => (
						<Popovers
							key={child.props.id}
							desc={child.props.title || getTitleName(index)}
							trigger='hover'>
							<button
								type='button'
								className={classNames(
									'wizard-progress-btn',
									'position-absolute p-0 top-0',
									'translate-middle',
									'btn btn-sm',
									{
										[`btn-${color}`]: activeItemIndex >= index,
										[`btn-${themeStatus}`]: activeItemIndex < index,
									},
									'rounded-pill',
								)}
								style={{
									left: `${(100 / (childCount - 1)) * index}%`,
									width: '38px',
									height: '38px',
								}}
								onClick={() => {
									setActiveItemIndex(index);
									onClick(index + 1);
								}}>
								{index + 1}
							</button>
						</Popovers>
					))}
				</div>
			</div>
			<div className='d-flex align-items-center mt-3'>
				{Children.map(children, (child, index) => {
					return (
						<>
							<div
								style={{
									textAlign: 'center',
									width: `200%`,
									position: 'relative',
									left: `${
										index === 0 ? '-14%' : index === childCount - 1 ? '14%' : ''
									}`,
								}}
								key={child.props.id}>
								<p>{child.props.title}</p>
							</div>
							{index === childCount - 1 ? (
								''
							) : (
								<div
									style={{
										width: `${100 / (childCount - 1)}%`,
										height: '0px',
									}}
								/>
							)}
						</>
					);
				})}
			</div>
		</>
	);
};
CustomWizard.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'dark',
		'brand',
		'brand-two',
		'storybook',
	]),
	onClick: PropTypes.func,
	activeStep: PropTypes.number,
};
CustomWizard.defaultProps = {
	color: 'primary',
	onClick: null,
	activeStep: 0,
};

export default CustomWizard;
