/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../../../components/bootstrap/forms/Input';
import Label from '../../../components/bootstrap/forms/Label';
import Button from '../../../components/bootstrap/Button';
import Select from '../../../components/bootstrap/forms/Select';

const AddCombos = ({ comboList, removeVal }) => {
	return (
		<div className='row mt-3' key={comboList.id}>
			<Label className='text-secondary'>Option Set</Label>
			<div className='col-5 mb-2 px-1'>
				<Select id='op' placeholder='Select' />
			</div>
			<div className='col-2 mb-2 px-1'>
				<Input placeholder='0 Min' />
			</div>
			<div className='col-2 mb-2 px-1'>
				<Input placeholder='0 Max' />
			</div>
			<div className='col-2 mb-2 px-1'>
				<Select id='no' placeholder='No' />
			</div>
			<div className='col-1 mb-2 ps-0'>
				<Button color='info' icon='RestoreFromTrash' onClick={removeVal}/>
			</div>
		</div>
	);
};

export default AddCombos;
