/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../../../components/bootstrap/forms/Input';
import Label from '../../../components/bootstrap/forms/Label';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Button from '../../../components/bootstrap/Button';

const ItemPrice = ({ itemPriceList, removeVal }) => {
	return (
		<div className='row' key={itemPriceList.id}>
			<Label className='text-secondary'>Price</Label>
			<div className='col-3 mb-2 px-1'>
				<InputGroup>
					<InputGroupText
						style={{
							backgroundColor: process.env.REACT_APP_SUCCESS2_COLOR,
						}}>
						AED
					</InputGroupText>
					<Input
						ariaDescribedby='button-addon1'
						ariaLabel='Example text with button addon'
						placeholder=''
					/>
				</InputGroup>
			</div>
			<div className='col-5 mb-2 px-1'>
				<Input placeholder='Description' />
			</div>
			<div className='col-3 mb-2 px-1'>
				<InputGroup>
					<Input ariaLabel='cal' placeholder='' />
					<InputGroupText
						style={{
							backgroundColor: process.env.REACT_APP_SUCCESS2_COLOR,
						}}>
						CAL
					</InputGroupText>
				</InputGroup>
			</div>
			<div className='col-1 mb-2 ps-0'>
				<Button color='info' icon='RestoreFromTrash' onClick={removeVal} />
			</div>
		</div>
	);
};

export default ItemPrice;
