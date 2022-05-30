import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { ScrollPanel } from 'primereact/scrollpanel';

export const SidebarContainer = styled(ScrollPanel)`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #DB4F33;
    display: none;
    align-items: left;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
    top: ${({ isOpen }) => (isOpen ? '0': '100%')};
    @media screen and (max-width: 768px) {
        display: grid;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50px);
    text-align: center;

    @media screen and (max-height: 576px) {
        grid-template-rows: repeat(6, 40px);
    }
`;

export const SidebarDisLink = styled(LinkR)`
    display: flex;
    align-items: center;
    padding: 20px;
    // justify-content: center;
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    pointer-events: none;
    
    @media screen and (max-height: 720px) {
        font-size: 16px;
        padding: 10px;
    }

    @media screen and (max-height: 576px) {
        font-size: 14px;
        padding: 10px;
    }
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    padding: 20px;
    // justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        // color: #01bf71;
        font-weight: 600;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-height: 720px) {
        font-size: 16px;
        padding: 10px;
    }

    @media screen and (max-height: 576px) {
        font-size: 14px;
        padding: 10px;
    }

`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #252A7A;
    white-space: 16px 64px;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const SidebarBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #252A7A;
    white-space: 16px 64px;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;