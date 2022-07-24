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

	const isNextButton = () => {
		if (activeTab === 1 || activeTab === 2) {
			return true;
		}
		return false;
	};

	return (
		<Page container='fluid'>
			<div className='d-flex justify-content-center'>
				<div style={{ width: '10%' }} className='d-flex justify-content-center'>
					<Button
						style={{
							width: '47px',
							height: '47px',
							borderRadius: '50%',
							background: '#AE9C67',
							border: 'none',
							position: 'relative',
							top: '10%',
						}}
						icon='SvgCustomBack'
						onClick={() => {
							if (activeTab > 1) {
								setActiveTab(activeTab - 1);
							}
						}}
					/>
				</div>

				<div
					style={{ width: '80%' }}
					className='d-flex flex-column align-items-center onboarding-content'>
					<div className='mt-3' style={{ width: '60%' }}>
						<CustomWizard
							activeStep={activeTab - 1}
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

				<div style={{ width: '5%' }} className='d-flex justify-content-center'>
					{isNextButton() && (
						<Button
							style={{
								width: '47px',
								height: '47px',
								borderRadius: '50%',
								background: '#AE9C67',
								border: 'none',
								position: 'relative',
								top: '60%',
							}}
							icon='SvgCustomNext'
							onClick={() => {
								setActiveTab(activeTab + 1);
							}}
						/>
					)}
				</div>
				<div style={{ width: '5%' }} className='d-flex justify-content-center'>
					<Button
						style={{
							width: '47px',
							height: '47px',
							borderRadius: '50%',
							background: '#AE9C67',
							border: 'none',
							position: 'relative',
							top: '85%',
						}}
						icon='SvgCustomNext'
						onClick={() => {
							console.log('vh');
						}}
					/>
				</div>
			</div>
		</Page>
	);
};

export default OnboardingSteps;
