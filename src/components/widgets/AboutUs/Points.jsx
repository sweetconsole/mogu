import Picture from "../../general/Picture/Picture"
import styles from "./AboutUs.module.scss"

const Points = ({points}) => {
  return (
    <ul className={styles.points}>
      {points.map((point, key) => (
        <li className={styles.point} key={key}>
          {point.text ? (
            <p className={styles.text}>{point.text}</p>
          ) : (
            <div className={styles.arrow}>
              <Picture
                imgAttr={point.arrow?.imgAttr}
                sources={point.arrow?.sources}
              /> 
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Points