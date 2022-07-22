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
		name: 'Start from scratch',
		image: require(`../../assets/iconsAndImages/cradIcons/hotel.png`),
		description: 'Start from scratch. Start with an empty menu you can create own themeu',
	},
	{
		id: 2,
		name: 'Start from template',
		image: require(`../../assets/iconsAndImages/cradIcons/hotel.png`),
		description: 'SStart from template. Start with pre-defined template',
	},
];
const HowSetupMenu = () => {
	// eslint-disable-next-line no-unused-vars
	const { themeStatus, darkModeStatus } = useDarkMode();
	const [selectedCard, setSelectedCard] = React.useState();
	const [selected, setSelected] = React.useState(false);
	return (
		<>
			<div className='mt-3' style={{ textAlign: 'center' }}>
				<p className='fs-2 fw-bold'>HOW WOULD YOU LIKE TO SETUP YOUR MENU</p>
				<p className='fs-6'>
				let's setup your beautiful menu. remember you can manage it anytime.
				</p>
			</div>
			<div className='col-12'>
				<div className='row mt-3 d-flex justify-content-center'>
					{cardData.map((data) => {
						return (
							<div className='col-md-4 d-flex flex-column align-items-center'>
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
								<div
									style={{ width: '265px' }}
									className='mt-4 text-align-center p-3'>
									<p className='text-center'>{data.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default HowSetupMenu;
