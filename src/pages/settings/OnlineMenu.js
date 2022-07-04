import React from 'react';
import SubHeader from '../../layout/SubHeader/SubHeader';
import GeneralQr from '../../assets/img/custom/general-qr.svg';
import Button from '../../components/bootstrap/Button';
import Label from '../../components/bootstrap/forms/Label';
import Page from '../../layout/Page/Page';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Checks from '../../components/bootstrap/forms/Checks';
import Icon from '../../components/icon/Icon';
import Select from '../../components/bootstrap/forms/Select';
import { Options } from '../../components/bootstrap/Option';
import FormText from '../../components/bootstrap/forms/FormText';
import Input from '../../components/bootstrap/forms/Input';
import Textarea from '../../components/bootstrap/forms/Textarea';

const OnlineMenu = () => {
	return (
		<>
			<SubHeader>
				<div className='settings-online-menu-qr-card d-flex'>
					<div>
						<img width={100} height={100} src={GeneralQr} alt='' />
					</div>

					<Label color='primary'>https://order.mydigimenu.com/panadura</Label>

					<div>
						<Button color='primary'>Copy</Button>
					</div>
					<div>
						<Button color='primary'>Download</Button>
					</div>
				</div>
			</SubHeader>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xl-5'>
						<FormGroup className='mb-3'>
							<div className='d-flex justify-content-start'>
								<Checks className='fs-5' id='example' name='example' />
								<div className='fw-bold fs-4'>Delivery Menu</div>
								<div className='ml-10'>
									<Icon icon='CustomLorryIcon' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-5'>
							<div className='d-flex align-items-center'>
								<div className='col-6 justify-content-start'>
									<span className='fw-bold fs-5'>Select menu</span>
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

						<h4 className='mb-4 fw-bold'>Welcome page</h4>
						<FormGroup className='mb-5'>
							<div className='d-flex align-items-center'>
								<div className='col-6 justify-content-start'>
									<Label className='fs-5'>Welcome Text</Label>
									<FormText>Charecter is limited to 15</FormText>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
									<Button className='ml-2' color='success'>
										O
									</Button>
								</div>
							</div>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Menu options</h4>

						<div className='fw-bold fs-5 mb-3'>Section</div>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Display Section Name' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Display Section Description'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Display Section Note' id='example' name='example' />
							</div>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Item</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Enable Item Details Page'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Show Allergen Label' id='example' name='example' />
							</div>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Guest profile</h4>
						<FormGroup className='mb-3 custom-check-box'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable guest profile' id='example' name='example' />
							</div>
							<FormText>
								If enabled, a profile icon will be displayed and guest can be
								login/create an account in My Menu. You can use the profile
								information later for the marketing
							</FormText>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Advance options</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Show Favourite Button' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Display Language Button'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Display Info Button' id='example' name='example' />
							</div>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Feedback</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Display Feedback Button'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Use External Feedback' id='example' name='example' />
							</div>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Guest support</h4>
						<FormGroup className='mb-3 custom-check-box'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Chat Enabled' id='example' name='example' />
							</div>
							<FormText>
								Chat with your guest using our inbuilt chat functionality. if
								enabled your guest will be able to start a conversation with your
								staff.
							</FormText>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Special notes</h4>
						<FormText className='fs-6' id='test'>
							<FormText className='fs-6' id='test'>
								business can use special notes to convey a special message to the
								guest. if enabled, special note appear at the bottom of the menu
								page
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

						<h4 className='mb-4 fw-bold'>Ordering</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Accept orders' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Auto Accept Orders' id='example' name='example' />
							</div>
							<FormText>
								Enable auto accept order if you want your orders to be auto
								accepted. If notification service enabled, your guest will recive
								order status as Accepted.
							</FormText>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Working Hours</h4>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Sunday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Monday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Tuesday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Wednesday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Thureday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Friday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Saturday' id='example' name='example' />
								</div>
								<div className='col-4 '>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 '>
									<Label>Serving time range</Label>
								</div>
								<div className='col-4 '>
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
									<Label className='fs-5'>Serving time interval</Label>
								</div>
								<div className='d-flex col-8'>
									<Input type='time' id='example' />
									<Button color='success'>Frequency</Button>
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable ASAP' id='example' name='example' />
							</div>
							<FormText>
								If enabled, ASAP (As Soon As Possible) will be first selection for
								time interval
							</FormText>
						</FormGroup>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Enable Item Details Page'
									id='example'
									name='example'
								/>
							</div>
							<FormText className='mb-2'>
								If enabled, guest can make an order for the current day. This option
								can be used along with future ordering. For example, if you have a
								special requirement where you need altleast 1 day for preparing an
								order. In this case, you can disable ordering for today and then set
								the future order date starts at 1 day.
							</FormText>
							<FormText>
								If enabled, ASAP (As Soon As Possible) will be first selection for
								time interval
							</FormText>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Future ordering</h4>
						<FormGroup className='mb-3 custom-check-box'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable Future Order' id='example' name='example' />
							</div>
							<FormText>
								Enable future ordering allows your guest to place an pre-order for a
								future date.
							</FormText>
						</FormGroup>

						<FormGroup className='mb-3'>
							<div className='d-flex align-items-center'>
								<div className='col-6 justify-content-start'>
									<Label className='fs-5'>Start Future Dates After</Label>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
								</div>
							</div>
						</FormGroup>

						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Set Custom Duration' id='example' name='example' />
							</div>
						</FormGroup>

						<FormGroup className='mb-3'>
							<div className='d-flex align-items-center'>
								<div className='col-6'>
									<Label className='fs-5'>No of days allowed to pre-order</Label>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
								</div>
							</div>
						</FormGroup>

						<FormText id='' className='fw-bold fs-5'>
							Block Day
						</FormText>
						<FormText className='mb-3'>
							Enable future ordering allows your guest to place an pre-order for a
							future date.
						</FormText>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Payment Types</h4>
						<FormGroup className='mb-4'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Pay with Cash' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Pay with Online Payment'
									id='example'
									name='example'
								/>
							</div>
							<div className='custom-check-box'>
								<Checks label='Pay with Room Charge' id='example' name='example' />
							</div>
							<FormText className='mb-3'>
								For online payment, you can connect your payment gateway from our
								integration page. If nothing connected, My Menu Pay will be enabled
								as default.
							</FormText>
							<div className='custom-check-box'>
								<Checks
									label='Allow Payment with Cryptocurrency'
									id='example'
									name='example'
								/>
							</div>
							<FormText className='mb-3'>
								If enabled, My Menu collects the Crypto Currencies in our wallet and
								we transfer the equivalent amount in local currency once every
								month.
							</FormText>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Tip</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Tips Enabled' id='example' name='example' />
							</div>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Misc</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable item notes' id='example' name='example' />
							</div>
							<FormText className='mb-3'>
								If enabled, guest will be able to add an item level note while
								ordering
							</FormText>
						</FormGroup>

						<h4 className='mb-5 fw-bold'>
							Delivery area and Charge <Icon className='ml-5' icon='add' />
						</h4>

						<h4 className='mb-4 fw-bold'>Notification Service New</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable Notifications' id='example' name='example' />
							</div>
							<div className='d-flex align-items-center'>
								<div className='col-6'>
									<Label className='fs-5'>Platforms</Label>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
								</div>
							</div>
						</FormGroup>

						<Label className='mb-3'>Enable notification for order status change</Label>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Accepted' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Cancelled' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Rejected' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='In kitchen' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='En route' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Ready for pickup' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Delivered' id='example' name='example' />
							</div>
							<FormText className='mb-5'>
								If enabled, on each order status change, system will trigger an
								notification to the guest. Notification service is chargeable. You
								can check the pricing from here
							</FormText>
						</FormGroup>
						<div className='d-flex align-items-center mb-5 justify-content-center'>
							<Button color='secondary'>Save</Button>
						</div>
						<div className='border-1 border border-secondary p-4 mb-5'>
							<h4 className='mb-3 fw-bold'>Delivery area and Charge</h4>
							<FormGroup className='mb-3'>
								<div className='d-flex align-items-center'>
									<div className='col-6'>
										<Label className='fs-5'>Platforms</Label>
									</div>
									<div className='d-flex col-6 justify-content-end'>
										<Input id='example' />
									</div>
								</div>
							</FormGroup>
							<FormText>Show Social Profile Icons</FormText>
						</div>
						<div className='d-flex align-items-center  justify-content-center'>
							<Button color='primary'>Save</Button>
						</div>
					</div>
					<div className='col-xl-5 ms-5'>
						<FormGroup className='mb-3'>
							<div className='d-flex justify-content-start'>
								<Checks className='fs-5' id='example' name='example' />
								<div className='fw-bold fs-4'>Pickup Menu</div>
								<div className='ml-10'>
									<Icon icon='CustomLorryIcon' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-5'>
							<div className='d-flex align-items-center'>
								<div className='col-6 justify-content-start'>
									<span className='fw-bold fs-5'>Select menu</span>
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

						<h4 className='mb-4 fw-bold'>Welcome page</h4>
						<FormGroup className='mb-5'>
							<div className='d-flex align-items-center'>
								<div className='col-6 justify-content-start'>
									<Label className='fs-5'>Welcome Text</Label>
									<FormText>Charecter is limited to 15</FormText>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
									<Button className='ml-2' color='success'>
										O
									</Button>
								</div>
							</div>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Menu options</h4>

						<div className='fw-bold fs-5 mb-3'>Section</div>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Display Section Name' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Display Section Description'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Display Section Note' id='example' name='example' />
							</div>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Item</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Enable Item Details Page'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Show Allergen Label' id='example' name='example' />
							</div>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Guest profile</h4>
						<FormGroup className='mb-3 custom-check-box'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable guest profile' id='example' name='example' />
							</div>
							<FormText>
								If enabled, a profile icon will be displayed and guest can be
								login/create an account in My Menu. You can use the profile
								information later for the marketing
							</FormText>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Advance options</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Show Favourite Button' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Display Language Button'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Display Info Button' id='example' name='example' />
							</div>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Feedback</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Display Feedback Button'
									id='example'
									name='example'
								/>
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Use External Feedback' id='example' name='example' />
							</div>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Guest support</h4>
						<FormGroup className='mb-3 custom-check-box'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Chat Enabled' id='example' name='example' />
							</div>
							<FormText>
								Chat with your guest using our inbuilt chat functionality. if
								enabled your guest will be able to start a conversation with your
								staff.
							</FormText>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Special notes</h4>
						<FormText className='fs-6' id='test'>
							<FormText className='fs-6' id='test'>
								business can use special notes to convey a special message to the
								guest. if enabled, special note appear at the bottom of the menu
								page
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

						<h4 className='mb-4 fw-bold'>Ordering</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Accept orders' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Auto Accept Orders' id='example' name='example' />
							</div>
							<FormText>
								Enable auto accept order if you want your orders to be auto
								accepted. If notification service enabled, your guest will recive
								order status as Accepted.
							</FormText>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Working Hours</h4>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Sunday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Monday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Tuesday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Wednesday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Thureday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Friday' id='example' name='example' />
								</div>
								<div className='col-4'>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 custom-check-box'>
									<Checks label='Saturday' id='example' name='example' />
								</div>
								<div className='col-4 '>
									<Input type='time' id='example' />
								</div>
								<div className='col-4 ml-2'>
									<Input type='time' id='example' />
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3 '>
							<div className='d-flex'>
								<div className='col-4 '>
									<Label>Serving time range</Label>
								</div>
								<div className='col-4 '>
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
									<Label className='fs-5'>Serving time interval</Label>
								</div>
								<div className='d-flex col-8'>
									<Input type='time' id='example' />
									<Button color='success'>Frequency</Button>
								</div>
							</div>
						</FormGroup>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable ASAP' id='example' name='example' />
							</div>
							<FormText>
								If enabled, ASAP (As Soon As Possible) will be first selection for
								time interval
							</FormText>
						</FormGroup>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Enable Item Details Page'
									id='example'
									name='example'
								/>
							</div>
							<FormText className='mb-2'>
								If enabled, guest can make an order for the current day. This option
								can be used along with future ordering. For example, if you have a
								special requirement where you need altleast 1 day for preparing an
								order. In this case, you can disable ordering for today and then set
								the future order date starts at 1 day.
							</FormText>
							<FormText>
								If enabled, ASAP (As Soon As Possible) will be first selection for
								time interval
							</FormText>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Future ordering</h4>
						<FormGroup className='mb-3 custom-check-box'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable Future Order' id='example' name='example' />
							</div>
							<FormText>
								Enable future ordering allows your guest to place an pre-order for a
								future date.
							</FormText>
						</FormGroup>

						<FormGroup className='mb-3'>
							<div className='d-flex align-items-center'>
								<div className='col-6 justify-content-start'>
									<Label className='fs-5'>Start Future Dates After</Label>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
								</div>
							</div>
						</FormGroup>

						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Set Custom Duration' id='example' name='example' />
							</div>
						</FormGroup>

						<FormGroup className='mb-3'>
							<div className='d-flex align-items-center'>
								<div className='col-6'>
									<Label className='fs-5'>No of days allowed to pre-order</Label>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
								</div>
							</div>
						</FormGroup>

						<FormText id='' className='fw-bold fs-5'>
							Block Day
						</FormText>
						<FormText className='mb-3'>
							Enable future ordering allows your guest to place an pre-order for a
							future date.
						</FormText>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Payment Types</h4>
						<FormGroup className='mb-4'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Pay with Cash' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks
									label='Pay with Online Payment'
									id='example'
									name='example'
								/>
							</div>
							<div className='custom-check-box'>
								<Checks label='Pay with Room Charge' id='example' name='example' />
							</div>
							<FormText className='mb-3'>
								For online payment, you can connect your payment gateway from our
								integration page. If nothing connected, My Menu Pay will be enabled
								as default.
							</FormText>
							<div className='custom-check-box'>
								<Checks
									label='Allow Payment with Cryptocurrency'
									id='example'
									name='example'
								/>
							</div>
							<FormText className='mb-3'>
								If enabled, My Menu collects the Crypto Currencies in our wallet and
								we transfer the equivalent amount in local currency once every
								month.
							</FormText>
						</FormGroup>

						<h4 className='mb-4 fw-bold'>Tip</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Tips Enabled' id='example' name='example' />
							</div>
						</FormGroup>

						<div className='section-seperate' />

						<h4 className='mb-4 fw-bold'>Misc</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable item notes' id='example' name='example' />
							</div>
							<FormText className='mb-3'>
								If enabled, guest will be able to add an item level note while
								ordering
							</FormText>
						</FormGroup>

						<h4 className='mb-5 fw-bold'>
							Delivery area and Charge <Icon className='ml-5' icon='add' />
						</h4>

						<h4 className='mb-4 fw-bold'>Notification Service New</h4>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Enable Notifications' id='example' name='example' />
							</div>
							<div className='d-flex align-items-center'>
								<div className='col-6'>
									<Label className='fs-5'>Platforms</Label>
								</div>
								<div className='d-flex col-6 justify-content-end'>
									<Input id='example' />
								</div>
							</div>
						</FormGroup>

						<Label className='mb-3'>Enable notification for order status change</Label>
						<FormGroup className='mb-3'>
							<div className='mb-3 custom-check-box'>
								<Checks label='Accepted' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Cancelled' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Rejected' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='In kitchen' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='En route' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Ready for pickup' id='example' name='example' />
							</div>
							<div className='mb-3 custom-check-box'>
								<Checks label='Delivered' id='example' name='example' />
							</div>
							<FormText className='mb-5'>
								If enabled, on each order status change, system will trigger an
								notification to the guest. Notification service is chargeable. You
								can check the pricing from here
							</FormText>
						</FormGroup>
						<div className='d-flex align-items-center mb-5 justify-content-center'>
							<Button color='secondary'>Save</Button>
						</div>
					</div>
				</div>
			</Page>
		</>
	);
};

export default OnlineMenu;
