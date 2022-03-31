import {FC} from "react";
import styles from './List.module.css';

export interface Item {
    id: string;
    img: string,
    label: string;
}

interface ListItemProps{
    item: Item;
    onClick: (item: Item) => void;
    isSelected: boolean
}

const ListItem: FC<ListItemProps> = ({item, onClick, isSelected}) => {
    return <div onClick={()=>onClick(item)} className={`${styles.listItem} ${isSelected ? styles.selected : ''}`}>
        <div className={styles.listItemIcon}> <img src={item.img} alt={''} /> </div>
        <span className={styles.listItemLabel}>{item.label}</span>
    </div>
}

export default ListItem;