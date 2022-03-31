import {useContext,} from "react";
import Tag from "../Tag/Tag";
import styles from './TagsList.module.css'
import TagsContext from "../../contexts/tagsContext";

const TagsList = () => {
    const {tags} = useContext(TagsContext)

    return <div className={styles.container}>
        {tags.map(
            (el, index) => <Tag key={index} tag={el}/>
        )
        }
    </div>
};

export default TagsList