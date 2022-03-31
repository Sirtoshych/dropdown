import React, {FC, useContext, useEffect, useState} from 'react'
import styles from './Dropdown.module.css';
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import List from "../List/List";
import TagsContext from "../../contexts/tagsContext";
import UsersContext from "../../contexts/usersContext";
import IntegrationsContext from "../../contexts/integrationsContext";
import {getUsers} from "../../api/users";
import {getIntegrations} from "../../api/integrations";

interface DropdownProps {
    isVisible: boolean;
}

const Dropdown: FC<DropdownProps> = ({isVisible }) => {
    const { tags , setTags} = useContext(TagsContext)
    const { users, setUsers } = useContext(UsersContext)
    const { integrations, setIntegrations } = useContext(IntegrationsContext)
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

    const handleUsersSearch =(value:string) => {
        getUsers(value).then((users) => {
            setUsers(users)
        })
    }

    const handleIntegrationsSearch =(value:string) => {
        getIntegrations(value).then((integrations) => {
            setIntegrations(integrations)
        })
    }

    if (!isVisible)
        return null;

    return <div  className={styles.container}>
        <Tabs>
            <Tab label={'Users'} >
                <List
                    key={'Users'}
                    searchable
                    items={users}
                    onItemClick={(id, label)=>handleItemSelect(id, label, 'User')}
                    selectedItems={selectedItems}
                    onSearch={handleUsersSearch}
                />
            </Tab>
            <Tab label={'Integrations'} >
                <List
                    key={'Integrations'}
                    searchable
                    onSearch={handleIntegrationsSearch}
                    items={integrations}
                    onItemClick={(id, label)=>handleItemSelect(id, label, 'Integration')}
                    selectedItems={selectedItems}
                />
            </Tab>
        </Tabs>
    </div> ;
}

export default Dropdown;