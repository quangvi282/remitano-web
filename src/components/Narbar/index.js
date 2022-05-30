import React, { useState, useContext } from 'react';
import {
    Nav,
    NavLinkS,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,

    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
} from './NavbarElements';
import Dropdown from '../DropDown';
import logo from '../../images/logo.png';
import squareLogo from '../../images/logo_sidebar.png';
import { standingsDropdown, challengeDropdown, profileDropdown, profileDropdownAdmin, aboutDropdown, tournamentDropdown } from '../NavItems';
import useWindowDimensions, { isMobile } from '../../constants/constants';
import { AppContext } from '../../context/AppContext';
import KeycloakServices from '../../services/KeycloakService';

const Navbar = ({toggle}) => {

    const [dropdown, setDropdown] = useState(false);
    const [dropdownCT, setDropdownCT] = useState(false);
    const [dropdownMP, setDropdownMP] = useState(false);
    const [dropdownTS, setDropdownTS] = useState(false);

    const context = useContext(AppContext)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const onMouseEnterCT = () => {
        if (window.innerWidth < 960) {
            setDropdownCT(false);
        } else {
            setDropdownCT(true);
        }
    };

    const onMouseLeaveCT = () => {
        if (window.innerWidth < 960) {
            setDropdownCT(false);
        } else {
            setDropdownCT(false);
        }
    };

    const onMouseEnterMP = () => {
        if (window.innerWidth < 960) {
            setDropdownMP(false);
        } else {
            setDropdownMP(true);
        }
    };

    const onMouseLeaveMP = () => {
        if (window.innerWidth < 960) {
            setDropdownMP(false);
        } else {
            setDropdownMP(false);
        }
    };

    const onMouseEnterTS = () => {
        if (window.innerWidth < 960) {
            setDropdownTS(false);
        } else {
            setDropdownTS(true);
        }
    };

    const onMouseLeaveTS = () => {
        if (window.innerWidth < 960) {
            setDropdownTS(false);
        } else {
            setDropdownTS(false);
        }
    };

    console.log('keyca', KeycloakServices.hasRole(['ROLE_ADMIN']))

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLinkS to='/' style={{backgroundColor: 'transparent'}}>
                        <img src={useWindowDimensions().width <= 1200 ? squareLogo : logo} alt='logo' />
                    </NavLinkS>
                    {context.token  !== null ?
                        <>
                    <MobileIcon onClick={toggle}>
                        <Bars />
                    </MobileIcon>
                    <NavMenu>
                        
                        <NavItem
                                onMouseEnter={onMouseEnterCT}
                                onMouseLeave={onMouseLeaveCT}
                                isDisable={true}
                            >
                            <NavLinkS to='*' isDisable={true} onClick={(e) => e.preventDefault()}>
                                ABOUT <i style={{marginLeft: '5px'}} className='fas fa-caret-down' />
                                {dropdownCT && <Dropdown serviceDropdown={aboutDropdown}/>}
                            </NavLinkS>
                        </NavItem>
                        <NavItem >
                            <NavLinkS to='/events'>
                                EVENT
                            </NavLinkS>
                        </NavItem>
                        <NavItem >
                            <NavLinkS to='/personal'>
                                LOG RIDE
                            </NavLinkS>
                        </NavItem>
                        <NavItem >
                            <NavLinkS to='/allteams'>
                                TEAMS
                            </NavLinkS>
                        </NavItem>
                        {/* <NavItem
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                isDisable={true}
                            >
                            <NavLinkS to='*' isDisable={true} onClick={(e) => e.preventDefault()}>
                                STANDINGS <i style={{marginLeft: '5px'}} className='fas fa-caret-down' />
                                {dropdown && <Dropdown serviceDropdown={standingsDropdown}/>}
                            </NavLinkS>
                        </NavItem> */}
                        <NavItem >
                            <NavLinkS to='/challenge'>
                            CHALLENGE
                            </NavLinkS>
                        </NavItem>
                        {/* <NavItem
                                onMouseEnter={onMouseEnterCT}
                                onMouseLeave={onMouseLeaveCT}
                                isDisable={true}
                            >
                            <NavLinkS to='*' isDisable={true} onClick={(e) => e.preventDefault()}>
                                CHALLENGE & TRIP LOG <i style={{marginLeft: '5px'}} className='fas fa-caret-down' />
                                {dropdownCT && <Dropdown serviceDropdown={challengeDropdown}/>}
                            </NavLinkS>
                        </NavItem> */}
                        <NavItem
                            onMouseEnter={onMouseEnterTS}
                            onMouseLeave={onMouseLeaveTS}
                            isDisable={true}
                        >
                            <NavLinkS to='*' onClick={ (event) => event.preventDefault() }>
                                TOURNAMENT <i style={{marginLeft: '5px'}} className='fas fa-caret-down' />
                                {dropdownTS && <Dropdown serviceDropdown={tournamentDropdown}/>}
                            </NavLinkS>
                        </NavItem>
                        
                        {
                            KeycloakServices.hasRole(['ROLE_ADMIN']) ?
                            <NavItem
                                onMouseEnter={onMouseEnterMP}
                                onMouseLeave={onMouseLeaveMP}
                                isDisable={true}
                            >
                                <NavLinkS to='*' onClick={ (event) => event.preventDefault() }>
                                    ACCOUNT <i style={{marginLeft: '5px'}} className='fas fa-caret-down' />
                                    {dropdownMP && <Dropdown serviceDropdown={profileDropdownAdmin}/>}
                                    {/* {dropdownMP && <Dropdown serviceDropdown={context.isAccess === true ? profileDropdownAdmin : profileDropdown}/>} */}
                                </NavLinkS>
                            </NavItem>
                            : 
                            <NavItem >
                                <NavLinkS to='/profile'>
                                    ACCOUNT
                                </NavLinkS>
                            </NavItem>
                        }
                        {/* </> :
                        <NavItem >
                            <NavLinkS to='*' onClick={ () => KeycloakServices.doLogin()}>
                            LOGIN
                            </NavLinkS>
                        </NavItem>} */}
                        
                    </NavMenu>
                    </> :
                    <NavLinkS to='*' onClick={ () => KeycloakServices.doLogin()}>
                    LOGIN
                    </NavLinkS> }
                    {/* {context.token === null ? 
                    <NavBtn>
                        <NavBtnLink to='/register'>REGISTER</NavBtnLink>
                    </NavBtn> : */}
                    {context.token !== null && <NavBtn>
                        <NavBtnLink to='/' onClick={() => {
                            context.signOut()
                        }}>LOGOUT</NavBtnLink>
                    </NavBtn>}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
