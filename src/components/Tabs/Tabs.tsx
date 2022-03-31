import {useState, FC, ReactElement} from "react";
import styles from './Tabs.module.css'

interface TabsInterface {
    children: ReactElement[]
}

const Tabs: FC<TabsInterface> = ({children}) => {
    const [selectedTab, setSelectedTab] = useState(0)

    const onClick = (index: number) => {
        setSelectedTab(index)
    }

    return (
        <div>
            <ul className={styles.container}>
                {children.map((item, index) => (
                    <li key={index}>
                        <div className={`${styles.tabLabel} ${index === selectedTab && styles.activeTabLabel}`}
                             onClick={() => onClick(index)}>{item.props.label}</div>
                    </li>
                ))}
            </ul>
            {children[selectedTab]}
        </div>
    )
}

export default Tabs;