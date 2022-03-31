import styles from './Tag.module.css'
import {FC, useContext} from "react";
import {ReactComponent as CloseIcon} from "../Icons/close.svg";
import TagsContext from "../../contexts/tagsContext";

export interface ITag {
    label: string,
    id: string,
}
interface TagProps{
    tag: ITag
}

const Tag:FC<TagProps> = ({tag}) => {
    const { tags,setTags } = useContext(TagsContext)

    const handleClick = () => {
        setTags( [...tags.filter( el => el.id !== tag.id)])
    }

    return <div onClick={handleClick} className={styles.tag}>
        <span className={styles.tagLabel}>{tag.label}</span>
        <div className={styles.tagIcon}><CloseIcon width={'14px'} height={'14px'}/></div>
    </div>
}

export default Tag;