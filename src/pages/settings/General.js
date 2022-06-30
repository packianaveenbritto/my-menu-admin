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

const General = () => {
	return (
		<div className='row'>
			<div className='col-xl-4'>
				<div className='fs-4 fw-bold mb-3'>Languages</div>
				<FormGroup className='mb-3'>
					<Label>Default Languages</Label>
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
				</FormGroup>
				<FormGroup className='mb-3'>
					<Label>Other Languages</Label>
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
				</FormGroup>
				<div className='fs-4 fw-bold mb-3'>Feedback</div>
				<FormGroup className='mb-3'>
					<Label>Emails that will receive survey results</Label>
					<Input id='example' />
				</FormGroup>
				<FormGroup className='mb-3'>
					<div className='d-flex'>
						<div className='col-8 justify-content-start'>
							<span>Enable email notification for new orders</span>
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
					<Label>Emails to receive notification for new order</Label>
					<Input id='example' />
				</FormGroup>
				<div className='fs-4 fw-bold mb-3'>Logo</div>

				<div className='logo-drag-drop mb-3'>img</div>

				<FormGroup>
					<Button color='success'>Browse</Button>
				</FormGroup>
			</div>
			<div className='col-xl-5'>
				<FormGroup className='mb-3'>
					<div className='fs-4 fw-bold'>Currency</div>
					<div className='row'>
						<div className='col-6'>
							<Input className='mb-1' id='example' />
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='fs-4 fw-bold mb-3'>Taxes</div>
					<div className='row mb-3'>
						<div className='col-6 row'>
							<div className='col-8'>
								<Input id='example' />
							</div>
							<div className='col-4'>
								<Input id='example' />
							</div>
						</div>
						<div className='col-6 row align-items-center'>
							<div className='col-auto'>
								<Checks
									checked='radio value'
									id='example'
									label='Default'
									name='example'
									type='radio'
									value='radio value'
								/>
							</div>
							<div className='col-auto'>
								<Checks
									checked='radio value'
									id='example'
									label='Inclusive'
									name='example'
									type='radio'
									value='radio value'
								/>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-6 row'>
							<div className='col-8'>
								<Input id='example' />
							</div>
							<div className='col-4'>
								<Input id='example' />
							</div>
						</div>
						<div className='col-6 row align-items-center'>
							<div className='col-auto'>
								<Checks
									checked='radio value'
									id='example'
									label='Default'
									name='example2'
									type='radio'
									value='radio value'
								/>
							</div>
							<div className='col-auto'>
								<Checks
									checked='radio value'
									id='example'
									label='Inclusive'
									name='example2'
									type='radio'
									value='radio value'
								/>
							</div>
						</div>
					</div>
				</FormGroup>

				<div className='fs-4 fw-bold'>Discount</div>
				<FormGroup className='mb-3'>
					<div className='row'>
						<div className='col-8 row mb-3'>
							<div className='col-5'>
								<Input id='example' />
							</div>
							<div className='col-5'>
								<Input id='example' />
							</div>
							<div className='col-2'>
								<Input id='example' />
							</div>
						</div>
						<div className='col-8 row'>
							<div className='col-6'>
								<Checks
									checked='radio value'
									id='example'
									label='Percentage Discount'
									name='example3'
									type='radio'
									value='radio value'
								/>
							</div>
							<div className='col-6'>
								<Checks
									checked='radio value'
									id='example'
									label='Amount Discount'
									name='example3'
									type='radio'
									value='radio value'
								/>
							</div>
						</div>
					</div>
				</FormGroup>

				<FormGroup className='mb-3'>
					<div className='row'>
						<div className='col-8 row mb-3'>
							<div className='col-5'>
								<Input id='example' />
							</div>
							<div className='col-5'>
								<Input id='example' />
							</div>
							<div className='col-2'>
								<Input id='example' />
							</div>
						</div>
						<div className='col-8 row'>
							<div className='col-6'>
								<Checks
									checked='radio value'
									id='example'
									label='Percentage Discount'
									name='example3'
									type='radio'
									value='radio value'
								/>
							</div>
							<div className='col-6'>
								<Checks
									checked='radio value'
									id='example'
									label='Amount Discount'
									name='example3'
									type='radio'
									value='radio value'
								/>
							</div>
						</div>
					</div>
				</FormGroup>

				<div className='mb-3 fs-4 fw-bold'>Social Profiles</div>
				<FormGroup className='mb-4'>
					<div className='mb-3 col-6'>
						<Label>Facebook</Label>
						<Input className='mb-3' id='example' />

						<Label>Instagram</Label>
						<Input className='mb-3' id='example' />

						<Label>Twitter</Label>
						<Input className='mb-3' id='example' />
					</div>
				</FormGroup>
				<FormGroup>
					<Button color='success' size='md'>
						Save
					</Button>
				</FormGroup>
			</div>
		</div>
	);
};

export default General;
