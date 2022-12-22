import styles from "./style.module.css"
import Header from "components/Header/Header"
import User from "../User/User";
import usersData from "./users.json";
import Button from "components/Button/Button";
import { useState } from "react";

const Users = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return(
        <div className={isDarkMode ? styles.darkMode : ""}>
        <Button 
            txt ={`${isDarkMode? "light" : "dark"} mode`}
            click={() => {
                setIsDarkMode(!isDarkMode)
            }}
        />  
        <Header/>
            <div className={styles.container}>
                { 
                    usersData.map((user)=>{
                        return <User src={`/img/${user.img}.jpg`} bashliq={user.username} description={user.job}/>
                    })
                }
            </div>
        </div>
    )
}

export default Users;