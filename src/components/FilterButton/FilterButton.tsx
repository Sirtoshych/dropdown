import Button from "../Button/Button";
import {ReactComponent as Plus} from "../Icons/plus.svg";
import Dropdown from "../Dropdown/Dropdown";
import React, {useEffect, useRef, useState} from "react";
import styles from './FilterButton.module.css'
import {FILTER_BUTTON_LABEL} from "../../consts";

const FilterButton = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const ref = useRef(null);

    const handleButtonClick = () => {
        setIsDropdownVisible(prevIsVisible => !prevIsVisible)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            //@ts-ignore have to ignore here because for some reason can't type it right atm
            if (ref.current && !ref.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return <div ref={ref} className={styles.container}>
        <Button label={FILTER_BUTTON_LABEL} onClick={handleButtonClick} icon={<Plus/>}/>
        <Dropdown
            isVisible={isDropdownVisible}
        />
    </div>
}

export default FilterButton