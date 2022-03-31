import React, {FC, ReactElement} from 'react'
import styles from './Button.module.css';

interface ButtonProps {
    label: string
    onClick: () => void
    icon: ReactElement
}

const Button: FC<ButtonProps> = ({label, onClick, icon}) => {
    return <button className={styles.button} onClick={onClick}>{icon}{label}</button>
}
export default Button