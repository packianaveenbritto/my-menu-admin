/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Popovers from '../../../components/bootstrap/Popovers';
import useDarkMode from '../../../hooks/useDarkMode';
import icEcommerceQr from '../../../assets/iconsAndImages/icons/ic-ecommerce-qr.svg';
import icDevicesIpad from '../../../assets/iconsAndImages/icons/ic-devices-ipad.svg';
import icActionsCode from '../../../assets/iconsAndImages/icons/ic-actions-code.svg';
import Undo from '../../../assets/iconsAndImages/icons/undo.svg';
import Redo from '../../../assets/iconsAndImages/icons/redo.svg';
import Ecllips from '../../../assets/iconsAndImages/icons/Ellipse.svg';
import SubHeaderRightButtons from '../../../components/common/SubHeaderRightButtons';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../components/bootstrap/Dropdown';

const MenuEditorSubHeader = () => {
	const TABS = {
		MENU1: 'Menu 1',
		MENU2: 'Menu 2',
		MENU3: 'Menu 3',
	};
	const SubHeaderRightValues = [
		{ id: 1, name: 'Get Professional Help' },
		{ id: 2, name: 'Tutorial' },
	];
	const [activeTab, setActiveTab] = useState(TABS.ALL);
	const { themeStatus } = useDarkMode();

	return (
		<SubHeader>
			<SubHeaderLeft>
				<span className='h4 mb-0 fw-bold'>Menu Editor</span>
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
				<span className='h4 mb-0 fw-normal'>+</span>
				<SubheaderSeparator />
				<span className='h5 mb-0 fw-normal'>Preview</span>
				<div className='col-auto'>
					<Popovers trigger='hover' desc='QR Menu Preview' flip='bottom'>
						<img src={icEcommerceQr} width='100%' alt='' />
					</Popovers>
				</div>
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Preview in Device' flip='bottom'>
						<img src={icDevicesIpad} width='100%' alt='' />
					</Popovers>
				</div>
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Preview Online' flip='bottom'>
						<img src={icActionsCode} width='100%' alt='' />
					</Popovers>
				</div>
				<SubheaderSeparator />
				<span className='h5 mb-0 fw-normal'>Saved</span>
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Undo' flip='bottom'>
						<img src={Undo} width='100%' alt='' />
					</Popovers>
				</div>
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Redo' flip='bottom'>
						<img src={Redo} width='100%' alt='' />
					</Popovers>
				</div>
			</SubHeaderLeft>

			<SubHeaderRight>
				<SubHeaderRightButtons buttons={SubHeaderRightValues} />
				<img src={Ecllips} width='23px' alt='' />
				<Dropdown setIsOpen={() => {}}>
					<DropdownToggle>
						<Button color='primary' isLight>
							Menu Selection
						</Button>
					</DropdownToggle>
					<DropdownMenu breakpoint='xl' />
				</Dropdown>
				<Button icon='SpaceDashboard' color='primary' isLight />
                <SubheaderSeparator />
                <Button className='sub-header-right-button-clicked'>Published</Button>
			</SubHeaderRight>
		</SubHeader>
	);
};

export default MenuEditorSubHeader;
