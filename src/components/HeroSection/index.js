import React, {useState} from 'react';
import {Button} from '../ButtonElements';
import {HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight} from './HeroElements'
import Video from '../../videos/video.mp4';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    virtual
                </HeroH1>
                <HeroP>
                    Sign up 
                </HeroP>

                <HeroBtnWrapper>
                    <Button 
                        to='sign-up'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary={true}
                        dark={true}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
