/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
// import moment from 'moment';
// import { Link, useNavigate } from 'react-router-dom';
// import classNames from 'classnames';
// import { useTour } from '@reactour/tour';
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
import tableData from '../../common/data/dummyProductData';
import CommonGridMenus from '../common/CommonGridMenus';
// eslint-disable-next-line no-unused-vars
import Card, {
	// CardActions,
	// CardBody,
	// CardFooter,
	// CardFooterLeft,
	// CardFooterRight,
	// CardHeader,
	// CardSubTitle,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
// import Card, {
// 	CardActions,
// 	CardBody,
// 	CardHeader,
// 	CardLabel,
// 	CardSubTitle,
// 	CardTitle,
// } from '../../components/bootstrap/Card';
// import Chart from '../../components/extras/Chart';

// import Dropdown, {
// 	DropdownItem,
// 	DropdownMenu,
// 	DropdownToggle,
// } from '../../components/bootstrap/Dropdown';
// import Alert, { AlertHeading } from '../../components/bootstrap/Alert';
// import Icon from '../../components/icon/Icon';
// import Badge from '../../components/bootstrap/Badge';

import Popovers from '../../components/bootstrap/Popovers';
import CommonAvatarTeam from '../../components/common/CommonAvatarTeam';
// import CommonMyWallet from '../common/CommonMyWallet';

// import Company1 from '../../assets/logos/company1.png';
// import Company2 from '../../assets/logos/company2.png';
// import Company3 from '../../assets/logos/company3.png';
// import Company4 from '../../assets/logos/company4.png';

// import UserContact from '../../components/UserContact';
// import Avatar, { AvatarGroup } from '../../components/Avatar';
// import USERS from '../../common/data/userDummyData';
// import { demoPages } from '../../menu';
// import data from '../../common/data/dummyProductData';
// import { average, priceFormat } from '../../helpers/helpers';
// import PercentComparison from '../../components/extras/PercentComparison';
// import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
// import useSortableData from '../../hooks/useSortableData';
import useDarkMode from '../../hooks/useDarkMode';
import Pagination, { PaginationItem } from '../../components/bootstrap/Pagination';
// import Timeline, { TimelineItem } from '../../components/extras/Timeline';
// import CommonTodo from '../common/CommonTodo';

const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Required';
	} else if (values.name.length < 3) {
		errors.name = 'Must be 3 characters or more';
	} else if (values.name.length > 20) {
		errors.name = 'Must be 20 characters or less';
	}

	if (!values.price) {
		errors.price = 'Required';
	} else if (values.price < 0) {
		errors.price = 'Price should not be 0';
	}

	if (!values.stock) {
		errors.stock = 'Required';
	}

	if (!values.category) {
		errors.category = 'Required';
	} else if (values.category.length < 3) {
		errors.category = 'Must be 3 characters or more';
	} else if (values.category.length > 20) {
		errors.category = 'Must be 20 characters or less';
	}

	return errors;
};

const Menus = () => {
	const TABS = {
		ALL: 'All',
		VENUE2: 'Venue 2',
		VENUE3: 'Venue 3',
	};
	const [activeTab, setActiveTab] = useState(TABS.ALL);
	const { themeStatus } = useDarkMode();
	const [data, setData] = useState(tableData);
	const [editItem, setEditItem] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [editPanel, setEditPanel] = useState(false);

	function handleRemove(id) {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	}

	function handleEdit(id) {
		const newData = data.filter((item) => item.id === id);
		setEditItem(newData[0]);
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			price: '',
			stock: '',
			category: '',
		},
		validate,
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			setEditPanel(false);
		},
	});

	useEffect(() => {
		if (editItem) {
			formik.setValues({
				name: editItem.name,
				price: editItem.price,
				stock: editItem.stock,
				category: editItem.category,
			});
		}
		return () => {
			formik.setValues({
				name: '',
				price: '',
				stock: '',
				category: '',
			});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editItem]);
	return (
		<PageWrapper>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Menus</span>
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
					{data.map((item) => (
						<div key={item.id} className='col-xxl-3 col-xl-4 col-md-6'>
							<CommonGridMenus
								id={item.id}
								name={item.name}
								category={item.category}
								img={item.image}
								color={item.color}
								series={item.series}
								price={item.price}
								editAction={() => {
									setEditPanel(true);
									handleEdit(item.id);
								}}
								deleteAction={() => handleRemove(item.id)}
							/>
						</div>
					))}
				</div>
				<div className='d-flex justify-content-between'>
					<div>Showing 1 to 10 of 4 items</div>
					<div>
						<Pagination ariaLabel='pagination'>
							<PaginationItem isPrev />
							<PaginationItem isActive>1</PaginationItem>
							<PaginationItem>2</PaginationItem>
							<PaginationItem>3</PaginationItem>
							<PaginationItem isNext />
						</Pagination>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Menus;
