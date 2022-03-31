import React, {createContext} from "react";
import {Integration, User} from "../types";

export const IntegrationsContext =
    createContext<{ integrations: Array<Integration>, setIntegrations: (users: Array<User>) => void }>
    ({
        integrations: [],
        setIntegrations: () => {
        }
    });

export default IntegrationsContext;