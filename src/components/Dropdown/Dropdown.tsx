import React, {FC, useCallback, useContext, useEffect, useState} from 'react'
import styles from './Dropdown.module.css';
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import List from "../List/List";
import TagsContext from "../../contexts/tagsContext";
import UsersContext from "../../contexts/usersContext";
import IntegrationsContext from "../../contexts/integrationsContext";
import {getUsers} from "../../api/users";
import {getIntegrations} from "../../api/integrations";
import {INTEGRATIONS, USERS} from "../../consts";

interface DropdownProps {
    isVisible: boolean;
}

const Dropdown: FC<DropdownProps> = ({isVisible}) => {
    const {tags, setTags} = useContext(TagsContext)
    const {users, setUsers} = useContext(UsersContext)
    const {integrations, setIntegrations} = useContext(IntegrationsContext)
    const [selectedItems, setSelectedItems] = useState<Array<string>>(() => tags.map(tag => tag.id))

    useEffect(() => {
        setSelectedItems(tags.map(tag => tag.id))
    }, [tags])

    const handleItemSelect = (id: string, label: string, type: string) => {
        if (selectedItems.includes(id)) {
            setTags(tags.filter(tag => tag.id !== id))
        } else {
            setTags([...tags, {id, label: `${type}: ${label}`}])
        }
    }
    const handleUsersListClick = (id: string, label: string) => handleItemSelect(id, label, USERS)

    const handleUsersSearch = useCallback((value: string) => {
        getUsers(value).then(setUsers)
    }, [])

    const handleIntegrationsSearch = useCallback((value: string) => {
        getIntegrations(value).then(setIntegrations)
    }, [])

    if (!isVisible)
        return null;

    return <div className={styles.container}>
        <Tabs>
            <Tab label={USERS}>
                <List
                    searchable
                    items={users}
                    onItemClick={handleUsersListClick}
                    selectedItems={selectedItems}
                    onSearch={handleUsersSearch}
                />
            </Tab>
            <Tab label={INTEGRATIONS}>
                <List
                    searchable
                    onSearch={handleIntegrationsSearch}
                    items={integrations}
                    onItemClick={(id, label) => handleItemSelect(id, label, INTEGRATIONS)}
                    selectedItems={selectedItems}
                />
            </Tab>
        </Tabs>
    </div>;
}

export default Dropdown;