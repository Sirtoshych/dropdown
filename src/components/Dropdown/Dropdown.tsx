import React, {FC, useContext, useEffect, useRef, useState} from 'react'
import styles from './Dropdown.module.css';
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import List from "../List/List";

import {ReactComponent as AvatarIcon} from "../Icons/avatar.svg";
import TagsContext from "../../contexts/tagsContext";
import UsersContext from "../../contexts/usersContext";
import IntegrationsContext from "../../contexts/integrationsContext";

interface DropdownProps {
    isVisible: boolean;
}

const Dropdown: FC<DropdownProps> = ({isVisible }) => {
    const { tags , setTags} = useContext(TagsContext)
    const { users } = useContext(UsersContext)
    const { integrations } = useContext(IntegrationsContext)
    const [selectedItems, setSelectedItems] = useState<Array<string>>(()=>tags.map(tag => tag.id))

    useEffect(()=>{
      setSelectedItems(tags.map(tag => tag.id))
    }, [tags])

    const handleItemSelect = (id: string, label: string, type: string) => {
        if(selectedItems.includes(id)){
            setTags(tags.filter(tag => tag.id !== id))
        }else{
            setTags([...tags, {id, label: `${type}: ${label}`}])
        }
    }

    if (!isVisible)
        return null;

    return <div  className={styles.container}>
        <Tabs>
            <Tab label={'Users'} >
                <List
                    searchable
                    items={users}
                    onItemClick={(id, label)=>handleItemSelect(id, label, 'User')}
                    selectedItems={selectedItems}
                />
            </Tab>
            <Tab label={'Integrations'} >
                <List
                    searchable items={integrations}
                    onItemClick={(id, label)=>handleItemSelect(id, label, 'Integration')}
                    selectedItems={selectedItems}
                />
            </Tab>
        </Tabs>
    </div> ;
}

export default Dropdown;