import React, { useState } from 'react';
import CustomWizard, { CustomWizardItem } from '../../components/custom/CustomWizard';
import Page from '../../layout/Page/Page';
import useDarkMode from '../../hooks/useDarkMode';
import AddVenueOne from './AddVenueOne';
import EnterVenueDetails from './EnterVenueDetails';
import HowSetupMenu from './HowSetupMenu';
import Button from '../../components/bootstrap/Button';

const OnboardingSteps = () => {
	const STEPS = {
		step1: 'Select venue type',
		step2: 'Enter venue details',
		step3: 'Choose dashboard or menu creation',
	};

	const [activeTab, setActiveTab] = useState(1);
	// eslint-disable-next-line no-unused-vars
	const { themeStatus, darkModeStatus } = useDarkMode();

	return (
		<Page container='fluid'>
			<div className='row'>
				<div className='col-md-1'>
					<Button>o</Button>
				</div>

				<div className='col-10 d-flex flex-column align-items-center'>
					<div className='mt-3' style={{ width: '60%' }}>
						<CustomWizard
							isHeader // true || false || 'withButton'
							color='primary' // 'primary' || 'secondary' || 'success' || 'info' || 'warning' || 'danger' || 'light' || 'dark'
							stretch // false || true || 'semi'
							onClick={(index) => {
								setActiveTab(index);
							}}>
							{Object.keys(STEPS).map((key) => (
								<CustomWizardItem key={key} id={key} title={STEPS[key]} />
							))}
						</CustomWizard>
					</div>
					{activeTab === 1 && <AddVenueOne />}
					{activeTab === 2 && <EnterVenueDetails />}
					{activeTab === 3 && <HowSetupMenu />}
				</div>

				<div className='col-1'>o</div>
			</div>
		</Page>
	);
};

export default OnboardingSteps;
