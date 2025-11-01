import { casesAssets } from "../../../constants/copyright"
import styles from "./Cases.module.scss"

const Info = ({selectedCase, setSelectedCase}) => {
  const getStylesTopic = (topicId, disabled) => {
    if (topicId === selectedCase) {
      return styles.topic_active
    } else if (disabled) {
      return styles.topic_disabled
    } else {
      return styles.topic
    }
  }

  return (
    <div className={styles.info}>
      <ul className={styles.topics}>
        {casesAssets.map((project, key) => (
          <li 
            className={getStylesTopic(key, project.disabled)}
            onClick={!project.disabled ? () => setSelectedCase(key) : null}
            key={key}
          >
            {project.topic}
          </li>
        ))}
      </ul>
          
      <div className={styles.title_block}>
        {casesAssets.map((project, key) => (
          <h2 className={selectedCase === key ? styles.title_selected : styles.title} key={key}>
            {project.title}
          </h2>
        ))}
      </div>

      <div className={styles.description_block}>
         {casesAssets.map((project, key) => (
          <p className={selectedCase === key ? styles.description_selected : styles.description} key={key}>
            {project.description}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Info