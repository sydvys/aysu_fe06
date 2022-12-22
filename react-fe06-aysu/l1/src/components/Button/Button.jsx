import styles from "./style.module.css";

const Button = ({txt}) => {
    return(
        <button className={styles.btn}>{txt}</button>
    )
}

export default Button;