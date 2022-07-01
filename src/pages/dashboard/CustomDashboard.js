import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useTour } from '@reactour/tour';
import icEcommerceQr from '../../assets/iconsAndImages/icons/ic-ecommerce-qr.svg';
import icDevicesIpad from '../../assets/iconsAndImages/icons/ic-devices-ipad.svg';
import icActionsCode from '../../assets/iconsAndImages/icons/ic-actions-code.svg';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Chart from '../../components/extras/Chart';

import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Alert, { AlertHeading } from '../../components/bootstrap/Alert';
import Icon from '../../components/icon/Icon';
import Badge from '../../components/bootstrap/Badge';

import Popovers from '../../components/bootstrap/Popovers';
import CommonAvatarTeam from '../../components/common/CommonAvatarTeam';

import Company1 from '../../assets/logos/company1.png';
import Company2 from '../../assets/logos/company2.png';
import Company3 from '../../assets/logos/company3.png';
import Company4 from '../../assets/logos/company4.png';

import UserContact from '../../components/UserContact';
import Avatar, { AvatarGroup } from '../../components/Avatar';
import USERS from '../../common/data/userDummyData';
import { demoPages } from '../../menu';
import data from '../../common/data/dummyProductData';
import { priceFormat } from '../../helpers/helpers';
import PercentComparison from '../../components/extras/PercentComparison';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import useSortableData from '../../hooks/useSortableData';
import useDarkMode from '../../hooks/useDarkMode';
import Timeline, { TimelineItem } from '../../components/extras/Timeline';
import Progress from '../../components/bootstrap/Progress';
import CommonGridMenus from '../common/CommonGridMenus';
import CommonUpcomingEvents from '../common/CommonUpcomingEvents';
import CustomTransferAction from '../../components/CustomTransferAction';
import CardWithNumbrrAndButton from '../../components/custom/CardWithNumbrrAndButton';

// eslint-disable-next-line react/prop-types
const TableRow = ({ id, image, name, category, series, color, stock, price, store }) => {
	const { darkModeStatus } = useDarkMode();
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
		<tr>
			<th scope='row'>{id}</th>
			<td>
				<Link to={`../${demoPages.sales.subMenu.productID.path}/${id}`}>
					<img src={image} alt='' width={54} height={54} />
				</Link>
			</td>
			<td>
				<div>
					<Link
						to={`../${demoPages.sales.subMenu.productID.path}/${id}`}
						className={classNames('fw-bold', {
							'link-dark': !darkModeStatus,
							'link-light': darkModeStatus,
						})}>
						{name}
					</Link>
					<div className='text-muted'>
						<small>{category}</small>
					</div>
				</div>
			</td>
			<td>
				<Chart
					series={series}
					options={dummyOptions}
					type={dummyOptions.chart.type}
					height={dummyOptions.chart.height}
					width={dummyOptions.chart.width}
				/>
			</td>
			<td>
				<span>{stock}</span>
			</td>
			<td>
				<span>
					{price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</span>
			</td>
			<td className='h5'>
				<Badge
					color={
						(store === 'Company A' && 'danger') ||
						(store === 'Company B' && 'warning') ||
						(store === 'Company C' && 'success') ||
						'info'
					}>
					{store}
				</Badge>
			</td>
		</tr>
	);
};

