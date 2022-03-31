import React, { createContext } from "react";
import {ReactComponent as AvatarIcon} from "../components/Icons/avatar.svg";
import {User} from "../types";

export const UsersContext = createContext<{users: Array<User>,setUsers: (users: Array<User>)=>void}>({
    users: [],
    setUsers: () => {}
});

export default UsersContext;


const MOCK_ITEMS = [
    {label: 'Louie Popp', img: <AvatarIcon />, id: '1-1',},
    {label: 'Jonas Rafn', img: <AvatarIcon />, id: '1-2'},
    {label: 'Fiona Rakipi', img: <AvatarIcon />, id: '1-3'},
    {label: 'Martin Navne', img: <AvatarIcon />, id: '1-4'},
    {label: 'Kristoffer Degn', img: <AvatarIcon />, id: '1-5'},
]
