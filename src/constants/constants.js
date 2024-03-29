import { useState, useEffect } from 'react';

export const API_BASE_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://warm-anchorage-06435.herokuapp.com/https://remitano-backend.herokuapp.com'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return windowDimensions;
}