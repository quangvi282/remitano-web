import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext';
import fromlabsLogo from '../../images/fromlabs.png'
import { Container, Wrapper, Row, Column, Link, Title, Icon, Img, LinkLogo, BackgroundLogo } from './FooterElements';

export function FooterContainer() {
    const context = useContext(AppContext);
    return (
        <>

        {context.token !== null &&
        <>
        <Container>
            <Wrapper>
            <Row>
                <Column>
                    <Link to="/">Home</Link>
                </Column>
                <Column>
                    <Link to="/resources">Resources</Link>
                </Column>

                <Column>
                    <Link to="/faq">FAQ</Link>
                </Column>

                <Column>
                    <Link to="/events">Event</Link>
                </Column>
                <Column>
                    <Link to="/personal">Log Ride</Link>
                </Column>
                <Column>
                    <Link to="/allteams">Teams</Link>
                </Column>
                
                <Column>
                    <Link to="/challenge">Challenge</Link>
                </Column>
                {/* <Column>
                    <Link to="#" onClick={ (event) => event.preventDefault() }>Standing</Link>
                </Column> */}

                {/* <Column>
                    <Link to="#" onClick={ (event) => event.preventDefault() }>Challenge & Trip Log</Link>
                </Column> */}

                {/* <Column>
                    <Link to="#" onClick={ (event) => event.preventDefault() }>Account</Link>
                </Column> */}
                {/* <Column>
                <Footer.Title>Social</Footer.Title>
                    <Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Link>
                    <Link href="#"><Icon className="fab fa-instagram" />Instagram</Link>
                    <Link href="#"><Icon className="fab fa-youtube" />Youtube</Link>
                    <Link href="#"><Icon className="fab fa-twitter" />Twitter</Link>
                </Column> */}
            </Row>
            </Wrapper>
        </Container>
                </>}
            <BackgroundLogo>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <LinkLogo href="https://www.qbp.com/privacy-policy" style={{marginLeft: 15, fontWeight: 'bold'}}> Privacy Policy</LinkLogo>
                </div>
            </BackgroundLogo>  
            <BackgroundLogo>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <LinkLogo href="https://www.qbp.com">© 2022 Quality Bicycle Products</LinkLogo>
                </div>
            </BackgroundLogo> 
            <BackgroundLogo>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <LinkLogo href="https://fromlabs.com">Powered By FromLabs Pte. Ltd</LinkLogo>
                    <Img src={fromlabsLogo} />
                </div>
            </BackgroundLogo>
            </>
    )
}