import React, {useContext} from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarDisLink,
    SidebarBtnLink
} from './SidebarElements';
import DropdownSidebar from '../DropdownSidebar';
import { standingsDropdown, challengeDropdown, profileDropdown, profileDropdownAdmin } from '../NavItems';
import { AppContext } from '../../context/AppContext';
import KeycloakServices from '../../services/KeycloakService';

const Sidebar = ({isOpen, toggle}) => {

    const context = useContext(AppContext)

    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/home" onClick={toggle}>
                        HOME
                    </SidebarLink>
                    {context.token !== null ?
                    <>
                    <SidebarLink to="/resources" onClick={toggle}>
                        RESOURCES
                    </SidebarLink>
                    <SidebarLink to="/faq" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    <SidebarLink to="/events" onClick={toggle}>
                        EVENTS 
                    </SidebarLink>
                    <SidebarLink to="/personal" onClick={toggle}>
                        LOG RIDE 
                    </SidebarLink>
                    <SidebarLink to="/allteams" onClick={toggle}>
                        TEAMS 
                    </SidebarLink>
                    <SidebarLink to="/challenge" onClick={toggle}>
                        CHALLENGE 
                    </SidebarLink>
                    {/* <SidebarDisLink to="*" onClick={toggle}>
                        STANDINGS 
                    </SidebarDisLink>
                    <DropdownSidebar toggle={toggle} serviceDropdown={standingsDropdown}/> */}
                    {/* <SidebarDisLink to="*" onClick={toggle}>
                        CHALLENGE & TRIP LOG 
                    </SidebarDisLink>
                    <DropdownSidebar toggle={toggle}  serviceDropdown={challengeDropdown}/> */}
                    {KeycloakServices.hasRole(['ROLE_ADMIN']) ?
                    <>
                    <SidebarDisLink to="*" onClick={toggle}>
                        ACCOUNT
                    </SidebarDisLink>
                    <DropdownSidebar toggle={toggle}  serviceDropdown={profileDropdownAdmin}/>
                    </> :
                    <SidebarLink to="/profile" onClick={toggle}>
                        ACOOUNT 
                    </SidebarLink>
                    }
                    {/* <SidebarDisLink to="*" onClick={toggle}>
                        ACCOUNT
                    </SidebarDisLink>
                    <DropdownSidebar toggle={toggle}  serviceDropdown={KeycloakServices.hasRole(['ROLE_ADMIN']) ? profileDropdownAdmin : profileDropdown}/> */}
                    </>
                    :<SidebarLink to='*' onClick={ () => KeycloakServices.doLogin()}>
                        LOGIN
                    </SidebarLink>
                    }
                </SidebarMenu>
                <SideBtnWrap>
                    {/* {context.token === null ?
                    <SidebarBtnLink to="/register" onClick={toggle}>
                        REGISTER
                    </SidebarBtnLink> */}
                    {context.token !== null && <SidebarBtnLink to="/" onClick={() => {
                        toggle()
                        context.signOut()
                        }}>
                        LOGOUT
                    </SidebarBtnLink>}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
