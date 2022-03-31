import Button from "../Button/Button";
import {ReactComponent as Plus} from "../Icons/plus.svg";
import Dropdown from "../Dropdown/Dropdown";
import React, { useRef, useState} from "react";
import styles from './FilterButton.module.css'
import {FILTER_BUTTON_LABEL} from "../../consts";
import {useClickOutside} from "../../hooks/useClickOutside";

const FilterButton = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleButtonClick = () => {
        setIsDropdownVisible(prevIsVisible => !prevIsVisible)
    }

    useClickOutside(ref, () => setIsDropdownVisible(false));

    return <div ref={ref} className={styles.container}>
        <Button label={FILTER_BUTTON_LABEL} onClick={handleButtonClick} icon={<Plus/>}/>
        <Dropdown
            isVisible={isDropdownVisible}
        />
    </div>
}

export default FilterButton