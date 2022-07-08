/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable global-require */
import React from 'react';
import CustomGridView from '../../components/custom/customGridView/CustomGridView';

const Test = () => {
	const topData = [
		{
			id: 1,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 2,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 3,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 4,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 5,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
		{
			id: 6,
			name: 'Hot Chocolate',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/hot-chocolate.jpg`),
		},
	];

	const midimage = require(`../../assets/img/custom/dessert.jpg`);

	const bottemData = [
		{
			id: 1,
			name: 'Desserts',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/desserts-1.jpg`),
		},
		{
			id: 1,
			name: 'Desserts',
			description: 'Hot chocolate with marshmallows and whipped cream',
			image: require(`../../assets/img/custom/desserts-2.jpg`),
		},
	];

	return (
		<div>
			<CustomGridView top={topData} mid={midimage} bottem={bottemData} />;
		</div>
	);
};

export default Test;
