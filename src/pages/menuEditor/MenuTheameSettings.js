/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import Card, { CardBody } from '../../components/bootstrap/Card';
import Accordion, { AccordionItem } from '../../components/bootstrap/Accordion';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import MenuEditorSubHeader from './subHeader/MenuEditorSubHeader';
import { SubHeaderLeft, SubheaderSeparator } from '../../layout/SubHeader/SubHeader';
import Checks from '../../components/bootstrap/forms/Checks';
import Icon from '../../components/icon/Icon';
import Label from '../../components/bootstrap/forms/Label';
import PlaceholderImage from '../../components/extras/PlaceholderImage';

const MenuThemeSettings = () => {
	const TABS = {
		MENU1: 'QR',
		MENU2: 'Online',
		MENU3: 'App',
	};
	const [activeTab, setActiveTab] = useState(TABS.ALL);
	const { themeStatus } = useDarkMode();
	const [showImg, setShowImg] = useState(true);
	const [showImg1, setShowImg1] = useState(true);

	return (
		<PageWrapper>
			<MenuEditorSubHeader />
			<Page container='fluid'>
				<div className='row'>
					<div className='col-xxl-9 col-xl-12'>
						<Card styles={{ borderRadius: '20px' }}>
							<CardBody>
								<div className='d-flex g-3 justify-content-between align-items-center'>
									<SubHeaderLeft>
										<span className='h4 mb-0 fw-bold'>Menu Theme Settings</span>
										<SubheaderSeparator />
										<ButtonGroup>
											{Object.keys(TABS).map((key) => (
												<Button
													isLight
													icon
													key={key}
													color={
														activeTab === TABS[key]
															? 'success'
															: themeStatus === 'light'
															? 'success'
															: themeStatus
													}
													className=''
													onClick={() => setActiveTab(TABS[key])}>
													{TABS[key]}{' '}
												</Button>
											))}
										</ButtonGroup>
										<span> Sync Theme </span>
										<Checks checked id='example' name='example' type='switch' />
									</SubHeaderLeft>
									<Button
										isLight
										key='MTS'
										color='success'
										className='mx-2'
										tag='a'
										to='../menu_editor/items'>
										<span>
											<Icon icon='ArrowBackIosNew' />
										</span>
										&nbsp; Return to Menu Editor
									</Button>
								</div>
								<div className='row mt-4'>
									<div className='col-lg-6 col-sm-12'>
										<FormGroup id='name' label='Menu Theme Name'>
											<Input type='text' placeholder='Edit name here' />
										</FormGroup>
									</div>
									<div className='col-lg-6 col-sm-12'>
										<FormGroup id='description' label='Menu Theme Description'>
											<Input type='text' placeholder='Type here' />
										</FormGroup>
									</div>
								</div>
							</CardBody>
						</Card>
						<Accordion id='faq' shadow='sm'>
							<AccordionItem id='faq1' title='Home Page'>
								<div className='row'>
									<div className='col-sm-6 col-xm-12'>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Home Button Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Home Button Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Info Button Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Info Button Icon color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Feedback Button Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Feedback Button Icon color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Language Button Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Language Button Icon color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
									</div>
									<div className='mx-4 col-sm-3 col-xm-4'>
										<strong>Home Page Background Image</strong>
										<div className='row'>
											<div className='col-5'>
												<Label>Display Image</Label>
											</div>
											<div className='col-7'>
												<Checks
													checked={showImg}
													id='example'
													name='example'
													type='switch'
													onChange={() => {
														setShowImg(!showImg);
													}}
												/>
											</div>
										</div>
										{showImg ? (
											<div
												className='row'
												style={{
													border: `2px dashed ${process.env.REACT_APP_PRIMARY_COLOR}`,
												}}>
												<div className='col align-self-center'>
													<PlaceholderImage
														width={128}
														height={128}
														className='mx-auto d-block img-fluid rounded'
													/>
												</div>
												<div className='col-1 align-self-end'>
													<Icon icon='Trash' />
												</div>
											</div>
										) : (
											''
										)}
										<div className='text-primary my-2'>
											{' '}
											Image Recomended Size:{' '}
										</div>
										<div className='text-dark'>1080 px X 1920px</div>
									</div>
								</div>
							</AccordionItem>
							<AccordionItem id='faq2' title='Menu Page and Section Pages'>
								<div className='row'>
									<div className='col-sm-6 col-xm-12'>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Title Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Grid View Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Grid View Price Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Grid View Price Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>List View Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>List View Header Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>List View Price Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>List View Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Top Buttons Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Top Buttons Boarder Color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Top Buttons Text Color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Language Button Icon color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
									</div>
									<div className='mx-4 col-sm-3 col-xm-4'>
										<strong>Menu Page Background Image</strong>
										<div className='row'>
											<div className='col-5'>
												<Label>Display Image</Label>
											</div>
											<div className='col-7'>
												<Checks
													checked={showImg1}
													id='example'
													name='example'
													type='switch'
													onChange={() => {
														setShowImg1(!showImg1);
													}}
												/>
											</div>
										</div>
										{showImg1 ? (
											<div
												className='row'
												style={{
													border: `2px dashed ${process.env.REACT_APP_PRIMARY_COLOR}`,
												}}>
												<div className='col align-self-center'>
													<PlaceholderImage
														width={128}
														height={128}
														className='mx-auto d-block img-fluid rounded'
													/>
												</div>
												<div className='col-1 align-self-end'>
													<Icon icon='Trash' />
												</div>
											</div>
										) : (
											''
										)}
										<div className='text-primary my-2'>
											{' '}
											Image Recomended Size:{' '}
										</div>
										<div className='text-dark'>1080 px X 1920px</div>
									</div>
								</div>
							</AccordionItem>
							<AccordionItem id='faq3' title='Item Pages'>
								<div className='row'>
									<div className='col-sm-6 col-xm-12'>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Item Page Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Item Description color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Item Price Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
									</div>
									<div className='mx-4 col-sm-3 col-xm-4'>
										<Label>Preview</Label>
										<div
											className='row'
											style={{
												backgroundColor: 'purple',
											}}>
											<div className='col align-self-center'>
												<PlaceholderImage
													width={128}
													height={128}
													className='mx-auto d-block img-fluid rounded'
												/>
												<div
													className='text-light'
													style={{ textAlign: 'center' }}>
													1080 px X 1920 px
												</div>
												<div
													className='text-light'
													style={{ textAlign: 'center' }}>
													20 AED
												</div>
											</div>
										</div>
									</div>
								</div>
							</AccordionItem>
							<AccordionItem id='faq4' title='Pop-up Pages'>
								<div className='row'>
									<div className='col-sm-6 col-xm-12'>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Pop-up Background color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Pop-up Button color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Pop-up Button Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
										<div className='row justify-content-between mt-2'>
											<div className='col-sm-7 align-self-center'>
												<Label>Pop-up Text color</Label>
											</div>
											<div className='col-sm-1 align-self-center'>
												<Input type='color' />
											</div>
										</div>
									</div>
									<div className='mx-4 col-sm-3 col-xm-4'>
										<Label>Preview</Label>
										<div
											className='row'
											style={{
												backgroundColor: 'purple',
												minHeight: '10rem',
											}}>
											<div className='col align-self-center'>
												<div
													className='text-light'
													style={{ textAlign: 'center' }}>
													Sample Text
												</div>
											</div>
										</div>
									</div>
								</div>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default MenuThemeSettings;
