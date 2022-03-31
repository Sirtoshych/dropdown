import React, {useEffect, useMemo, useState} from 'react';
import FilterButton from "./components/FilterButton/FilterButton";
import TagsList from "./components/TagsList/TagsList";
import {ITag} from './components/Tag/Tag'
import {TagsContext} from "./contexts/tagsContext";
import {getUsers} from "./api/users";
import {Integration, User} from "./types";
import UsersContext from "./contexts/usersContext";
import IntegrationsContext from "./contexts/integrationsContext";
import {getIntegrations} from "./api/integrations";

function App() {
    const [tags, setTags] = useState<Array<ITag>>([]);
    const [users, setUsers] = useState<Array<User>>([]);
    const [integrations, setIntegrations] = useState<Array<Integration>>([]);

    const cacheTags = (tags: Array<ITag>) => {
        localStorage.setItem('tags', JSON.stringify(tags))
        setTags(tags)
    }

    useEffect(() => {
        const storedTags = localStorage.getItem('tags');
        if (storedTags) {
            setTags(JSON.parse(storedTags));
        }

        getUsers().then(setUsers)

        getIntegrations().then(setIntegrations)
    }, [])

    const tagsContextDefault = useMemo(()=> ({tags, setTags: cacheTags}), [tags,setTags])
    const usersContextDefault = useMemo(()=> ({users, setUsers}), [users,setUsers])
    const integrationsContextDefault = useMemo(()=> ({integrations, setIntegrations}), [integrations,setIntegrations])

    return (
        <TagsContext.Provider value={tagsContextDefault}>
            <UsersContext.Provider value={usersContextDefault}>
                <IntegrationsContext.Provider value={integrationsContextDefault}>
                    <div className="App">
                        <FilterButton/>
                        <TagsList/>
                    </div>
                </IntegrationsContext.Provider>
            </UsersContext.Provider>
        </TagsContext.Provider>
    );
}

export default App;