// eslint-disable-next-line react/prop-types
const AnswerCustomer = ({ id, imgWebp, img, name, job, value, color }) => {
	const { darkModeStatus } = useDarkMode();

	const [state] = useState({
		series: [value],
		options: {
			chart: {
				type: 'radialBar',
				width: 50,
				height: 50,
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '50%',
					},
					track: {
						margin: 0,
					},
					dataLabels: {
						show: false,
					},
				},
			},
			stroke: {
				lineCap: 'round',
			},
			colors: [
				(color === 'primary' && process.env.REACT_APP_PRIMARY_COLOR) ||
					(color === 'secondary' && process.env.REACT_APP_SECONDARY_COLOR) ||
					(color === 'success' && process.env.REACT_APP_SUCCESS_COLOR) ||
					(color === 'info' && process.env.REACT_APP_INFO_COLOR) ||
					(color === 'warning' && process.env.REACT_APP_WARNING_COLOR) ||
					(color === 'danger' && process.env.REACT_APP_DANGER_COLOR),
			],
		},
	});
	return (
		<div className='col-12'>
			<div className='row g-2'>
				<div className='col d-flex'>
					<div className='flex-shrink-0'>
						<Avatar
							src={img}
							srcSet={imgWebp}
							size={54}
							userName={name}
							color={color}
						/>
					</div>
					<div className='flex-grow-1 ms-3 d-flex justify-content-between align-items-center'>
						<div>
							<Link
								to={`../${demoPages.appointment.subMenu.employeeID.path}/${id}`}
								className={classNames('fw-bold fs-6 mb-0', {
									'link-dark': !darkModeStatus,
									'link-light': darkModeStatus,
								})}>
								{name}
							</Link>
							<div className='text-muted mt-n1'>
								<small>{job}</small>
							</div>
						</div>
					</div>
				</div>
				<div className='col-auto'>
					<div className='d-flex align-items-center'>
						<Popovers desc='Remaining time' trigger='hover'>
							<span className='me-3'>%{value}</span>
						</Popovers>
						<Chart
							series={state.series}
							options={state.options}
							type={state.options.chart.type}
							height={state.options.chart.height}
							width={state.options.chart.width}
							className='me-3'
						/>
						<Button
							color='info'
							isLight
							icon='ScheduleSend'
							className='text-nowrap'
							tag='a'
							href='mailto:example@site.com'>
							Send
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

const CustomDashboard = () => {
	/**
	 * Tour Start
	 */
	const { setIsOpen } = useTour();
	useEffect(() => {
		if (localStorage.getItem('tourModalStarted') !== 'shown') {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { themeStatus, darkModeStatus } = useDarkMode();

	const navigate = useNavigate();
	const handleOnClickToEmployeeListPage = useCallback(
		() => navigate(`../${demoPages.appointment.subMenu.employeeList.path}`),
		[navigate],
	);

	const TABS = {
		ALL: 'All',
		VENUE2: 'Venue 2',
		VENUE3: 'Venue 3',
	};
	const [activeTab, setActiveTab] = useState(TABS.ALL);

	const [sales, setSales] = useState({
		series: [
			{
				data: [34, 32, 36, 34, 34],
			},
		],
		options: {
			colors: [process.env.REACT_APP_WARNING_COLOR],
			chart: {
				type: 'line',
				width: '100%',
				height: 150,
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
		},
		sales: {
			compare: 24,
		},
		campaigns: {
			price: 3265.72,
			compare: 5000,
		},
		coupons: {
			price: 2654.2,
			compare: 2300,
		},
	});
	useEffect(() => {
		if (activeTab === TABS.ALL) {
			setSales({
				series: [
					{
						data: [34, 32, 36, 34, 34],
					},
				],
				sales: {
					compare: 24,
				},
				campaigns: {
					price: 3265.72,
					compare: 5000,
				},
				coupons: {
					price: 2654.2,
					compare: 2300,
				},
				options: sales.options,
			});
		}
		if (activeTab === TABS.VENUE2) {
			setSales({
				series: [
					{
						data: [32, 35, 40, 30, 32],
					},
				],
				sales: {
					compare: 27,
				},
				campaigns: {
					price: 450,
					compare: 480,
				},
				coupons: {
					price: 98,
					compare: 120,
				},
				options: sales.options,
			});
		}
		if (activeTab === TABS.VENUE3) {
			setSales({
				series: [
					{
						data: [28, 32, 30, 29, 30],
					},
				],
				sales: {
					compare: 12,
				},
				campaigns: {
					price: 94,
					compare: 80,
				},
				coupons: {
					price: 80,
					compare: 45,
				},
				options: sales.options,
			});
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTab]);

	// eslint-disable-next-line no-unused-vars
	const [year, setYear] = useState(Number(moment().format('YYYY')));
	const companies = [
		{ name: 'Company 1', img: Company1 },
		{ name: 'Company 2', img: Company2 },
		{ name: 'Company 3', img: Company3 },
		{ name: 'Company 4', img: Company4 },
	];
	const COMPANIES_TAB = {
		COMP1: companies[0].name,
		COMP2: companies[1].name,
		COMP3: companies[2].name,
		COMP4: companies[3].name,
	};
	// eslint-disable-next-line no-unused-vars
	const [activeCompanyTab, setActiveCompanyTab] = useState(COMPANIES_TAB.COMP1);

	const [stackedColumn] = useState({
		series: [
			{
				name: 'John Doe',
				data: [23, 32, 12, 13],
			},
			{
				name: 'Grace Buckland',
				data: [13, 23, 20, 24],
			},
			{
				name: 'Jane Lee',
				data: [11, 17, 15, 15],
			},
			{
				name: 'Ryan McGrath',
				data: [21, 15, 25, 13],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 100,
				stacked: true,
				sparkline: {
					enabled: true,
				},
			},
			tooltip: {
				theme: 'dark',
			},
			plotOptions: {
				bar: {
					borderRadius: 7,
					columnWidth: '25%',
				},
			},
			xaxis: {
				type: 'category',
				categories: ['12th week', '13th week', '14th week', '15th week'],
			},
			fill: {
				opacity: 1,
			},
		},
	});

	const [fee] = useState({
		series: [
			{
				name: 'Sales',
				data: [12, 18, 14, 10],
			},
		],
		options: {
			chart: {
				type: 'area',
				height: '165',
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'smooth',
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0,
					stops: [0, 100],
				},
			},

			tooltip: {
				theme: 'dark',
			},
			colors: [process.env.REACT_APP_PRIMARY_COLOR],
		},
	});

	const TOP_SELLER_FILTER = {
		DAY: 'day',
		WEEK: 'week',
		MONTH: 'month',
	};
	const [topSellerFilter, setTopSellerFilter] = useState(TOP_SELLER_FILTER.DAY);
	const filteredData = data
		.filter(
			(f) =>
				(topSellerFilter === TOP_SELLER_FILTER.DAY && f.id < 6) ||
				(topSellerFilter === TOP_SELLER_FILTER.WEEK && f.name.includes('c')) ||
				(topSellerFilter === TOP_SELLER_FILTER.MONTH && f.price > 13),
		)
		.filter((c, index) => index < 5);

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['4']);
	const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);

	function compareLabel(amount = -1, name = false) {
		if (activeTab === TABS.YEARLY) {
			return name ? 'year' : moment().add(amount, 'year').format('YYYY');
		}
		if (activeTab === TABS.MONTHLY) {
			return name ? 'month' : moment().add(amount, 'month').format('MMMM');
		}
		return name ? 'week' : moment().add(amount, 'week').format('w [th week]');
	}

	return (
		<PageWrapper title={demoPages.sales.subMenu.dashboard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Dashboard</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								icon
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
					<span className='h4 mb-0 fw-normal'>+</span>
					<SubheaderSeparator />
					<span className='h5 mb-0 fw-normal'>Preview</span>
					<div className='col-auto'>
						<Popovers trigger='hover' desc='QR Menu Preview' flip='bottom'>
							<Icon icon='CustomQrEcommerce' />
						</Popovers>
					</div>
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Preview in Device' flip='bottom'>
							<img src={icDevicesIpad} width='100%' alt='' />
						</Popovers>
					</div>
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Preview Online' flip='bottom'>
							<img src={icActionsCode} width='100%' alt='' />
						</Popovers>
					</div>
					<SubheaderSeparator />
					<span className='h5 mb-0 fw-normal'>Connect</span>
					<div className='col-auto'>
						<Popovers trigger='hover' desc='QR Menu Preview' flip='bottom'>
							<img src={icEcommerceQr} width='100%' alt='' />
						</Popovers>
					</div>
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Preview in Device' flip='bottom'>
							<img src={icDevicesIpad} width='100%' alt='' />
						</Popovers>
					</div>
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Preview Online' flip='bottom'>
							<img src={icActionsCode} width='100%' alt='' />
						</Popovers>
					</div>
				</SubHeaderLeft>

				<SubHeaderRight>
					<CommonAvatarTeam>
						<strong>Marketing</strong> Team
					</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-12'>
						<Alert
							icon='Verified'
							isLight
							color='primary'
							borderWidth={0}
							className='shadow-3d-primary'
							isDismissible>
							<AlertHeading tag='h2' className='h4'>
								Congratulations! 🎉
							</AlertHeading>
							<span>You have reached your monthly sales targets.</span>
						</Alert>
					</div>

					<Card>
						<div className='col-12 d-flex align-items-center'>
							{/* <Card>
							<div className='col-4'>
								<CardLabel>
									<CardTitle tag='h4' className='h5 mb-2'>
										Marketing Team
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										There is a meeting at 12 o'clock.
									</CardSubTitle>
								</CardLabel>
							</div>
							
						</Card> */}
							<div className='col-xl-4'>
								<CardLabel
									icon='NotificationsActive'
									iconColor='warning'
									className='p-3 '>
									<CardTitle tag='h4' className='h5 '>
										Recent Activities
									</CardTitle>
									<CardSubTitle>last 2 weeks</CardSubTitle>
								</CardLabel>
							</div>
							<SubheaderSeparator />
							<div className='col-xl-4 p-4'>
								<div className='d-flex'>
									<div className='col-6'>
										<div>
											<CardTitle tag='h6' className='h6 '>
												Recent Activities
											</CardTitle>
										</div>
									</div>
									<div className='col-6'>
										<div>
											<CardTitle
												tag='h5'
												className='h6'
												style={{ 'text-align': 'end' }}>
												90%
											</CardTitle>
										</div>
									</div>
								</div>
								<div className='pl-3'>
									<Progress
										value={90}
										height={10} // Example: 10, '3vh', '5rem' etc.
										color='primary' // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
										className={String}
									/>
								</div>
							</div>
							<SubheaderSeparator />
							<div className='col-xl-4'>
								<CardLabel
									icon='NotificationsActive'
									iconColor='warning'
									className='p-3 '>
									<CardTitle tag='h4' className='h5 '>
										Recent Activities
									</CardTitle>
									<CardSubTitle>last 2 weeks</CardSubTitle>
								</CardLabel>
							</div>
						</div>
					</Card>

					<div className='col-xl-4'>
						<UserContact
							name={`${USERS.SAM.name} ${USERS.SAM.surname}`}
							position='Team Lead'
							mail={`${USERS.SAM.username}@site.com`}
							phone='1234567'
							onChat={() =>
								navigate(`../${demoPages.chat.subMenu.withListChat.path}`)
							}
							src={USERS.SAM.src}
							srcSet={USERS.SAM.srcSet}
							color={USERS.SAM.color}
						/>
					</div>
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Marketing Team
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										There is a meeting at 12 o'clock.
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Button
										icon='ArrowForwardIos'
										aria-label='Read More'
										hoverShadow='default'
										color={darkModeStatus ? 'dark' : null}
										onClick={handleOnClickToEmployeeListPage}
									/>
								</CardActions>
							</CardHeader>
							<CardBody>
								<AvatarGroup>
									<Avatar
										srcSet={USERS.GRACE.srcSet}
										src={USERS.GRACE.src}
										userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										color={USERS.GRACE.color}
									/>
									<Avatar
										srcSet={USERS.SAM.srcSet}
										src={USERS.SAM.src}
										userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
										color={USERS.SAM.color}
									/>
									<Avatar
										srcSet={USERS.CHLOE.srcSet}
										src={USERS.CHLOE.src}
										userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
										color={USERS.CHLOE.color}
									/>

									<Avatar
										srcSet={USERS.JANE.srcSet}
										src={USERS.JANE.src}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
									/>
									<Avatar
										srcSet={USERS.JOHN.srcSet}
										src={USERS.JOHN.src}
										userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
										color={USERS.JOHN.color}
									/>
									<Avatar
										srcSet={USERS.RYAN.srcSet}
										src={USERS.RYAN.src}
										userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
									/>
								</AvatarGroup>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Design Team
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										There is a meeting at 15 o'clock.
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Button
										icon='ArrowForwardIos'
										aria-label='Read More'
										hoverShadow='default'
										color={darkModeStatus ? 'dark' : null}
										onClick={handleOnClickToEmployeeListPage}
									/>
								</CardActions>
							</CardHeader>
							<CardBody>
								<AvatarGroup>
									<Avatar
										srcSet={USERS.JANE.srcSet}
										src={USERS.JANE.src}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
									/>
									<Avatar
										srcSet={USERS.JOHN.srcSet}
										src={USERS.JOHN.src}
										userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
										color={USERS.JOHN.color}
									/>
									<Avatar
										srcSet={USERS.ELLA.srcSet}
										src={USERS.ELLA.src}
										userName={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
										color={USERS.ELLA.color}
									/>
									<Avatar
										srcSet={USERS.RYAN.srcSet}
										src={USERS.RYAN.src}
										userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
									/>
								</AvatarGroup>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-2'>
						<div className='mb-2'>
							<span className='h6 fw-bold'>Ongoing Campaigns</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-2'>
						<div className='mb-2'>
							<span className='h6 fw-bold'>Ongoing Campaigns</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-2'>
						<div className='mb-2'>
							<span className='h6 fw-bold'>Ongoing Campaigns</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-2'>
						<div className='mb-2'>
							<span className='h6 fw-bold'>Ongoing Campaigns</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-4'>
						<div className='mb-2'>
							<span className='h6 fw-bold'>Ongoing Campaigns</span>
						</div>
						<div>
							<Card className='custom-card-chart'>
								<div className='row align-items-center;'>
									<div className='col-auto'>
										<div className='bg-l25-primary card-with-number'>
											<div style={{ 'text-align': 'end' }}>
												<Button
													icon='CustomMoreVert'
													color='bg-l25-primary'
													shadow='default'
													hoverShadow='none'
												/>
											</div>
											<div className='fw-bold fs-4'>000</div>
										</div>
									</div>
									<div className='col-auto'>
										<Chart
											series={fee.series}
											options={fee.options}
											type='area'
											height={70}
										/>
									</div>
								</div>
							</Card>
						</div>
					</div>
					<div className='col-xl-4'>
						<Card>
							<CardHeader>
								<CardLabel>
									<CardTitle>Team Fee</CardTitle>
								</CardLabel>
								<CardActions>
									<AvatarGroup>
										<Avatar
											srcSet={USERS.JANE.srcSet}
											src={USERS.JANE.src}
											userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
											color={USERS.JANE.color}
										/>
										<Avatar
											srcSet={USERS.JOHN.srcSet}
											src={USERS.JOHN.src}
											userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
											color={USERS.JOHN.color}
										/>
										<Avatar
											srcSet={USERS.ELLA.srcSet}
											src={USERS.ELLA.src}
											userName={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
											color={USERS.ELLA.color}
										/>
										<Avatar
											srcSet={USERS.RYAN.srcSet}
											src={USERS.RYAN.src}
											userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
											color={USERS.RYAN.color}
										/>
									</AvatarGroup>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row align-items-end'>
									<div className='col-lg-6'>
										<div className='h4 mb-3'>Total Fee</div>
										<span className='display-6 fw-bold'>$216</span>
									</div>
									<div className='col-lg-6'>
										<Chart
											series={fee.series}
											options={fee.options}
											type='area'
											height={165}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card>
							<CardHeader>
								<CardLabel>
									<CardTitle>Team Fee</CardTitle>
								</CardLabel>
								<CardActions>
									<AvatarGroup>
										<Avatar
											srcSet={USERS.JANE.srcSet}
											src={USERS.JANE.src}
											userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
											color={USERS.JANE.color}
										/>
										<Avatar
											srcSet={USERS.JOHN.srcSet}
											src={USERS.JOHN.src}
											userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
											color={USERS.JOHN.color}
										/>
										<Avatar
											srcSet={USERS.ELLA.srcSet}
											src={USERS.ELLA.src}
											userName={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
											color={USERS.ELLA.color}
										/>
										<Avatar
											srcSet={USERS.RYAN.srcSet}
											src={USERS.RYAN.src}
											userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
											color={USERS.RYAN.color}
										/>
									</AvatarGroup>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row align-items-end'>
									<div className='col-lg-6'>
										<div className='h4 mb-3'>Total Fee</div>
										<span className='display-6 fw-bold'>$216</span>
									</div>
									<div className='col-lg-6'>
										<Chart
											series={fee.series}
											options={fee.options}
											type='area'
											height={165}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card>
							<CardHeader>
								<CardLabel>
									<CardTitle>Team Earning</CardTitle>
								</CardLabel>
								<CardActions>
									<AvatarGroup>
										<Avatar
											srcSet={USERS.JANE.srcSet}
											src={USERS.JANE.src}
											userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
											color={USERS.JANE.color}
										/>
										<Avatar
											srcSet={USERS.JOHN.srcSet}
											src={USERS.JOHN.src}
											userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
											color={USERS.JOHN.color}
										/>
										<Avatar
											srcSet={USERS.ELLA.srcSet}
											src={USERS.ELLA.src}
											userName={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
											color={USERS.ELLA.color}
										/>
										<Avatar
											srcSet={USERS.RYAN.srcSet}
											src={USERS.RYAN.src}
											userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
											color={USERS.RYAN.color}
										/>
									</AvatarGroup>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row align-items-end'>
									<div className='col-lg-6'>
										<div className='h4 mb-3'>Total Earning</div>
										<span className='display-6 fw-bold '>$1342</span>
										<span className='text-muted ms-3'>(Incl. Tax)</span>
									</div>
									<div className='col-lg-6'>
										<Chart
											series={stackedColumn.series}
											options={stackedColumn.options}
											type='bar'
											height={165}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div>
						<CommonUpcomingEvents />
					</div>

					<div className='col-xxl-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='NotificationsActive' iconColor='warning'>
									<CardTitle tag='h4' className='h5'>
										Recent Activities
									</CardTitle>
									<CardSubTitle>last 2 weeks</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<Timeline>
									<TimelineItem
										label={moment().add(-0.25, 'hours').format('LT')}
										color='primary'>
										Extended license purchased from France.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-4.54, 'hours').format('LT')}
										color='success'>
										<Popovers desc='5 stars' trigger='hover'>
											<span>
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
												<Icon icon='StarFill' color='warning' />
											</span>
										</Popovers>
										<b>, a new rating has been received.</b>
									</TimelineItem>
									<TimelineItem
										label={moment().add(-9.34, 'hours').format('LT')}
										color='warning'>
										Customer's problem solved.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-1, 'day').fromNow()}
										color='primary'>
										Regular license purchased from United Kingdom.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-1, 'day').fromNow()}
										color='primary'>
										Regular license purchased from Italy.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-2, 'day').fromNow()}
										color='info'>
										<span className='text-muted'>
											New version released.{' '}
											<a href='/' className='fw-bold'>
												V12.1.0
											</a>
										</span>
									</TimelineItem>
									<TimelineItem
										label={moment().add(-3, 'day').fromNow()}
										color='danger'>
										Market research meeting for new product.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-7, 'day').fromNow()}
										color='secondary'>
										Updating, compiling and going live the product introduction
										page.
									</TimelineItem>
									<TimelineItem
										label={moment().add(-8, 'day').fromNow()}
										color='primary'>
										Regular license purchased from Germany.
									</TimelineItem>
								</Timeline>
							</CardBody>
						</Card>
					</div>

					<div className='col-xxl-12'>
						<div className='col-xxl-12'>
							<Card>
								<CardHeader>
									<CardLabel icon='Storefront' iconColor='info'>
										<CardTitle tag='h4' className='h5'>
											Top Seller
										</CardTitle>
									</CardLabel>
									<CardActions>
										<Dropdown isButtonGroup>
											<Button color='success' isLight icon='WaterfallChart'>
												{(topSellerFilter === TOP_SELLER_FILTER.DAY &&
													moment().format('MMM Do')) ||
													(topSellerFilter === TOP_SELLER_FILTER.WEEK &&
														`${moment()
															.startOf('week')
															.format('MMM Do')} - ${moment()
															.endOf('week')
															.format('MMM Do')}`) ||
													(topSellerFilter === TOP_SELLER_FILTER.MONTH &&
														moment().format('MMM YYYY'))}
											</Button>
											<DropdownToggle>
												<Button color='success' isLight isVisuallyHidden />
											</DropdownToggle>
											<DropdownMenu isAlignmentEnd>
												<DropdownItem>
													<Button
														onClick={() =>
															setTopSellerFilter(
																TOP_SELLER_FILTER.DAY,
															)
														}>
														Last Day
													</Button>
												</DropdownItem>
												<DropdownItem>
													<Button
														onClick={() =>
															setTopSellerFilter(
																TOP_SELLER_FILTER.WEEK,
															)
														}>
														Last Week
													</Button>
												</DropdownItem>
												<DropdownItem>
													<Button
														onClick={() =>
															setTopSellerFilter(
																TOP_SELLER_FILTER.MONTH,
															)
														}>
														Last Month
													</Button>
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
										<Button
											color='info'
											icon='CloudDownload'
											isLight
											tag='a'
											to='/somefile.txt'
											target='_blank'
											download>
											Export
										</Button>
									</CardActions>
								</CardHeader>
								<CardBody className='table-responsive'>
									<table className='table table-modern table-hover'>
										<thead>
											<tr>
												<th
													scope='col'
													onClick={() => requestSort('id')}
													className='cursor-pointer text-decoration-underline'>
													#{' '}
													<Icon
														size='lg'
														className={getClassNamesFor('id')}
														icon='FilterList'
													/>
												</th>
												<th scope='col'>Image</th>
												<th
													scope='col'
													onClick={() => requestSort('name')}
													className='cursor-pointer text-decoration-underline'>
													Name{' '}
													<Icon
														size='lg'
														className={getClassNamesFor('name')}
														icon='FilterList'
													/>
												</th>
												<th scope='col'>Sales</th>
												<th
													scope='col'
													onClick={() => requestSort('stock')}
													className='cursor-pointer text-decoration-underline'>
													Stock{' '}
													<Icon
														size='lg'
														className={getClassNamesFor('stock')}
														icon='FilterList'
													/>
												</th>
												<th
													scope='col'
													onClick={() => requestSort('price')}
													className='cursor-pointer text-decoration-underline'>
													Price{' '}
													<Icon
														size='lg'
														className={getClassNamesFor('price')}
														icon='FilterList'
													/>
												</th>
												<th
													scope='col'
													onClick={() => requestSort('store')}
													className='cursor-pointer text-decoration-underline'>
													Store{' '}
													<Icon
														size='lg'
														className={getClassNamesFor('store')}
														icon='FilterList'
													/>
												</th>
											</tr>
										</thead>
										<tbody>
											{dataPagination(items, currentPage, perPage).map(
												(i) => (
													// eslint-disable-next-line react/jsx-props-no-spreading
													<TableRow key={i.id} {...i} />
												),
											)}
										</tbody>
									</table>
								</CardBody>
								<PaginationButtons
									data={items}
									label='items'
									setCurrentPage={setCurrentPage}
									currentPage={currentPage}
									perPage={perPage}
									setPerPage={setPerPage}
								/>
							</Card>
						</div>
					</div>

					<div>
						<div className='row'>
							<div className='col'>
								<CardLabel icon='ListAlt' iconColor='primary' className='p-4'>
									<CardTitle tag='h5' className='h6 '>
										All Menus
										<small> Venue</small>
									</CardTitle>
								</CardLabel>
							</div>
							<div className='col text-end p-4' style={{ alignItems: 'center' }}>
								<CardTitle tag='h6' className='h6'>
									Add New Menu
									<Icon
										icon='Add'
										// className={}
										color='dark'
										size='md'
										forceFamily='material'
									/>
								</CardTitle>
							</div>
						</div>

						<div className='row'>
							{dataPagination(data, currentPage, perPage).map((item) => (
								<div key={item.id} className='col-xxl-3 col-xl-4 col-md-6'>
									<CommonGridMenus
										id={item.id}
										name={item.name}
										category={item.category}
										img={item.image}
										color={item.color}
										series={item.series}
										price={item.price}
										// editAction={() => {
										// 	setEditPanel(true);
										// 	handleEdit(item.id);
										// }}
										// deleteAction={() => handleRemove(item.id)}
									/>
								</div>
							))}
						</div>
						<PaginationButtons
							data={data}
							label='orders'
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							perPage={perPage}
							setPerPage={setPerPage}
						/>
					</div>

					<div className='col-lg-8'>
						<CardHeader className='px-0 bg-transparent'>
							<CardLabel>
								<CardTitle>Integrations</CardTitle>
							</CardLabel>
							<CardActions>
								<Button color='info' isLight icon='PublishedWithChanges'>
									Add New
								</Button>
							</CardActions>
						</CardHeader>
						<CustomTransferAction
							currency='$'
							amount={80}
							status='Completed'
							middleText='Payment Solution'
						/>
						<CustomTransferAction
							currency='$'
							amount={80}
							status='Completed'
							middleText='Payment Solution'
						/>
						<CustomTransferAction
							currency='$'
							amount={80}
							status='Completed'
							middleText='Payment Solution'
						/>
						<CustomTransferAction
							currency='$'
							amount={80}
							status='Completed'
							middleText='Payment Solution'
						/>
					</div>

					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='ContactSupport' iconColor='secondary'>
									<CardTitle tag='h4' className='h5'>
										Waiting for an Answer
									</CardTitle>
									<CardSubTitle tag='h5' className='h6'>
										Customer
									</CardSubTitle>
								</CardLabel>
								<CardActions>
									<Dropdown>
										<DropdownToggle hasIcon={false}>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLink
												hoverShadow='default'
												icon='MoreHoriz'
												aria-label='More Actions'
											/>
										</DropdownToggle>
										<DropdownMenu isAlignmentEnd>
											<DropdownItem>
												<Button
													icon='Send'
													tag='a'
													href='mailto:example@site.com'>
													Send Bulk Mail
												</Button>
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row g-3'>
									<AnswerCustomer
										id={USERS.GRACE.id}
										img={USERS.GRACE.src}
										imgWebp={USERS.GRACE.srcSet}
										name={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										color={USERS.GRACE.color}
										job='Maryland'
										value={43}
									/>
									<AnswerCustomer
										id={USERS.JANE.id}
										img={USERS.JANE.src}
										imgWebp={USERS.JANE.srcSet}
										name={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
										job='North Carolina'
										value={35}
									/>
									<AnswerCustomer
										id={USERS.RYAN.id}
										img={USERS.RYAN.src}
										imgWebp={USERS.RYAN.srcSet}
										name={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
										job='Rhode Island'
										value={27}
									/>
									<AnswerCustomer
										id={USERS.ELLA.id}
										img={USERS.ELLA.src}
										imgWebp={USERS.ELLA.srcSet}
										name={`${USERS.ELLA.name} ${USERS.ELLA.surname}`}
										color={USERS.ELLA.color}
										job='Washington'
										value={15}
									/>
									<AnswerCustomer
										id={USERS.CHLOE.id}
										img={USERS.CHLOE.src}
										imgWebp={USERS.CHLOE.srcSet}
										name={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
										color={USERS.CHLOE.color}
										job='Kentucky'
										value={12}
									/>
									<AnswerCustomer
										id={USERS.SAM.id}
										img={USERS.SAM.src}
										imgWebp={USERS.SAM.srcSet}
										name={`${USERS.SAM.name} ${USERS.SAM.surname}`}
										color={USERS.SAM.color}
										job='Michigan'
										value={12}
									/>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-3'>
						<Card
							color='success'
							className={`custom-card-with-shaddow w-100 mb-4 shadow-3d-${
								darkModeStatus ? 'success' : 'dark'
							}`}>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Coupons
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='d-flex align-items-center pb-3'>
									<div className='flex-shrink-0'>
										<Icon icon='ConfirmationNumber' size='4x' color='primary' />
									</div>
									<div className='flex-grow-1 ms-3'>
										<div className='fw-bold fs-3 mb-0'>
											{priceFormat(sales.coupons.price)}
											<PercentComparison
												valueOne={sales.coupons.price}
												valueTwo={sales.coupons.compare}
											/>
										</div>
										<div
											className={classNames({
												'text-muted': !darkModeStatus,
												'text-light': darkModeStatus,
											})}>
											Compared to ({priceFormat(sales.coupons.compare)} last{' '}
											{compareLabel(0, true)})
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-3'>
						<Card
							color='success'
							className={`custom-card-with-shaddow w-100 mb-4 shadow-3d-${
								darkModeStatus ? 'success' : 'dark'
							}`}>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Coupons
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='d-flex align-items-center pb-3'>
									<div className='flex-shrink-0'>
										<Icon icon='ConfirmationNumber' size='4x' color='primary' />
									</div>
									<div className='flex-grow-1 ms-3'>
										<div className='fw-bold fs-3 mb-0'>
											{priceFormat(sales.coupons.price)}
											<PercentComparison
												valueOne={sales.coupons.price}
												valueTwo={sales.coupons.compare}
											/>
										</div>
										<div
											className={classNames({
												'text-muted': !darkModeStatus,
												'text-light': darkModeStatus,
											})}>
											Compared to ({priceFormat(sales.coupons.compare)} last{' '}
											{compareLabel(0, true)})
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-3'>
						<Card
							color='success'
							className={`custom-card-with-shaddow w-100 mb-4 shadow-3d-${
								darkModeStatus ? 'success' : 'dark'
							}`}>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Coupons
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='d-flex align-items-center pb-3'>
									<div className='flex-shrink-0'>
										<Icon icon='ConfirmationNumber' size='4x' color='primary' />
									</div>
									<div className='flex-grow-1 ms-3'>
										<div className='fw-bold fs-3 mb-0'>
											{priceFormat(sales.coupons.price)}
											<PercentComparison
												valueOne={sales.coupons.price}
												valueTwo={sales.coupons.compare}
											/>
										</div>
										<div
											className={classNames({
												'text-muted': !darkModeStatus,
												'text-light': darkModeStatus,
											})}>
											Compared to ({priceFormat(sales.coupons.compare)} last{' '}
											{compareLabel(0, true)})
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					<div className='col-xl-3'>
						<Card
							color='success'
							className={`custom-card-with-shaddow w-100 mb-4 shadow-3d-${
								darkModeStatus ? 'success' : 'dark'
							}`}>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										Coupons
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='d-flex align-items-center pb-3'>
									<div className='flex-shrink-0'>
										<Icon icon='ConfirmationNumber' size='4x' color='primary' />
									</div>
									<div className='flex-grow-1 ms-3'>
										<div className='fw-bold fs-3 mb-0'>
											{priceFormat(sales.coupons.price)}
											<PercentComparison
												valueOne={sales.coupons.price}
												valueTwo={sales.coupons.compare}
											/>
										</div>
										<div
											className={classNames({
												'text-muted': !darkModeStatus,
												'text-light': darkModeStatus,
											})}>
											Compared to ({priceFormat(sales.coupons.compare)} last{' '}
											{compareLabel(0, true)})
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default CustomDashboard;
