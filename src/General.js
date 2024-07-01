import { useState, useEffect } from 'react';

export function useAPNGSupport(pngSrc, gifSrc) {
    const [src, setSrc] = useState('');

    useEffect(() => {
        const checkAPNGSupport = async () => {
            const supportsAPNG = await canPlayAPNG();
            setSrc(supportsAPNG ? pngSrc : gifSrc);
        };

        checkAPNGSupport();
    }, [pngSrc, gifSrc]);

    return src;
}

export function canPlayAPNG() {
    const img = new Image();
    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/5/hDwADgAJTaucHAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNC0xM1QxNzozMToxMCswMDowMLdODNAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDQtMTNUMTc6MzE6MTArMDA6MDCyz3clAAAAAElFTkSuQmCC';
    return new Promise((resolve) => {
        img.onload = img.onerror = function () {
            resolve(img.width === 1 && img.height === 1);
        };
    });
}