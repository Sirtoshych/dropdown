import {User} from "../types";

const MOCKED_USERS = [
    {label: 'Louie Popp', img: '/images/avatar.svg', id: '1-1'},
    {label: 'Jonas Rafn', img: '/images/avatar.svg', id: '1-2'},
    {label: 'Fiona Rakipi', img: '/images/avatar.svg', id: '1-3'},
    {label: 'Martin Navne', img: '/images/avatar.svg', id: '1-4'},
    {label: 'Kristoffer Degn', img: '/images/avatar.svg', id: '1-5'},
    {label: 'Wayne Rooney', img: '/images/avatar.svg', id: '1-6'},
    {label: 'Dimitar Berbatov', img: '/images/avatar.svg', id: '1-7'},
    {label: 'Carlos Tevez', img: '/images/avatar.svg', id: '1-8'},
    {label: 'Edwin van der Sar', img: '/images/avatar.svg', id: '1-9'},
    {label: 'Rio Ferdinand', img: '/images/avatar.svg', id: '1-10'},
    {label: 'Nemanjia Vidic', img: '/images/avatar.svg', id: '1-11'},
]


export const getUsers = async (searchText: string = ''): Promise<Array<User>> => {
    return new Promise((res) => {
        const filtered = MOCKED_USERS.filter(({label}) =>
            label.toLowerCase().includes(searchText.toLowerCase()));
        res(filtered)
    })
}