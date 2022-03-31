import React, {createContext} from "react";
import {User} from "../types";

export const UsersContext = createContext<{ users: Array<User>, setUsers: (users: Array<User>) => void }>({
    users: [],
    setUsers: () => {
    }
});

export default UsersContext;