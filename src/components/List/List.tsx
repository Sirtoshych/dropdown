import {FC, useContext} from 'react'
import styles from './List.module.css';
import Search from "../Search/Search";
import {ReactComponent as SearchIcon} from "../Icons/search.svg";
import ListItem, {Item} from "./ListItem";
import {getUsers} from "../../api/users";
import UsersContext from "../../contexts/usersContext";

interface ListProps{
    searchable?: boolean
    items: Array<Item>
    onItemClick: (value: string , label: string) => void
    selectedItems: Array<string>
}

const List: FC<ListProps> = ({searchable, items, onItemClick, selectedItems}) => {
    const {setUsers} = useContext(UsersContext);

    const handleSearchChange = (searchText: string) => {
        getUsers(searchText).then((users) => {
            setUsers(users)
        })
    }

    const handleItemClick = (item: Item) => {
        onItemClick(item.id, item.label)
    }

    return <div className={styles.container}>
        {searchable && <Search onChange={handleSearchChange} icon={<SearchIcon/> }/>}
        <div className={styles.itemsContainer}>
            {items.map((item, index)=>
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