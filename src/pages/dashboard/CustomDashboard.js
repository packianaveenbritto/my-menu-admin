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

// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
import Progress from '../../components/bootstrap/Progress';
import CommonGridMenus from '../common/CommonGridMenus';
import CustomTransferAction from '../../components/CustomTransferAction';
import CardWithNumbrrAndButton from '../../components/custom/CardWithNumbrrAndButton';
// eslint-disable-next-line no-unused-vars
import Input from '../../components/bootstrap/forms/Input';
import facebookIcon from '../../assets/img/custom/facebook-icon.svg';
import twitterIcon from '../../assets/img/custom/twitter-icon.svg';
import inIcon from '../../assets/img/custom/in-icon.svg';
import instaIcon from '../../assets/img/custom/insta-icon.svg';

import storeLogoPlay from '../../assets/img/custom/store-logo-play.svg';
import storeLogoAndroid from '../../assets/img/custom/store-logo-android.svg';
import storeLogoApple from '../../assets/img/custom/store-logo-apple.svg';
import CustomTableOne from '../common/CustomTableOne';
import SubHeaderRightButtons from '../../components/common/SubHeaderRightButtons';
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

const CustomDashboard = () => {
	/**
	 * Tour Start
	 */
	const SubHeaderRightValues = [
		{ id: 1, name: 'Help' },
		{ id: 2, name: 'Upgrade' },
		{ id: 3, name: 'Explore' },
		{ id: 4, name: 'Switch Account' },
	];

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
						<Button icon='add' />
					</ButtonGroup>

					<SubheaderSeparator />

					<ButtonGroup>
						<span className='h5 mb-0 fw-bold'>Preview</span>
						<div className='col-auto ms-3'>
							<Popovers trigger='hover' desc='QR Menu Preview' flip='bottom'>
								<img src={icEcommerceQr} width='100%' alt='' />
							</Popovers>
						</div>
						<div className='col-auto ms-3'>
							<Popovers trigger='hover' desc='Preview in Device' flip='bottom'>
								<img src={icDevicesIpad} width='100%' alt='' />
							</Popovers>
						</div>
						<div className='col-auto ms-3'>
							<Popovers trigger='hover' desc='Preview Online' flip='bottom'>
								<img src={icActionsCode} width='100%' alt='' />
							</Popovers>
						</div>
					</ButtonGroup>
					<SubheaderSeparator />

					<ButtonGroup>
						<span className='h5 mb-0 fw-bold'>Connect</span>
						<div className='col-auto ms-3'>
							<Popovers trigger='hover' desc='QR Menu Preview' flip='bottom'>
								<img src={icEcommerceQr} width='100%' alt='' />
							</Popovers>
						</div>
						<div className='col-auto ms-3'>
							<Popovers trigger='hover' desc='Preview in Device' flip='bottom'>
								<img src={icDevicesIpad} width='100%' alt='' />
							</Popovers>
						</div>
						<div className='col-auto ms-3'>
							<Popovers trigger='hover' desc='Preview Online' flip='bottom'>
								<img src={icActionsCode} width='100%' alt='' />
							</Popovers>
						</div>
					</ButtonGroup>
				</SubHeaderLeft>

				<SubHeaderRight>
					<div className='row align-items-center'>
						<div className='col-auto'>
							<SubHeaderRightButtons buttons={SubHeaderRightValues} />
						</div>
						<div className='col-auto'>
							{' '}
							<CommonAvatarTeam />
						</div>
					</div>
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
						<div className='row  p-4'>
							<div className='col-xl-4 d-flex align-items-center '>
								<div className='d-flex col-11'>
									<CardLabel icon='CustomMenuIcon' className='p-3 '>
										<CardTitle tag='h4' className='h5 '>
											Your MyMenu Current Plan
										</CardTitle>
										<CardSubTitle className='d-flex'>
											FREE Trial | 10 Days Remaining{' '}
										</CardSubTitle>
									</CardLabel>
								</div>
								<div className='d-flex  justify-content-end'>
									<SubheaderSeparator className='vert-seperator me-5' />
								</div>
							</div>

							<div className='col-xl-4 d-flex align-items-center res-margin'>
								<CardBody>
									<div className='d-flex justify-content-between'>
										<p>Complete Your Profile</p>
										<p className='fw-bold'>90%</p>
									</div>
									<Progress value={90} />
								</CardBody>
								<SubheaderSeparator className='vert-seperator me-5' />
							</div>

							<div className='col-xl-4  d-flex flex-column justify-content-center res-margin'>
								<div className='d-flex  align-items-center'>
									<div className='d-flex col-7'>
										<Icon icon='CustomEnvelop' />
										<div className='h5'>Email Verification</div>
									</div>
									<div className='col-3 d-flex justify-content-end'>
										<Icon icon='CustomExclamation' />
										<span className='text-danger'>Pending</span>
									</div>
								</div>
								<div className='d-flex  align-items-center'>
									<div className='col-7'>
										<Input type='text' />
									</div>
									<div className='col-3 d-flex justify-content-end'>
										<Button color='primary'>Resend Email</Button>
									</div>
								</div>
							</div>
						</div>
					</Card>
					<span className='fw-bold fs-4 mb-3'>
						Overview <samll className='fw-normal fs-5'>{activeTab}</samll>
					</span>
					<div className='col-xl-4'>
						<Card stretch>
							<CardBody className='d-flex'>
								<div className='col-6'>
									<div>
										<CardTitle tag='h4' className='h5'>
											Connected Devices
										</CardTitle>
										<CardSubTitle tag='h5' className='h6 text-muted'>
											{activeTab}
										</CardSubTitle>
									</div>
									<div style={{ marginTop: '40px' }}>
										<div className='row'>
											<div className='col-auto align-items-bottem'>
												<Button
													color='info'
													icon='Computer'
													isLight
													aria-label='Computer'
													tag='a'
												/>
											</div>
											<div className='col-auto'>
												<Button
													color='info'
													icon='PhoneIphone'
													isLight
													aria-label='Phone'
													tag='a'
												/>
											</div>
										</div>
									</div>
								</div>
								<div className='col-6 d-flex justify-content-end align-items-center'>
									<div className='device-cont-round'>
										<div className='fc-white fw-bold fs-5'>000</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xl-4'>
						<Card stretch>
							<CardHeader className='bg-transparent'>
								<CardLabel>
									<CardTitle tag='h4' className='h5'>
										New Profiles Captured
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										{activeTab}
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
										New Feedbacks
									</CardTitle>
									<CardSubTitle tag='h5' className='h6 text-muted'>
										Form Name
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
							<span className='h5 fw-bold'>Ongoing Campaigns</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-2'>
						<div className='mb-2'>
							<span className='h5 fw-bold'>Total Feedbacks</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-2'>
						<div className='mb-2'>
							<span className='h5 fw-bold'>Profiles Captured</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-2'>
						<div className='mb-2'>
							<span className='h5 fw-bold'>Existing Customers</span>
						</div>
						<div>
							<CardWithNumbrrAndButton number='000' />
						</div>
					</div>

					<div className='col-xl-4'>
						<div className='mb-2'>
							<span className='h5 fw-bold'>Total Customers</span>
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
									<CardTitle>New Customers</CardTitle>
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
										<div className='h4 mb-3'>Since 10 days</div>
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
									<CardTitle>Total Earning</CardTitle>
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
										<div className='h4 mb-3'>Last 10 Days</div>
										<span className='display-6 fw-bold'>$1342</span>
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
						<CustomTableOne />
					</div>

					<div className='col-xxl-12'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='NotificationsActive' iconColor='primary'>
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
									<CardLabel icon='MenuBook' iconColor='info'>
										<CardTitle tag='h4' className='h5'>
											Unpublished Menus
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
										<Button
											color='info'
											icon='MoreHoriz'
											isLight
											tag='a'
											to='/somefile.txt'
											target='_blank'
											download
										/>
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

					<div className='col-xl-8' style={{ height: '641px' }}>
						<CardHeader className='px-0 bg-transparent'>
							<CardLabel>
								<CardTitle>Integrations</CardTitle>
							</CardLabel>
							<CardActions>
								<Button color='info' isLight icon='Add'>
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
						<Card style={{ height: '510px', marginTop: '75px' }}>
							<div className='fw-bold fs-4 p-3'>Support</div>
							<div className='p-3'>
								<Button color='primary'>Request Professional Support</Button>
							</div>
							<div className='fw-bold fs-4 p-3'>WhatsApp Support</div>
							<div className='p-3'>
								<Button icon='Whatsapp' className='bg-color-secondary2'>
									Request Professional Support
								</Button>
							</div>
							<div className='fw-bold fs-4 p-3'>Social Media</div>
							<div className='d-flex'>
								<div className='p-2'>
									<img src={facebookIcon} alt='' />
								</div>
								<div className='p-2'>
									<img src={twitterIcon} alt='' />
								</div>
								<div className='p-2'>
									<img src={instaIcon} alt='' />
								</div>
								<div className='p-2'>
									<img src={inIcon} alt='' />
								</div>
							</div>
							<div className='fw-bold fs-4 p-3'>App Download Links</div>
							<div className='d-flex'>
								<div className='p-2'>
									<img src={storeLogoApple} alt='' />
								</div>
								<div className='p-2'>
									<img src={storeLogoPlay} alt='' />
								</div>
								<div className='p-2'>
									<img src={storeLogoAndroid} alt='' />
								</div>
							</div>
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
