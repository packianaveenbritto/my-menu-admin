import React from 'react';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Chart from '../../components/extras/Chart';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
// import Badge from '../../components/bootstrap/Badge';
// import { priceFormat } from '../../helpers/helpers';
import showNotification from '../../components/extras/showNotification';
import Icon from '../../components/icon/Icon';
import { demoPages } from '../../menu';
import useDarkMode from '../../hooks/useDarkMode';
import Checks from '../../components/bootstrap/forms/Checks';

const CommonGridMenus = ({
	// eslint-disable-next-line react/prop-types
	id,
	// eslint-disable-next-line react/prop-types
	name,
	// eslint-disable-next-line react/prop-types
	category,
	// eslint-disable-next-line react/prop-types
	img,
	// eslint-disable-next-line react/prop-types
	color,
	// eslint-disable-next-line react/prop-types
	series,
	// eslint-disable-next-line react/prop-types
	// price,
	// eslint-disable-next-line react/prop-types
	editAction,
	// eslint-disable-next-line react/prop-types
	deleteAction,
}) => {
	// eslint-disable-next-line no-unused-vars
	const { themeStatus, darkModeStatus } = useDarkMode();

	const dummyOptions = {
		colors: [color],
		chart: {
			type: 'line',
			width: 100,
			height: 35,
			sparkline: {
				enabled: true,
			},
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			y: {
				title: {
					// eslint-disable-next-line no-unused-vars
					formatter(seriesName) {
						return '';
					},
				},
			},
		},
		stroke: {
			curve: 'smooth',
			width: 2,
		},
	};
	return (
		<Card>
			<CardHeader>
				<CardLabel>
					<CardTitle>{name} </CardTitle>
					<CardSubTitle>{category}</CardSubTitle>
				</CardLabel>
				<CardActions>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button icon='MoreHoriz' color='success' shadow='default' />
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DropdownItem>
								<Button icon='Edit' onClick={() => editAction()}>
									Edit
								</Button>
							</DropdownItem>
							<DropdownItem>
								<Button
									icon='FileCopy'
									onClick={() => {
										showNotification(
											<span className='d-flex align-items-center'>
												<Icon icon='Info' size='lg' className='me-1' />
												<span>{name} duplicated.</span>
											</span>,
											`A copy of the ${name} product was created.`,
										);
									}}>
									Duplicate
								</Button>
							</DropdownItem>
							<DropdownItem isDivider />
							<DropdownItem>
								<Button icon='Delete' onClick={() => deleteAction()}>
									Delete
								</Button>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</CardActions>
			</CardHeader>
			<CardBody>
				<img src={img} alt='' className='mx-auto d-block img-fluid mb-3' />
				<div className='row align-items-center'>
					<div className='col'>Monthly sales</div>
					<div className='col-auto'>
						<Chart
							series={series}
							options={dummyOptions}
							type={dummyOptions.chart.type}
							height={dummyOptions.chart.height}
							width={dummyOptions.chart.width}
						/>
					</div>
				</div>
				<div className='row align-items-center'>
					<div className='col'>Active / Inactive</div>
					<div className='col-auto'>
						<Checks
							ariaLabel='Sample'
							id='examplemnmm'
							invalidFeedback=''
							name='examplemnmn'
							type='switch'
						/>
					</div>
				</div>
			</CardBody>
			<CardFooter className='shadow-3d-container'>
				<Button
					color='success'
					className={`w-100 mb-4 shadow-3d-up-hover shadow-3d-${
						darkModeStatus ? 'success' : 'dark'
					}`}
					size='lg'
					tag='a'
					to={`../${demoPages.sales.subMenu.productID.path}/${id}`}>
					View Product
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CommonGridMenus;
