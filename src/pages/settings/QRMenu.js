/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-unused-vars */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React from 'react';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Label from '../../components/bootstrap/forms/Label';
import Select from '../../components/bootstrap/forms/Select';
import { Options } from '../../components/bootstrap/Option';
import Checks from '../../components/bootstrap/forms/Checks';
import Button from '../../components/bootstrap/Button';
import FormText from '../../components/bootstrap/forms/FormText';
import Textarea from '../../components/bootstrap/forms/Textarea';

const QRMenu = () => {
	return (
		<div className='row'>
			<div className='col-xl-6'>
				<div className='fs-4 fw-bold mb-3'>Welcome page</div>
				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-6 justify-content-start'>
							<span className='fw-bold fs-5'>Welcome Text</span>
							<FormText id='storybook--name__text'>
								Charecter is limited to 15
							</FormText>
						</div>
						<div className='d-flex col-6 justify-content-end'>
							<Input id='example' />
							<Button className='ml-2' color='success'>
								O
							</Button>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-6 justify-content-start'>
							<span className='fw-bold fs-5'>Menu Button Position</span>
						</div>
						<div className='d-flex col-6 justify-content-end'>
							<Select id='example'>
								<Options
									list={[
										{
											text: 'English',
											value: 1,
										},
										{
											text: 'Bengali - lorem',
											value: 2,
										},
										{
											text: 'Arabic - lorem',
											value: 3,
										},
									]}
								/>
							</Select>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-6 justify-content-start'>
							<span className='fw-bold fs-5'>Menu Button Shape</span>
						</div>
						<div className='d-flex col-6 justify-content-end'>
							<Select id='example'>
								<Options
									list={[
										{
											text: 'English',
											value: 1,
										},
										{
											text: 'Bengali - lorem',
											value: 2,
										},
										{
											text: 'Arabic - lorem',
											value: 3,
										},
									]}
								/>
							</Select>
						</div>
					</div>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Show Social Profile Icons</div>
					</div>
					<FormText className='fs-6' id='test'>
						Enabling this option will show your Facebook, Instagram,Twitter icons on the
						homescreen. Use this functionality if you want your guest to see your social
						accounts
					</FormText>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Menu</div>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-5 justify-content-start'>
							<span className='fw-bold fs-5'>Menu popup style</span>
							<FormText id='storybook--name__text'>
								Applicable if you have more than 1 menu
							</FormText>
						</div>
						<div className='d-flex col-2'>
							<Checks
								id='example'
								label='Grid'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
						<div className='d-flex col-2'>
							<Checks
								checked
								id='example'
								label='List'
								name='example'
								onBlur={() => {}}
								type='switch'
							/>
						</div>
					</div>
				</FormGroup>

				<div className='fw-bold fs-5 mb-3'>Section</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Display Section Name</div>
					</div>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Display Section Description</div>
					</div>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Display Section Note</div>
					</div>
				</FormGroup>

				<div className='fw-bold fs-5 mb-3'>Item</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Enable Item Details Page</div>
					</div>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Show Allergen Label</div>
					</div>
				</FormGroup>

				<div className='fw-bold fs-5 mb-3'>Basic settings</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Display Price</div>
					</div>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Display Currency</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Guest profile</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Guest profile</div>
					</div>
					<FormText className='fs-6' id='test'>
						If enabled, a profile icon will be displayed and guest can be login/create
						an account in My Menu. You can use the profile information later for the
						marketing
					</FormText>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Login required</div>
					</div>
					<FormText className='fs-6' id='test'>
						Enabling this option will promote the guest to login before they can view
						the menu
					</FormText>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Advance options</div>

				<div className='fw-bold fs-5 mb-3'>Buttons</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Show Favourite Button</div>
					</div>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Show Favourite Button</div>
					</div>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Display Info Button</div>
					</div>
				</FormGroup>

				<div className='section-seperate mb-3' />

				<div className='fw-bold fs-5 mb-3'>Feedback</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Display Feedback Button</div>
					</div>
					<div className='d-flex justify-content-start mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fs-5'>Use External Feedback</div>
					</div>
					<div className='d-flex align-items-center'>
						<div className='col-6 justify-content-start'>
							<div className='fs-5'>Link to External Feedback</div>
						</div>
						<div className='d-flex col-6 justify-content-end'>
							<Input id='example' />
						</div>
					</div>
				</FormGroup>

				<div className='section-seperate mb-3' />

				<div className='fs-4 fw-bold mb-3'>Guest support</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Chat Enabled</div>
					</div>
					<FormText className='fs-6' id='test'>
						Chat with your guest using our inbuilt chat functionality. if enabled your
						guest will be able to start a conversation with your staff.
					</FormText>
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Enable call waiter button</div>
					</div>
				</FormGroup>

				<div className='section-seperate mb-3' />

				<div className='fs-4 fw-bold mb-1'>Special notes</div>
				<FormText className='fs-6' id='test'>
					<FormText className='fs-6' id='test'>
						Chat with your guest using our inbuilt chat functionality. if enabled your
						guest will be able to start a conversation with your staff.
					</FormText>
				</FormText>

				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<Textarea id='example' />
						<Button className='ml-2' color='success'>
							O
						</Button>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Ordering</div>
				<FormGroup className='mb-3'>
					<div className='d-flex justify-content-start  mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Accept orders</div>
					</div>
					<div className='d-flex align-items-center  mb-3'>
						<div className='col-6 justify-content-start '>
							<span className=' fs-5'>Delivery Charge</span>
						</div>
						<div className='d-flex col-6 justify-content-end'>
							<Input id='example' />
						</div>
					</div>
					<div className='d-flex justify-content-start  mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Complete order only on payment selection</div>
					</div>

					<div className='d-flex justify-content-start  mb-3'>
						<Checks checked className='fs-5' id='example' name='example' />
						<div className='fw-bold fs-5'>Auto Accept Orders</div>
					</div>
					<FormText className='fs-6' id='test'>
						Enable auto accept order if you want your orders to be auto accepted. If
						notification service enabled, your guest will recive order status as
						Accepted.
					</FormText>
				</FormGroup>

				<div className='fs-4 fw-bold mb-3'>Ordering</div>
				<FormGroup className='mb-3 '>
					<div className='d-flex'>
						<div className='col-4 d-flex justify-content-start'>
							<Checks checked className='fs-5' id='example' name='example' />
							<div className='fs-5'>Sunday</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-4 d-flex justify-content-start'>
							<Checks checked className='fs-5' id='example' name='example' />
							<div className='fs-5'>Monday</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-4 d-flex justify-content-start'>
							<Checks checked className='fs-5' id='example' name='example' />
							<div className='fs-5'>Tuesday</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-4 d-flex justify-content-start'>
							<Checks checked className='fs-5' id='example' name='example' />
							<div className='fs-5'>Wednesday</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-4 d-flex justify-content-start'>
							<Checks checked className='fs-5' id='example' name='example' />
							<div className='fs-5'>Thureday</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-4 d-flex justify-content-start'>
							<Checks checked className='fs-5' id='example' name='example' />
							<div className='fs-5'>Friday</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-4 d-flex justify-content-start'>
							<Checks checked className='fs-5' id='example' name='example' />
							<div className='fs-5'>Saturday</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='d-flex align-items-center'>
						<div className='col-4 d-flex justify-content-start'>
							<div className='fs-5'>Serving time range</div>
						</div>
						<div className='col-4'>
							<Input type='time' id='example' />
						</div>
						<div className='col-4 ml-2'>
							<Input type='time' id='example' />
						</div>
					</div>
				</FormGroup>
			</div>
		</div>
	);
};

export default QRMenu;
