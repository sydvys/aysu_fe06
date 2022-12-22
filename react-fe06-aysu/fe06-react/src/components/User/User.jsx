import styles from "./style.module.css"

const User = ({src, bashliq, description}) => {
    return(
        <div className={styles.card}>
            <img src={src} alt=''/>
            <h3>{bashliq}</h3>
            <p>{description}</p>
        </div>
    )
}

export default User;