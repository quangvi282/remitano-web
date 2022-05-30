import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';

export const Container = styled.div`
    padding: 20px 60px;
    background: #ECEDED;
    @media (max-width: 1000px) {
        padding: 10px 30px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    // margin-left: 60px;
    justify-content: center;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 20px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
`;

export const Link = styled(LinkR)`
    color: #DB4F33;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`;

export const BackgroundLogo = styled.div`
    background: #ECEDED;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 0px;
    padding-top: 0px;
    display: flex;
    justify-content: end;
    @media (max-width: 768px) {
        justify-content: center;
        background: #333333;
        padding: 7px;
        color: #fff;
    }
`;


export const LinkLogo = styled.a`
    color: #DB4F33;
    font-size: 18px;
    text-decoration: none;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }

    @media (max-width: 768px) {
        color: #fff;
    }
`;


export const Title = styled.p`
    font-size: 24px;
    color: #DB4F33;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 16px;
`

export const Icon = styled.i`
    font-size: 18px;
    margin-right: 16px;
`