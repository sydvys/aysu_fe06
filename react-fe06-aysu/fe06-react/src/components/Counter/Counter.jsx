
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./style.module.css";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(true)

    return(
        <div className={isDarkMode ? styles.darkMode : null}>
            <h1>{count}</h1>
            <Button 
            txt ="+"
            click={() => {
                setCount(count + 1)
            }}/>
            <Button 
            txt ="0"
            click={() => {
                setCount(0)
            }}/>
            <Button 
            txt ="-"
            click={() => {
                setCount(count - 1)
            }}/>
            <Button 
            txt ={`${isDarkMode? "light" : "dark"} mode`}
            click={() => {
                setIsDarkMode(!isDarkMode)
            }}/>
        </div>
    )
}

export default Counter;
















