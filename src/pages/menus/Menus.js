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
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../components/bootstrap/Modal';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Select from '../../components/bootstrap/forms/Select';
// import Textarea from '../../components/bootstrap/forms/Textarea';
import Checks from '../../components/bootstrap/forms/Checks';
import PlaceholderImage from '../../components/extras/PlaceholderImage';
import {
	// OffCanvasBody,
	// OffCanvasHeader,
	OffCanvasTitle,
} from '../../components/bootstrap/OffCanvas';
// eslint-disable-next-line no-unused-vars
import {
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
// import Pagination, { PaginationItem } from '../../components/bootstrap/Pagination';
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

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['10']);
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
	// const [upcomingEventsInfoOffcanvas, setUpcomingEventsInfoOffcanvas] = useState(false);
	// const handleUpcomingDetails = () => {
	// 	setUpcomingEventsInfoOffcanvas(!upcomingEventsInfoOffcanvas);
	// };

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);
	const handleUpcomingEdit = () => {
		setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
	};
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
								onClick={handleUpcomingEdit}
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
								editAction={() => {
									setEditPanel(true);
									handleEdit(item.id);
								}}
								deleteAction={() => handleRemove(item.id)}
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

				<Modal
					setIsOpen={setUpcomingEventsEditOffcanvas}
					isOpen={upcomingEventsEditOffcanvas}
					titleId='upcomingEdit'
					isCentered
					isScrollable
					size='lg'>
					<ModalHeader setIsOpen={setUpcomingEventsEditOffcanvas}>
						<OffCanvasTitle id='upcomingEdit'>New Menu</OffCanvasTitle>
					</ModalHeader>
					<ModalBody>
						<div className='row g-4'>
							<div className='col-7'>
								<div className='row'>
									<div className='col-12'>
										<FormGroup id='title' label='Menu Title'>
											<Input
												placeholder='Menu Title'
												// onChange={formik.handleChange}
												// value={formik.values.service}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='description' label='Description'>
											<Input
												placeholder='Description'
												// onChange={formik.handleChange}
												// value={formik.values.employee}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='availability' label='Availability'>
											<Input
												placeholder='Availability'
												// onChange={formik.handleChange}
												// value={formik.values.location}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='availability' label='Availability'>
											<Select id='example' placeholder='--Select--' />
										</FormGroup>
									</div>
									<div className='col-4'>
										<Checks label='Sunday' />
									</div>
									<div className='col-4'>
										<FormGroup id='sunFTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<FormGroup id='sunTTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<Checks label='MonDay' />
									</div>
									<div className='col-4'>
										<FormGroup id='monFTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<FormGroup id='monTTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<Checks label='Tuesday' />
									</div>
									<div className='col-4'>
										<FormGroup id='tueFTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<FormGroup id='tueTTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<Checks label='WednesDay' />
									</div>
									<div className='col-4'>
										<FormGroup id='wedFTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<FormGroup id='wedTTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<Checks label='Thursday' />
									</div>
									<div className='col-4'>
										<FormGroup id='thuFTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<FormGroup id='thuTTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<Checks label='Friday' />
									</div>
									<div className='col-4'>
										<FormGroup id='friFTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<FormGroup id='friTTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<Checks label='Saturday' />
									</div>
									<div className='col-4'>
										<FormGroup id='satFTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
									<div className='col-4'>
										<FormGroup id='satTTime' label='Time'>
											<Input
												placeholder='Time'
												onChange={formik.handleChange}
												value={formik.values.time}
												type='time'
											/>
										</FormGroup>
									</div>
								</div>
							</div>
							<div className='col-5'>
								<div className='row'>
									<div>Display Image</div>
									{/* <Checks  /> */}
									<div className='col'>
										{/* {editItem?.image ? (
											<img
												src={editItem.image}
												alt=''
												width={128}
												height={128}
												className='mx-auto d-block img-fluid mb-3'
											/>
										) : ( */}
										<PlaceholderImage
											width={128}
											height={128}
											className='mx-auto d-block img-fluid mb-3 rounded'
										/>
										{/* )} */}
									</div>
									<div className='col-lg-8'>
										<div className='row g-4'>
											<div className='col-12'>
												<Input type='file' autoComplete='photo' />
											</div>
											<div className='col-12'>
												<Button
													color='dark'
													isLight
													icon='Delete'
													onClick={() => {
														setEditItem({
															...editItem,
															image: null,
														});
													}}>
													Delete Image
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ModalBody>
					<ModalFooter className='bg-transparent'>
						<Button
							color='info'
							className='w-100'
							onClick={() => setUpcomingEventsEditOffcanvas(false)}>
							Save
						</Button>
					</ModalFooter>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default Menus;
