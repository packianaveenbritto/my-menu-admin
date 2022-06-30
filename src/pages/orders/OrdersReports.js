/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Nav, { NavItem } from '../../components/bootstrap/Nav';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../components/PaginationButtons';
import { dashboardMenu } from '../../menu';
import Button from '../../components/bootstrap/Button';
import CommonAvatarTeam from '../../components/common/CommonAvatarTeam';
import Page from '../../layout/Page/Page';
import Card, { CardBody } from '../../components/bootstrap/Card'; // CardSubTitle, // CardTitle, // CardLabel, // CardHeader, // CardFooterRight, // CardFooterLeft, // CardFooter, // CardBody, // CardActions,
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Select from '../../components/bootstrap/forms/Select';
import Label from '../../components/bootstrap/forms/Label';
import useDarkMode from '../../hooks/useDarkMode';
import useSortableData from '../../hooks/useSortableData';
import data from '../../common/data/dummyCustomerData';
import PAYMENTS from '../../common/data/enumPaymentMethod';
import { getColorNameWithIndex } from '../../common/data/enumColors';
import { getFirstLetter, priceFormat } from '../../helpers/helpers';
import Icon from '../../components/icon/Icon';

const OrdersReports = () => {
	const { darkModeStatus } = useDarkMode();
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['10']);
	const formik = useFormik({
		initialValues: {
			searchInput: '',
			payment: Object.keys(PAYMENTS).map((i) => PAYMENTS[i].name),
			minPrice: '',
			maxPrice: '',
		},
		// eslint-disable-next-line no-unused-vars
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
		},
	});
	const filteredData = data.filter(
		(f) =>
			// Name
			f.name.toLowerCase().includes(formik.values.searchInput.toLowerCase()) &&
			// Price
			(formik.values.minPrice === '' || f.balance > formik.values.minPrice) &&
			(formik.values.maxPrice === '' || f.balance < formik.values.maxPrice) &&
			// Payment Type
			formik.values.payment.includes(f.payout),
	);
	const { items, requestSort } = useSortableData(filteredData);

	return (
		<PageWrapper>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Orders Reports</span>
					<SubheaderSeparator />
					<Button color='success' tag='a' to={`../${dashboardMenu.orders.path}`}>
						Back To Orders
					</Button>
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
				<Card
					className='mh-50'
					style={{ backgroundColor: process.env.REACT_APP_INFO_COLOR }}>
					<CardBody>
						<div className='row'>
							<FormGroup className='col-sm-12 col-md-2'>
								<Label
									htmlFor='status'
									style={{
										color: `${
											darkModeStatus
												? process.env.REACT_APP_LIGHT_COLOR
												: process.env.REACT_APP_DARK_COLOR
										}`,
									}}>
									<strong>Status</strong>
								</Label>
								<Select id='status' ariaLabel='status' placeholder='--Status--' />
							</FormGroup>
							<FormGroup className='col-sm-12 col-md-2'>
								<Label
									htmlFor='filterChanel'
									style={{
										color: `${
											darkModeStatus
												? process.env.REACT_APP_LIGHT_COLOR
												: process.env.REACT_APP_DARK_COLOR
										}`,
									}}>
									<strong>Filter By Chanel</strong>
								</Label>
								<Select
									ariaLabel='filterChanel'
									id='filterChanel'
									placeholder='--Status--'
								/>
							</FormGroup>
							<FormGroup className='col-sm-12 col-md-2'>
								<Label
									htmlFor='filterPayment'
									style={{
										color: `${
											darkModeStatus
												? process.env.REACT_APP_LIGHT_COLOR
												: process.env.REACT_APP_DARK_COLOR
										}`,
									}}>
									<strong>Filter By Payment Mode</strong>
								</Label>
								<Select
									ariaLabel='filterPayment'
									id='filterPayment'
									placeholder='--Status--'
								/>
							</FormGroup>
							<FormGroup className='col-sm-12 col-md-2'>
								<Label
									htmlFor='filterPayment'
									style={{
										color: `${
											darkModeStatus
												? process.env.REACT_APP_LIGHT_COLOR
												: process.env.REACT_APP_DARK_COLOR
										}`,
									}}>
									<strong>Filter By Payment Mode</strong>
								</Label>
								<Select
									ariaLabel='filterPayment'
									id='filterPayment'
									placeholder='--Status--'
								/>
							</FormGroup>
							<div className='col-sm-12 col-lg-2 d-grid p-1 mt-4'>
								<Button color='dark' size='sm'>
									Search
								</Button>
							</div>
							<div className='col-sm-12 col-lg-2 d-grid p-1 mt-4'>
								<Button color='dark' size='sm'>
									Export
								</Button>
							</div>
						</div>
						<br />
						<div className='row g-4 align-items-center'>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1 ms-3'>
										<div className='fw-bold mb-0'>Total Revenure</div>
										<div className='fw-bold mb-0'>0.00</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1 ms-3'>
										<div className='fw-bold mb-0'>Total Orders</div>
										<div className='fw-bold mb-0'>0.00</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Order Chanel</div>
										<div className='mb-0'>Tablet :0 | QR :0 | Online :0</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Total Revenure</div>
										<div className='fw-bold mb-0'>0.00</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Total Rejected</div>
										<div className='fw-bold mb-0'>0.00</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Total Refund</div>
										<div className='mb-0'>Count: 0 | Amount: 0.00</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Total Customer</div>
										<div className='fw-bold mb-0'>0.00</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Order Type</div>
										<div className='mb-0'>
											Dine in : 0 | Delevery : 0 | Pickup : 0
										</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Total Payments</div>
										<div className='mb-0'>COD : 0 | Online : 0</div>
									</div>
								</div>
							</div>
							<div className='col-sm-6 col-md-2'>
								<div
									className={classNames(
										'd-flex align-items-center rounded-2 p-3',
										{
											'bg-l10-warning': !darkModeStatus,
											'bg-lo25-warning': darkModeStatus,
										},
									)}>
									<div className='flex-grow-1'>
										<div className='fw-bold mb-0'>Net Total</div>
										<div className='fw-bold mb-0'>0.00</div>
									</div>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
				<div className='row'>
					<div className='col-sm-12 col-md-6 d-flex'>
						<label
							className='border-0 bg-transparent cursor-pointer me-0'
							htmlFor='searchInput'>
							<Icon icon='Search' size='2x' color='primary' />
						</label>
						<Input
							id='searchInput'
							type='search'
							className='border-0 shadow-none bg-transparent'
							placeholder='Search customer...'
							onChange={formik.handleChange}
							value={formik.values.searchInput}
						/>
					</div>
				</div>
				<Card stretch>
					<CardBody isScrollable className='table-responsive h-100'>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th
										onClick={() => requestSort('name')}
										className='cursor-pointer text-decoration-underline'>
										Customer{' '}
									</th>
									<th>Email</th>
									<th>Membership Date</th>
									<th
										onClick={() => requestSort('balance')}
										className='cursor-pointer text-decoration-underline'>
										Balance
									</th>
									<th
										onClick={() => requestSort('payout')}
										className='cursor-pointer text-decoration-underline'>
										Payout{' '}
									</th>
								</tr>
							</thead>
							<tbody>
								{dataPagination(items, currentPage, perPage).map((i) => (
									<tr key={i.id}>
										<td>
											<div className='d-flex align-items-center'>
												<div className='flex-shrink-0'>
													<div
														className='ratio ratio-1x1 me-3'
														style={{ width: 48 }}>
														<div
															className={`bg-l${
																darkModeStatus ? 'o25' : '25'
															}-${getColorNameWithIndex(
																i.id,
															)} text-${getColorNameWithIndex(
																i.id,
															)} rounded-2 d-flex align-items-center justify-content-center`}>
															<span className='fw-bold'>
																{getFirstLetter(i.name)}
															</span>
														</div>
													</div>
												</div>
												<div className='flex-grow-1'>
													<div className='fs-6 fw-bold'>{i.name}</div>
													<div className='text-muted'>
														<small>{i.type}</small>
													</div>
												</div>
											</div>
										</td>
										<td>
											<Button
												isLink
												color='light'
												className='text-lowercase'
												tag='a'
												href={`mailto:${i.email}`}>
												{i.email}
											</Button>
										</td>
										<td>
											<div>{i.membershipDate.format('ll')}</div>
											<div>
												<small className='text-muted'>
													{i.membershipDate.fromNow()}
												</small>
											</div>
										</td>
										<td>{priceFormat(i.balance)}</td>
										<td>{i.payout}</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardBody>
					<PaginationButtons
						data={filteredData}
						label='customers'
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
						perPage={perPage}
						setPerPage={setPerPage}
					/>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default OrdersReports;
