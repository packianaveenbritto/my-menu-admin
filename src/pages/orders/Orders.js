/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';
import Nav, { NavItem } from '../../components/bootstrap/Nav';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import Input from '../../components/bootstrap/forms/Input';
// import Popovers from '../../components/bootstrap/Popovers';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Label from '../../components/bootstrap/forms/Label';
// import Textarea from '../../components/bootstrap/forms/Textarea';
import Card, {
	// CardActions,
	CardBody,
	// CardFooter,
	// CardFooterLeft,
	// CardFooterRight,
	CardHeader,
	CardLabel,
	CardTitle,
	// CardSubTitle,
} from '../../components/bootstrap/Card';
import CommonAvatarTeam from '../../components/common/CommonAvatarTeam';
import CommonOrderCard from '../common/CommonOrderCard';
import orders from '../../common/data/ordersData';

const Orders = () => {
	const TABS = {
		ALL: 'All',
		NEW: 'New',
		ACCEPTED: 'Accepted',
		EN_ROUTE: 'EN Route',
		FUTURE_ORDER: 'Future Order',
	};
	const [activeTab, setActiveTab] = useState(TABS.ALL);
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState(orders);
	// eslint-disable-next-line no-unused-vars
	const { themeStatus } = useDarkMode();
	return (
		<PageWrapper>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Orders</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								icon
								key={key}
								color={activeTab === TABS[key] ? 'info' : 'success'}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
					<SubheaderSeparator />
					<Button color='success'>Reports</Button>
				</SubHeaderLeft>

				<SubHeaderRight>
					<Nav>
						<NavItem>
							<a href='#help'>Help</a>
						</NavItem>
						<NavItem>
							<a href='#update'>Update</a>
						</NavItem>
						<NavItem>
							<a href='#account'>Account</a>
						</NavItem>
					</Nav>
					<CommonAvatarTeam>Switch Account</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-sm-12 col-md-3'>
						<Card className='mh-100'>
							<CardHeader>
								<CardLabel>
									<CardTitle>Search Order</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<Input type='text' id='search_orders' placeholder='Order #' />
								<br />
								<div>
									{data.map((item) => (
										<CommonOrderCard
											key={item.id}
											id={item.id}
											menuName={item.menuName}
											date={item.date}
											value={item.value}
										/>
									))}
								</div>
							</CardBody>

							<div className='row p-3'>
								<div className='col-12 d-grid'>
									<Button color='dark' rounded={3}>
										Refresh
									</Button>
								</div>
							</div>
						</Card>
					</div>
					<div className='col-sm-12 col-md-6'>
						<CardLabel iconColor='primary' className='p-4'>
							<CardTitle tag='h1' className='h1 '>
								ORDER DETAILS
								<small> #123</small>
							</CardTitle>
						</CardLabel>
						<div className='row g-4'>
							<FormGroup className='col-sm-12 col-md-6' id='Venue' label='Venue'>
								<Input />
							</FormGroup>
							<FormGroup className='col-sm-12 col-md-6' id='Channel' label='Channel'>
								<Input />
							</FormGroup>
						</div>
						<div className='row g-4'>
							<FormGroup
								className='col-sm-12 col-md-6'
								id='orderType'
								label='Order Type'>
								<Input />
							</FormGroup>
							<FormGroup className='col-sm-12 col-md-6' id='table' label='Table'>
								<Input />
							</FormGroup>
						</div>
						<div className='row g-4'>
							<FormGroup className='col-sm-12 col-md-6' id='order' label='Order #'>
								<Input />
							</FormGroup>
							<FormGroup className='col-sm-12 col-md-6' id='payment' label='Payment'>
								<Input />
							</FormGroup>
						</div>
						<div className='row g-4'>
							<FormGroup
								className='col-sm-12 col-md-6'
								id='sentTime'
								label='Sent Time'>
								<Input />
							</FormGroup>
							<FormGroup
								className='col-sm-12 col-md-6'
								id='deleveryAt'
								label='Delevery At'>
								<Input />
							</FormGroup>
						</div>
						<div className='row g-4'>
							<FormGroup className='col-sm-12 col-md-6' id='name' label='Name'>
								<Input />
							</FormGroup>
							<FormGroup
								className='col-sm-12 col-md-6'
								id='paymentId'
								label='Payment Id'>
								<Input />
							</FormGroup>
						</div>
						<div className='row g-4'>
							<FormGroup
								className='col-sm-12 col-md-6'
								id='mobileNo'
								label='Mobile No'>
								<Input />
							</FormGroup>
							<FormGroup className='col-sm-12 col-md-6' id='email' label='Email'>
								<Input />
							</FormGroup>
						</div>
						<br />
						<div className='row g-4'>
							<FormGroup isFloating>
								<Input ariaDescribedby='storybook--name__text' id='notes' />
								<Label htmlFor='notes'>Notes</Label>
							</FormGroup>
						</div>
					</div>
					<div className='col-sm-12 col-md-3'>
						<div className='d-flex justify-content-end p-4'>
							<Button color='light' icon='Print' />
						</div>
						<div className='px-4'>
							<div className='d-flex justify-content-between'>
								<div>1 x Sample</div>
								<div> 123</div>
							</div>
							<div className='d-flex justify-content-between'>
								<div>1 x Sample</div>
								<div> 123</div>
							</div>
							<br />

							<div className='d-flex justify-content-between'>
								<div>&nbsp;&nbsp;&nbsp;&nbsp;Net Total:</div>
								<div> 123</div>
							</div>
							<div className='d-flex justify-content-between'>
								<div>&nbsp;&nbsp;&nbsp;&nbsp;VAT:</div>
								<div> 123</div>
							</div>
							<div className='d-flex justify-content-between'>
								<div>&nbsp;&nbsp;&nbsp;&nbsp;Sub Total:</div>
								<div> 123</div>
							</div>
							<div className='d-flex justify-content-between'>
								<div>&nbsp;&nbsp;&nbsp;&nbsp;Tips:</div>
								<div> 123</div>
							</div>
							<div className='d-flex justify-content-between'>
								<div>&nbsp;&nbsp;&nbsp;&nbsp;Delivery Charge:</div>
								<div> 123</div>
							</div>
							<div className='d-flex justify-content-between'>
								<div>
									<strong>&nbsp;&nbsp;&nbsp;&nbsp;Total:</strong>
								</div>
								<div>AED 123</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-6 p-2 d-grid g-2'>
								<Button color='dark'>Accept</Button>
							</div>
							<div className='col-6 p-2 d-grid g-2'>
								<Button color='primary'>Reject</Button>
							</div>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Orders;
