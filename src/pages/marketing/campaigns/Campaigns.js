import React, { useState } from 'react';
import { useFormik } from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Nav, { NavItem } from '../../../components/bootstrap/Nav';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	// SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import Checks from '../../../components/bootstrap/forms/Checks';
import CommonAvatarTeam from '../../../components/common/CommonAvatarTeam';
import Card, { CardBody } from '../../../components/bootstrap/Card';
// import useDarkMode from '../../../hooks/useDarkMode';
import useSelectTable from '../../../hooks/useSelectTable';
import useSortableData from '../../../hooks/useSortableData';
import data from '../../../common/data/dummyCustomerData';
import PAYMENTS from '../../../common/data/enumPaymentMethod';
// import { getColorNameWithIndex } from '../../../common/data/enumColors';
// import { getFirstLetter } from '../../../helpers/helpers';
// import Icon from '../../components/icon/Icon';

const Campaigns = () => {
	// const { darkModeStatus } = useDarkMode();
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['4']);
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
	const onCurrentPageItems = dataPagination(items, currentPage, perPage);
	// eslint-disable-next-line no-unused-vars
    const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageItems);
    
	return (
		<PageWrapper>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Campaigns</span>
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
				<div className='row justify-content-end'>
					<dic className='col-2 d-grid'>
						<Button color='dark'>Create</Button>
					</dic>
				</div>
				<Card stretch>
					<CardBody isScrollable className='table-responsive h-100'>
						<table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th scope='col'>{SelectAllCheck}</th>
									<th
										onClick={() => requestSort('name')}
										className='cursor-pointer text-decoration-underline'>
										Name
									</th>
									<th>Campaigns Visibility</th>
									<th>Published</th>
									<th>Type</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{dataPagination(items, currentPage, perPage).map((i) => (
									<tr key={i.id}>
										<td>
											<Checks id={i.id.toString()} value={i.id} />
										</td>
										<td>
											<strong>{i.name}</strong>
										</td>
										<td>
											<Button color='primary me-2'>Pickup</Button>
											<Button disabled color='primary'>
												Delivery
											</Button>
										</td>
										<td>
											<Checks
												checked
												id='example'
												name='example'
												type='switch'
											/>
										</td>
										<td>
											<Button color='primary'>Delivery</Button>
										</td>
										<td>
											<Button color='dark me-2'>Edit</Button>
											<Button color='dark'>Duplicate</Button>
										</td>
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

export default Campaigns;
