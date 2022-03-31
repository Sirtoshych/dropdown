import {FC, useEffect, useState} from 'react'
import styles from './List.module.css';
import Search from "../Search/Search";
import {ReactComponent as SearchIcon} from "../Icons/search.svg";
import ListItem, {Item} from "./ListItem";

interface ListProps{
    searchable?: boolean
    items: Array<Item>
    onItemClick: (value: string , label: string) => void
    onSearch: (value: string,) => void
    selectedItems: Array<string>
}

const List: FC<ListProps> = ({searchable, items, onItemClick, selectedItems, onSearch}) => {
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        onSearch(searchText)
    }, [searchText])

    const handleSearchChange = (searchText: string) => {
        setSearchText(searchText);
    }

    const handleItemClick = (item: Item) => {
        onItemClick(item.id, item.label)
    }

    return <div className={styles.container}>
        {searchable && <Search onChange={handleSearchChange} defaultValue={searchText} icon={<SearchIcon/> }/>}
        <div className={styles.itemsContainer}>
            {items.slice(0,5).map((item, index)=>
                <ListItem
                    isSelected={selectedItems.includes(item.id)}
                    onClick={handleItemClick}
                    key={index}
                    item={item}/>)
            }
        </div>
    </div>
}

export default List;