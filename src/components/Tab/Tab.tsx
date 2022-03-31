import {FC} from 'react';
interface TabInterface{
    label: string;
}

const Tab: FC<TabInterface> = ({ children }) => {
    return <div>{children}</div>
}
export default Tab;