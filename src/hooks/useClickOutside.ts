import {RefObject, useEffect} from "react";

export const useClickOutside= <T extends HTMLElement = HTMLElement>(ref: RefObject<T> , handler: (event: MouseEvent) => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler(event);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ref, handler]);
}