/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable global-require */
import React from 'react';
import Card, { CardBody, CardFooter } from '../../components/bootstrap/Card';
import ico from '../../assets/iconsAndImages/cradIcons/select.png';
import Button from '../../components/bootstrap/Button';
import useDarkMode from '../../hooks/useDarkMode';

const cardData = [
	{
		id: 1,
		name: 'Hotel',
		image: require(`../../assets/iconsAndImages/cradIcons/hotel.png`),
	},
	{
		id: 2,
		name: 'Villa',
		image: require(`../../assets/iconsAndImages/cradIcons/Villa.png`),
	},
	{
		id: 3,
		name: 'Café',
		image: require(`../../assets/iconsAndImages/cradIcons/Café.png`),
	},
	{
		id: 4,
		name: 'Casual Dining',
		image: require(`../../assets/iconsAndImages/cradIcons/CasualDining.png`),
	},
	{
		id: 5,
		name: 'Coffee Shop',
		image: require(`../../assets/iconsAndImages/cradIcons/CoffeeShop.png`),
	},
	{
		id: 6,
		name: 'Drive-Thru',
		image: require(`../../assets/iconsAndImages/cradIcons/Drive-Thru.png`),
	},
	{
		id: 7,
		name: 'Fast Casual',
		image: require(`../../assets/iconsAndImages/cradIcons/FastCasual.png`),
	},
	{
		id: 8,
		name: 'Fast Food',
		image: require(`../../assets/iconsAndImages/cradIcons/FastFood.png`),
	},
	{
		id: 9,
		name: 'Bistro',
		image: require(`../../assets/iconsAndImages/cradIcons/Bistro.png`),
	},
	{
		id: 10,
		name: 'Buffet',
		image: require(`../../assets/iconsAndImages/cradIcons/Buffet.png`),
	},
	{
		id: 11,
		name: 'Lounge',
		image: require(`../../assets/iconsAndImages/cradIcons/Lounge.png`),
	},
	{
		id: 12,
		name: 'Pub',
		image: require(`../../assets/iconsAndImages/cradIcons/Pub.png`),
	},
	{
		id: 13,
		name: 'Sports Bar',
		image: require(`../../assets/iconsAndImages/cradIcons/SportsBar.png`),
	},
	{
		id: 14,
		name: 'Fine Dining',
		image: require(`../../assets/iconsAndImages/cradIcons/FineDining.png`),
	},
	{
		id: 15,
		name: 'Food Truck',
		image: require(`../../assets/iconsAndImages/cradIcons/FoodTruck.png`),
	},
];
const AddVenueOne = () => {
	// eslint-disable-next-line no-unused-vars
	const { themeStatus, darkModeStatus } = useDarkMode();
	const [selectedCard, setSelectedCard] = React.useState();
	const [selected, setSelected] = React.useState(false);
	return (
		<>
			<div className='mt-3' style={{ textAlign: 'center' }}>
				<p className='fs-2 fw-bold'>ADD VENUE</p>
				<p className='fs-6'>
					Add as many types of venues you have within the main property or the company
				</p>
			</div>
			<div className='col-12'>
				<div className='row mt-3 d-flex justify-content-center'>
					{cardData.map((data) => {
						return (
							<div className='col-auto d-flex justify-content-center'>
								<Card
									onClick={() => {
										setSelectedCard(data.name);
										setSelected(selectedCard !== data.name ? true : !selected);
									}}
									className={`onboarding-menu-card ${
										selected &&
										selectedCard === data.name &&
										'onboarding-menu-card-select'
									}`}>
									<CardBody>
										<div className='d-flex align-items-center justify-content-center'>
											<img
												src={data.image}
												alt=''
												className='mx-auto d-block img-fluid mt-5'
											/>
											{selected && selectedCard === data.name && (
												<img
													src={ico}
													alt=''
													className='mx-auto d-block img-fluid mt-5'
													style={{ position: 'absolute' }}
												/>
											)}
										</div>
									</CardBody>
									<CardFooter
										id='venueCardFooter'
										className={`shadow-3d-container ${
											selected &&
											selectedCard === data.name &&
											'onboarding-menu-card-select'
										}`}>
										<Button
											id='cardButton'
											key={data.id}
											style={
												selected && selectedCard === data.name
													? { background: '#D1C49F', border: 'none' }
													: { background: '#232323', border: 'none' }
											}
											color='primary'
											className={`w-100 mb-4 shadow-3d-up-hover shadow-3d-${
												darkModeStatus ? 'success' : 'dark'
											}`}
											size='lg'
											onClick={() => {
												setSelectedCard(data.name);
												setSelected(!selected);
											}}>
											{data.name}
										</Button>
									</CardFooter>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default AddVenueOne;
