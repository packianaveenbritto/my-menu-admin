/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';
import CommonAvatarTeam from '../../components/common/CommonAvatarTeam';
import SubHeaderRightButtons from '../../components/common/SubHeaderRightButtons';
import useDarkMode from '../../hooks/useDarkMode';
import Page from '../../layout/Page/Page';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import { demoPages } from '../../menu';
import General from './General';
import OnlineMenu from './OnlineMenu';
import QRMenu from './QRMenu';
import TabletMenu from './TabletMenu';

const SettingPage = () => {
	const TABS = {
		SETTINGS1: 'General',
		SETTINGS2: 'Tablet Menu',
		SETTINGS3: 'QR Menu',
		SETTINGS4: 'Online Menu',
	};
	const SubHeaderRightValues = [
		{ id: 1, name: 'Help' },
		{ id: 2, name: 'Upgrade' },
		{ id: 3, name: 'Explore' },
		{ id: 4, name: 'Switch Account' },
	];
	const [activeTab, setActiveTab] = useState(TABS.SETTINGS1);
	// eslint-disable-next-line no-unused-vars
	const { themeStatus, darkModeStatus } = useDarkMode(TABS.SETTINGS1);

	return (
		<PageWrapper title={demoPages.settings.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Settings</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								icon
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
				</SubHeaderLeft>
				<SubHeaderRight>
					<CommonAvatarTeam>
						<SubHeaderRightButtons buttons={SubHeaderRightValues} />
					</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				{activeTab === TABS.SETTINGS1 && <General />}
				{activeTab === TABS.SETTINGS2 && <TabletMenu />}
				{activeTab === TABS.SETTINGS3 && <QRMenu />}
				{activeTab === TABS.SETTINGS4 && <OnlineMenu />}
			</Page>
		</PageWrapper>
	);
};

export default SettingPage;
