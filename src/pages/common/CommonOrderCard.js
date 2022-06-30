import React from 'react';
import moment from 'moment';
import Card, { CardLabel, CardTitle, CardSubTitle } from '../../components/bootstrap/Card'; // CardSubTitle, // CardTitle, // CardLabel, // CardHeader, // CardBody, // CardActions,

const CommonOrderCard = ({
	// eslint-disable-next-line react/prop-types
	id,
	// eslint-disable-next-line react/prop-types
	menuName,
	// eslint-disable-next-line react/prop-types
	date,
	// eslint-disable-next-line react/prop-types
	value,
}) => {
	return (
		<Card className='p-2' style={{ backgroundColor: process.env.REACT_APP_PRIMARY_COLOR }}>
			<div className='d-flex justify-content-between'>
				<CardLabel>
					<CardTitle>{`#${id}`}</CardTitle>
					<CardSubTitle>{`${menuName}, ${moment(date).fromNow()}`}</CardSubTitle>
				</CardLabel>
				<CardLabel>
					<strong>{`${value}`}</strong>
				</CardLabel>
			</div>
		</Card>
	);
};

export default CommonOrderCard;
