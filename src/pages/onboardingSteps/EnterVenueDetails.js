import React, { useState } from 'react';
import Alert from '../../components/bootstrap/Alert';
import Button from '../../components/bootstrap/Button';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Label from '../../components/bootstrap/forms/Label';

const EnterVenueDetails = () => {
	const [showAlert, setShowAlert] = useState(false);
	return (
		<div
			style={{
				width: '50%',
			}}>
			{showAlert && (
				<div
					style={{
						width: '170%',
					}}
					className='d-flex justify-content-end'>
					<Alert className='custom-alert'>
						<span>
							Venue details successfully added. Thank you. Do you want to create menu?
						</span>
						<div className='d-flex mt-3 align-items-center'>
							<Button
								style={{
									background: '#AE9C67',
									border: 'none',
									color: '#FFFFFF',
									width: '50px',
									height: '34px',
									fontSize: '16px',
									borderRadius: '9px',
								}}
								onClick={() => {
									setShowAlert(false);
								}}>
								Ok
							</Button>
							<div className='ms-5'>
								<span style={{ color: '#AE9C67' }}>Skip, I will do later</span>
							</div>
						</div>
					</Alert>
				</div>
			)}

			<div className='mt-4' style={{ textAlign: 'center' }}>
				<p className='fs-1 fw-bold'>ENTER VENUE DETAILS</p>
			</div>
			<div className='mt-5'>
				<FormGroup className='mb-3'>
					<Label>Venue Name</Label>
					<Input id='venueName' />
				</FormGroup>
				<div className='row'>
					<div className='col-md-6'>
						<FormGroup className='mb-3'>
							<Label>Language</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
					<div className='col-md-6'>
						<FormGroup className='mb-3'>
							<Label>Venue Sells Alcohol</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
				</div>
				<FormGroup className='mb-3'>
					<Label>Address</Label>
					<Input id='venueName' />
				</FormGroup>
				<div className='row'>
					<div className='col-md-5'>
						<FormGroup className='mb-3'>
							<Label>City</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
					<div className='col-md-7'>
						<FormGroup className='mb-3'>
							<Label>State</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-5'>
						<FormGroup className='mb-3'>
							<Label>Country</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
					<div className='col-md-7'>
						<FormGroup className='mb-3'>
							<Label>Timezone</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
				</div>
				<FormGroup className='mb-3'>
					<Label>Email</Label>
					<Input id='venueName' />
				</FormGroup>
				<div className='row'>
					<div className='col-md-7'>
						<FormGroup className='mb-3'>
							<Label>Website</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
					<div className='col-md-5'>
						<FormGroup className='mb-3'>
							<Label>Phone</Label>
							<Input id='venueName' />
						</FormGroup>
					</div>
				</div>
			</div>
			<div className='mt-4' style={{ textAlign: 'right' }}>
				<Button
					style={{
						background: '#D1C49F',
						border: 'none',
						color: '#FFFFFF',
						width: '124px',
						fontSize: '16px',
					}}
					onClick={() => {
						setShowAlert(true);
					}}>
					Add
				</Button>
			</div>
		</div>
	);
};

export default EnterVenueDetails;
