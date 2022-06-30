/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React from 'react';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Label from '../../components/bootstrap/forms/Label';
// eslint-disable-next-line no-unused-vars
import Select from '../../components/bootstrap/forms/Select';
// eslint-disable-next-line no-unused-vars
import { Options } from '../../components/bootstrap/Option';
import Checks from '../../components/bootstrap/forms/Checks';
import Button from '../../components/bootstrap/Button';
import Icon from '../../components/icon/Icon';
import logo1 from '../../assets/img/custom/my-menu-logo1.svg';

const TabletMenu = () => {
	return (
		<div className='row'>
			<div className='col-xl-4'>
				<div className='fs-4 fw-bold mb-3'>Languages</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display language button</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Menu Button</div>
				<FormGroup className='mb-3'>
					<Label>Text of the Menu Button</Label>
					<div className='d-flex'>
						<div className='col-10 justify-content-start'>
							<Input id='example' />
						</div>
						<div className='d-flex col-2 justify-content-end'>
							<Button color='success'>O</Button>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Information</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display language button</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Video</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Auto Play Video</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Logo</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display Logo</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Feedback</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display Feedback Button</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='d-flex'>
					<div className='d-flex align-items-center'>
						<div className='custom-email-card'>
							<span className='fs-4 fc-white'>sales.global@mydigimenu.com</span>
						</div>
					</div>
					<div className='d-flex align-items-center'>
						<Icon icon='CustomCut' />
					</div>
				</div>
			</div>
			<div className='col-xl-4'>
				<div className='fs-4 fw-bold mb-3'>Order</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Order Enabled</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display Add Button on Grid Item</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Order Submit Enabled</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Currency</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display Prices</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display Currency</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Display Currency Fraction</span>
						</div>
						<div className='d-flex col-4 justify-content-end'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>My Menu Logo</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<img src={logo1} alt='' />
						</div>
						<div className='d-flex col-4 justify-content-end align-items-center'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<img src={logo1} alt='' />
						</div>
						<div className='d-flex col-4 justify-content-end align-items-center'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<img src={logo1} alt='' />
						</div>
						<div className='d-flex col-4 justify-content-end align-items-center'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<img src={logo1} alt='' />
						</div>
						<div className='d-flex col-4 justify-content-end align-items-center'>
							<Checks
								checked
								id='example'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>
				<div className='d-flex justify-content-end'>
					<Button color='success' size='md'>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TabletMenu;
