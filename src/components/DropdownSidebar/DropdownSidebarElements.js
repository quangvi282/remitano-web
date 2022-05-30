import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownLink = styled(Link)`
    // background: #b35c4b;
    height: 40px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }

    @media screen and (max-height: 768px) {
        font-size: 16px;
        height: 30px;
    }
    
    @media screen and (max-height: 576px) {
        font-size: 14px;
        height: 30px;
    }
`;

export const SidebarLabel = styled.span`
    margin-left: 16px;
`;