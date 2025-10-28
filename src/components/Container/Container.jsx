import styles from "./Container.module.scss"

const Container = ({customStyles, children}) => {
  return (
    <div className={[styles.container, customStyles].join(" ")}>
        {children}
    </div>
  )
}

export default Container