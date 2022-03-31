import React, {FC, ReactElement, useState} from "react";
import styles from './Search.module.css'
import {ReactComponent as SearchIcon} from "../Icons/search.svg";

interface SearchProps{
    onChange: (value: string) => void
    icon?: ReactElement
}

const Search: FC<SearchProps> = ({onChange}) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const text = event.currentTarget.value;
        setValue(text)
        onChange(text)
    }

    return <div className={styles.container}>
        <SearchIcon/>
        <input className={styles.input} value={value} onChange={handleChange} placeholder={'Search options'} />
    </div>
}
export default Search;