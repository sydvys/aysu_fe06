
import styles from "./style.module.css";

function Button({click, txt}) {
    return ( 
        <button 
        onClick={click} className={styles.btn}>{txt}</button>
    )
}

export default Button;
















