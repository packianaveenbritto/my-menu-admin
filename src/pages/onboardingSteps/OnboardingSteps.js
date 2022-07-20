// import React from 'react';

// const OnboardingSteps = () => {
// 	return <div>OnboardingSteps</div>;
// };

// export default OnboardingSteps;
import React from 'react';
import CustomWizard, { CustomWizardItem } from '../../components/custom/CustomWizard';
import Page from '../../layout/Page/Page';
import useDarkMode from '../../hooks/useDarkMode';
import AddVenueOne from './AddVenueOne';

const OnboardingSteps = () => {
	// eslint-disable-next-line no-unused-vars
	const { themeStatus, darkModeStatus } = useDarkMode();
	const STEPS = {
		step1: 'Select venue type',
		step2: 'Enter venue details',
		step3: 'Choose dashboard or menu creation',
	};
	return (
		<Page container='fluid'>
			<div className='row'>
				<div className='col-1'>o</div>

				<div className='col-10 d-flex flex-column align-items-center'>
					<div className='mt-3' style={{ width: '60%' }}>
						<CustomWizard
							isHeader // true || false || 'withButton'
							color='primary' // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
							stretch // false || true || 'semi'
							onSubmit={() => {
								console.log('test');
							}}>
							{Object.keys(STEPS).map((key) => (
								<CustomWizardItem key={key} id={key} title={STEPS[key]} />
							))}
						</CustomWizard>
					</div>
					<AddVenueOne />
				</div>

				<div className='col-1'>o</div>
			</div>
		</Page>
	);
};

export default OnboardingSteps;
