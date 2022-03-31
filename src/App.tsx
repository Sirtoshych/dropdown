import React, {useEffect, useState} from 'react';
import FilterButton from "./components/FilterButton/FilterButton";
import './App.css'
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

    useEffect(()=>{
        const storedTags = localStorage.getItem('tags');
        if(storedTags){
            setTags(JSON.parse(storedTags));
        }

        getUsers().then((users) => {
            setUsers(users)
        })

        getIntegrations().then((integrations) => {
            setIntegrations(integrations)
        })
    }, [])

    return (
        <TagsContext.Provider value={{tags,setTags: cacheTags}}>
            <UsersContext.Provider value={{users,setUsers}}>
                <IntegrationsContext.Provider value={{integrations,setIntegrations}}>
                    <div className="App">
                        <FilterButton />
                        <TagsList />
                    </div>
                </IntegrationsContext.Provider>
            </UsersContext.Provider>
        </TagsContext.Provider>
    );
}

export default App;
