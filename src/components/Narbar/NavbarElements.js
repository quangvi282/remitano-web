import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 200;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index: 1;
    padding: 0 24px;
    max-width: 1440px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    margin-right: -22px;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;



export const NavItem = styled.li`
    height: 60px;
    margin-right: 20px;
    &:hover {
        border-bottom: ${({ isDisable }) => (isDisable ? 'none': '3px solid  #DB4F33')};
    }
`;

export const NavLinkS = styled(Link)`
    color: #DB4F33;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    // pointer-events: ${({ isDisable }) => (isDisable ? 'none': 'auto')};
    cursor: pointer;
    &.active {
        color: #fff;
        font-weight: bold;
        background: #DB4F33;
    }
    
`;


// export const NavLinkS = styled(LinkS)`
//     color: #fff;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;

//     &.active {
//         border-bottom: 3px solid #01bf71;
//     }
// `;

export const Bars = styled(FaBars)`
    display: none;
    color: #6E2E40;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    // margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

// export const NavBtnLink = styled(LinkR)`
//     border-radius: 50px;
//     background: #01bf71;
//     white-space: nowrap;
//     padding: 10px 22px;
//     color: #010606;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     /* Second Nav */
    
//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606;
//     }
// `;
export const NavBtnLink = styled(Link)`
    // border-radius: 4px;
    background: #252A7A;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #4f59f0;
        color: #010606;
    }
`;