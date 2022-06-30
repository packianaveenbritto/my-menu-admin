/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React from 'react';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Label from '../../components/bootstrap/forms/Label';
import Select from '../../components/bootstrap/forms/Select';
import { Options } from '../../components/bootstrap/Option';
// eslint-disable-next-line no-unused-vars
import Checks from '../../components/bootstrap/forms/Checks';

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
									text: 'Eglish',
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
									text: 'Eglish',
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
			</div>
		</div>
	);
};

export default General;
