import React, { useState } from 'react';
// import useDarkMode from '../../hooks/useDarkMode';
import MenuEditorSubHeader from './subHeader/MenuEditorSubHeader';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Page from '../../layout/Page/Page';
import Card, { CardBody } from '../../components/bootstrap/Card';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import Breadcrumb from '../../components/bootstrap/Breadcrumb';
import Icon from '../../components/icon/Icon';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import CommonGridMenus from '../common/CommonGridMenus';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import tableData from '../../common/data/dummyProductData';

const MenuEditor = () => {
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
	// eslint-disable-next-line no-unused-vars
	const [activeTab, setActiveTab] = useState(TABS.ALL);
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState(tableData);
	// eslint-disable-next-line no-unused-vars
	const [editPanel, setEditPanel] = useState(false);
	// const { themeStatus } = useDarkMode();
	// eslint-disable-next-line no-unused-vars
	const [editItem, setEditItem] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['3']);
	function handleRemove(id) {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	}
	function handleEdit(id) {
		const newData = data.filter((item) => item.id === id);
		setEditItem(newData[0]);
	}

	return (
		<PageWrapper>
			<MenuEditorSubHeader />
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xxl-9 col-xl-12'>
						<Card styles={{ borderRadius: '20px' }}>
							<CardBody>
								<div className='d-flex g-3 justify-content-between align-items-center'>
									<Breadcrumb list={breadCrumb} isToHome={null} divider={null} />
									<ButtonGroup>
										{Object.keys(TABS).map((key) => (
											<Button
												isLight
												icon
												key={key}
												color='success'
												className='mx-2 px-2'
												onClick={() => setActiveTab(TABS[key])}>
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
											to='../menu_editor/theme_settings'>
											Menu Theme Settings
										</Button>
									</ButtonGroup>
								</div>
								<div className='row mt-4'>
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
				</div>
			</Page>
		</PageWrapper>
	);
};

export default MenuEditor;
