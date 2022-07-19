/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import useDarkMode from '../../hooks/useDarkMode';
import MenuEditorSubHeader from './subHeader/MenuEditorSubHeader';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import Breadcrumb from '../../components/bootstrap/Breadcrumb';
import Icon from '../../components/icon/Icon';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import CommonGridMenus from '../common/CommonGridMenus';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import tableData from '../../common/data/dummyProductData';
import CustomGridView from '../../components/custom/customGridView/CustomGridView';
import Modal, { ModalBody, ModalHeader } from '../../components/bootstrap/Modal';
import Select from '../../components/bootstrap/forms/Select';
import Checks from '../../components/bootstrap/forms/Checks';
import PlaceholderImage from '../../components/extras/PlaceholderImage';
import Label from '../../components/bootstrap/forms/Label';
import { OffCanvasTitle } from '../../components/bootstrap/OffCanvas';

const MenuEditor = () => {
	const { id } = useParams();
	const breadCrumb = [
		{ title: 'Menu Name', to: '#' },
		{ title: 'Section Name', to: '#' },
		{ title: 'Item Name', to: '#' },
	];
	const TABS = {
		MENU1: 'Add a Section',
		MENU2: 'Add an Item',
		MENU3: 'Add Extras',
	};
	const topData = [
		{
			id: 1,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 2,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 3,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 4,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 5,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 6,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
	];

	const midimage = require(`../../assets/img/custom/dessert.jpg`);

	const bottemData = [
		{
			id: 1,
			name: 'Desserts',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/desserts-1.jpg`),
		},
		{
			id: 1,
			name: 'Desserts',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/desserts-2.jpg`),
		},
	];
	// eslint-disable-next-line no-unused-vars
	const [activeTab, setActiveTab] = useState(TABS.ALL);
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState(tableData);
	// eslint-disable-next-line no-unused-vars
	const [editPanel, setEditPanel] = useState(false);
	// const { themeStatus } = useDarkMode();
	// eslint-disable-next-line no-unused-vars
	const [editItem, setEditItem] = useState(null);
	const [itemModal, setItemModal] = useState(false);
	const [section, setSection] = useState(false);
	const [showImg, setShowImg] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['3']);
	const [availableType, setAvailableType] = useState(1);
	function handleRemove(Id) {
		const newData = data.filter((item) => item.id !== Id);
		setData(newData);
	}
	function handleEdit(Id) {
		const newData = data.filter((item) => item.id === Id);
		setEditItem(newData[0]);
	}
	const openModal = (key) => {
		switch (key) {
			case TABS.MENU1:
				setSection(!section);
				break;
			case TABS.MENU2:
				setItemModal(!itemModal);
				break;
			default:
		}
	};

	return (
		<PageWrapper>
			<MenuEditorSubHeader />
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xxl-8 col-xl-12'>
						<Card styles={{ borderRadius: '20px' }}>
							<CardHeader>
								<CardTitle>
									<span style={{ fontSize: '14px', fontWeight: 'lighter' }}>
										<Breadcrumb
											list={breadCrumb}
											isToHome={null}
											divider={null}
										/>
									</span>
								</CardTitle>
								<CardActions>
									<div className='d-flex g-3 justify-content-between align-items-center'>
										<ButtonGroup>
											{Object.keys(TABS).map((key) => (
												<Button
													isLight
													icon
													key={key}
													color='success'
													className='mx-2 px-2'
													onClick={() => {
														setActiveTab(TABS[key]);
														openModal(TABS[key]);
													}}>
													{TABS[key]}{' '}
													<span>
														<Icon icon='plus' color='dark' size='lg' />
													</span>
												</Button>
											))}
											<Button
												key='MTS'
												color='success'
												className='mx-2'
												tag='a'
												to={`../menu_editor/theme_settings/${id.toString()}`}>
												Menu Theme Settings
											</Button>
										</ButtonGroup>
									</div>
								</CardActions>
							</CardHeader>
							<CardBody>
								<div className='row'>
									<div className='col-lg-6 col-sm-12'>
										<FormGroup id='name' label='Menu Name'>
											<Input type='text' placeholder='Edit name here' />
										</FormGroup>
									</div>
									<div className='col-lg-6 col-sm-12'>
										<FormGroup id='description' label='Menu Description'>
											<Input type='text' placeholder='Type here' />
										</FormGroup>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card styles={{ borderRadius: '20px' }}>
							<CardBody>
								<div className='row mb-3'>
									<div className='d-flex' data-tour='search'>
										<label
											className='border-0 bg-transparent cursor-pointer'
											htmlFor='searchInput'>
											<Icon icon='Search' size='2x' color='primary' />
										</label>
										<Input
											id='searchInput'
											type='search'
											className='border-0 shadow-none bg-transparent'
											placeholder='Search...'
											autoComplete='off'
										/>
									</div>
								</div>
								<div className='row'>
									{dataPagination(data, currentPage, perPage).map((item) => (
										<div key={item.id} className='col-xxl-4 col-xl-4 col-md-6'>
											<CommonGridMenus
												id={item.id}
												name={item.name}
												category={item.category}
												img={item.image}
												color={item.color}
												series={item.series}
												price={item.price}
												isDisabledViewButton
												editAction={() => {
													setEditPanel(true);
													handleEdit(item.id);
												}}
												deleteAction={() => handleRemove(item.id)}
											/>
										</div>
									))}
									<PaginationButtons
										data={data}
										label='orders'
										setCurrentPage={setCurrentPage}
										currentPage={currentPage}
										perPage={perPage}
										setPerPage={setPerPage}
									/>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-xxl-4 col-xl-12'>
						<CustomGridView top={topData} mid={midimage} bottem={bottemData} />
					</div>
				</div>
				<Modal
					setIsOpen={setSection}
					isOpen={section}
					titleId='upcomingEdit'
					isCentered
					isScrollable
					size='lg'>
					<ModalHeader
						setIsOpen={setSection}
						style={{ backgroundColor: process.env.REACT_APP_SECONDARY2_COLOR }}>
						<OffCanvasTitle id='upcomingEdit'>
							<h1>Create a Section</h1>
						</OffCanvasTitle>
					</ModalHeader>
					<ModalBody style={{ backgroundColor: process.env.REACT_APP_SECONDARY2_COLOR }}>
						<div className='row g-4'>
							<div className='col-7'>
								<div className='row justify-content-between'>
									<div className='col-12 my-3'>
										<FormGroup>
											<Label htmlFor='name' className='text-secondary'>
												Section Name
											</Label>
											<Input
												id='name'
												placeholder='Type Here'
												// onChange={formik.handleChange}
												// value={formik.values.service}
											/>
										</FormGroup>
									</div>
									<div className='col-12 mb-3'>
										<FormGroup>
											<Label htmlFor='description' className='text-secondary'>
												Description
											</Label>
											<Input
												id='description'
												placeholder='Type Here'
												// onChange={formik.handleChange}
												// value={formik.values.employee}
											/>
										</FormGroup>
									</div>
									<div className='col-12 mb-3'>
										<FormGroup>
											<Label htmlFor='notes' className='text-secondary'>
												Note
											</Label>
											<Input
												id='notes'
												placeholder='Type Here'
												// onChange={formik.handleChange}
												// value={formik.values.employee}
											/>
										</FormGroup>
									</div>
									<div className='col-12 mb-3'>
										<FormGroup>
											<Label htmlFor='display' className='text-secondary'>
												Display As
											</Label>
											<Select id='display' placeholder='Select' />
										</FormGroup>
									</div>
									<div className='col-12 mb-3'>
										<FormGroup>
											<Label htmlFor='noCols' className='text-secondary'>
												Number Of Columns
											</Label>
											<Select id='noCols' placeholder='Select' />
										</FormGroup>
									</div>
									<div className='col-12 mb-3'>
										<FormGroup>
											<Label
												htmlFor='titlePosition'
												className='text-secondary'>
												Grid View Title Position
											</Label>
											<Select id='titlePosition' placeholder='Select' />
										</FormGroup>
									</div>
									<div className='col-8 mb-3'>
										<Label className='text-secondary'>
											Display Similar Item
										</Label>
									</div>
									<div className='col-2 mb-3'>
										<Checks
											className='float-end'
											checked
											id='similerItems'
											type='switch'
										/>
									</div>
									<div className='col-8 mb-3'>
										<Label className='text-secondary'>
											Mark Section As New
										</Label>
									</div>
									<div className='col-2 mb-3'>
										<Checks
											className='float-end'
											checked
											id='newSec'
											type='switch'
										/>
									</div>
									<div className='col-8 mb-3'>
										<Label className='text-secondary'>
											Mark Section As Signature
										</Label>
									</div>
									<div className='col-2 mb-3'>
										<Checks
											className='float-end'
											checked
											id='signature'
											type='switch'
										/>
									</div>
									<div className='col-8 mb-3'>
										<Label className='text-secondary'>Published</Label>
									</div>
									<div className='col-2 mb-3'>
										<Checks
											className='float-end'
											checked
											id='published'
											type='switch'
										/>
									</div>
									<div className='col-12 mb-3'>
										<Label className='text-secondary'>Availability</Label>
									</div>
									<div className='col-2 mb-3 text-center'>
										<Checks
											id='always'
											label='Always'
											type='radio'
											onChange={() => setAvailableType(1)}
											checked={availableType === 1}
										/>
									</div>
									<div className='col-5 mb-3 text-center'>
										<Checks
											id='specific'
											label='Specific Date & Time'
											type='radio'
											onChange={() => setAvailableType(2)}
											checked={availableType === 2}
										/>
									</div>
									<div className='col-3 mb-3 text-center'>
										<Checks
											id='periodic'
											label='Periodic'
											type='radio'
											onChange={() => setAvailableType(3)}
											checked={availableType === 3}
										/>
									</div>
									{availableType === 3 && (
										<>
											<div className='col-4 mb-3'>
												<Checks label='Sunday' />
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='sunFTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='sunTTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<Checks label='MonDay' />
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='monFTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='monTTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<Checks label='Tuesday' />
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='tueFTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='tueTTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<Checks label='WednesDay' />
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='wedFTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='wedTTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<Checks label='Thursday' />
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='thuFTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='thuTTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<Checks label='Friday' />
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='friFTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='friTTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<Checks label='Saturday' />
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='satFTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
											<div className='col-4 mb-3'>
												<FormGroup id='satTTime'>
													<Input placeholder='Time' type='time' />
												</FormGroup>
											</div>
										</>
									)}
								</div>
							</div>
							<div className='col-5'>
								<strong>Image</strong>
								<div className='row'>
									<div className='col-5'>
										<Label>Display Image</Label>
									</div>
									<div className='col-7'>
										<Checks
											checked={showImg}
											id='example'
											name='example'
											type='switch'
											onChange={() => {
												setShowImg(!showImg);
											}}
										/>
									</div>
								</div>
								{showImg ? (
									<div
										className='row'
										style={{
											border: `2px dashed ${process.env.REACT_APP_PRIMARY_COLOR}`,
										}}>
										<div className='col align-self-center'>
											<PlaceholderImage
												width={128}
												height={128}
												className='mx-auto d-block img-fluid rounded'
											/>
										</div>
										<div className='col-1 align-self-end'>
											<Icon icon='Trash' />
										</div>
									</div>
								) : (
									''
								)}
								<div className='text-primary my-2'>
									{' '}
									Image Recomended Size:{' '}
									<span className='text-dark'>1080 px X 1920px</span>
								</div>
								<strong>PDF Menu</strong>
								<div className='logo-drag-drop mb-3'>img</div>

								<FormGroup>
									<Button className='mb-2' color='success'>
										Browse
									</Button>
								</FormGroup>

								<div className='row'>
									<div className='col'>
										<Button color='info' className='w-100'>
											Cancel
										</Button>
									</div>
									<div className='col'>
										<Button color='info' className='w-100'>
											Create
										</Button>
									</div>
								</div>
							</div>
						</div>
					</ModalBody>
				</Modal>
				<Modal
					setIsOpen={setItemModal}
					isOpen={itemModal}
					titleId='upcomingEdit'
					isCentered
					isScrollable
					size='lg'>
					<ModalHeader
						setIsOpen={setItemModal}
						style={{ backgroundColor: process.env.REACT_APP_SECONDARY2_COLOR }}>
						<OffCanvasTitle id='upcomingEdit'>
							<h1>Create A Item</h1>
						</OffCanvasTitle>
					</ModalHeader>
					<ModalBody style={{ backgroundColor: process.env.REACT_APP_SECONDARY2_COLOR }}>
						<div className='row g-4'>
							<div className='col-7'>
								<div className='row'>
									<div className='col-12 my-2'>
										<FormGroup id='title' label='Menu Title'>
											<Input
												placeholder='Menu Title'
												// onChange={formik.handleChange}
												// value={formik.values.service}
											/>
										</FormGroup>
									</div>
									<div className='col-12 mb-2'>
										<FormGroup id='description' label='Description'>
											<Input
												placeholder='Description'
												// onChange={formik.handleChange}
												// value={formik.values.employee}
											/>
										</FormGroup>
									</div>
									<div className='col-12 mb-2'>
										<FormGroup id='availability' label='Availability'>
											<Select id='example' placeholder='--Select--' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<Checks label='Sunday' />
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='sunFTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='sunTTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<Checks label='MonDay' />
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='monFTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='monTTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<Checks label='Tuesday' />
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='tueFTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='tueTTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<Checks label='WednesDay' />
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='wedFTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='wedTTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<Checks label='Thursday' />
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='thuFTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='thuTTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<Checks label='Friday' />
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='friFTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='friTTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<Checks label='Saturday' />
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='satFTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
									<div className='col-4 mb-3'>
										<FormGroup id='satTTime'>
											<Input placeholder='Time' type='time' />
										</FormGroup>
									</div>
								</div>
							</div>
							<div className='col-5'>
								<strong>Image</strong>
								<div className='row'>
									<div className='col-5'>
										<Label>Display Image</Label>
									</div>
									<div className='col-7'>
										<Checks
											checked={showImg}
											id='example'
											name='example'
											type='switch'
											onChange={() => {
												setShowImg(!showImg);
											}}
										/>
									</div>
								</div>
								{showImg ? (
									<div
										className='row'
										style={{
											border: `2px dashed ${process.env.REACT_APP_PRIMARY_COLOR}`,
										}}>
										<div className='col align-self-center'>
											<PlaceholderImage
												width={128}
												height={128}
												className='mx-auto d-block img-fluid rounded'
											/>
										</div>
										<div className='col-1 align-self-end'>
											<Icon icon='Trash' />
										</div>
									</div>
								) : (
									''
								)}
								<div className='text-primary my-2'>
									{' '}
									Image Recomended Size:{' '}
									<span className='text-dark'>1080 px X 1920px</span>
								</div>
								<strong>PDF Menu</strong>
								<div className='logo-drag-drop mb-3'>img</div>

								<FormGroup>
									<Button className='mb-2' color='success'>
										Browse
									</Button>
								</FormGroup>

								<div className='row'>
									<div className='col'>
										<Button color='info' className='w-100'>
											Cancel
										</Button>
									</div>
									<div className='col'>
										<Button color='info' className='w-100'>
											Create
										</Button>
									</div>
								</div>
							</div>
						</div>
					</ModalBody>
				</Modal>
			</Page>
		</PageWrapper>
	);
};

export default MenuEditor;
