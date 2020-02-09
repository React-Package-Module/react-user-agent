import { useEffect, useState } from 'react';

export function getOS() {
    const [userAgent, setUserAgent] = useState(null)

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            setUserAgent('Windows Phone');
        }

        if (/android/i.test(userAgent)) {
            setUserAgent('Android');
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
            setUserAgent('iOS');
        }

        if (/intel mac/i.test(userAgent)) {
            setUserAgent('OS X');
        }

        if (/window/i.test(userAgent)) {
            setUserAgent('Windows')
        }

        if (/ubuntu/i.test(userAgent)) {
            setUserAgent('Ubuntu')
        }
    }, [])

    return userAgent;
} 

export function getPatform() {
    const [userAgent, setUserAgent] = useState(null)

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/Ubuntu|Intel Mac |Windows/i.test(userAgent)) {
            setUserAgent('Desktop');
        }

        if (/android|Pad|iPhone|iPod/i.test(userAgent)) {
            setUserAgent('Mobile');
        }

        
    }, [])

    return userAgent;
}