import { useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { casesAssets } from "../../../constants/copyright"
import Container from "../../general/Container/Container"
import Picture from "../../general/Picture/Picture"
import styles from "./Cases.module.scss"

const Cases = () => {
  const [selectedProject, setSelectedProject] = useState(casesAssets[0])
  const [inProp, setInProp] = useState(true)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  const getStylesTopic = (topicId, disabled) => {
    if (topicId === casesAssets.indexOf(selectedProject)) {
      return styles.topic_active
    } else if (disabled) {
      return styles.topic_disabled
    } else {
      return styles.topic
    }
  }

  const handleProjectChange = (project) => {
    setInProp(false)

    setTimeout(() => {
      setSelectedProject(project)
      setInProp(true)
    }, 300)
  }

  return (
    <section className={styles.section} id="cases">
      <Container customStyles={styles.block}>
        <div className={styles.info}>
          <ul className={styles.topics}>
            {casesAssets.map((project, key) => (
              <li 
                className={getStylesTopic(key, project.disabled)}
                onClick={!project.disabled ? () => handleProjectChange(project) : null}
                key={key}
              >
                {project.topic}
              </li>
            ))}
          </ul>

          <CSSTransition nodeRef={textRef} in={inProp} timeout={300} classNames="animation-fade">
            <div className={styles.animation_block} ref={textRef}>
              <h2 className={styles.title}>{selectedProject.title}</h2>
              <p className={styles.description}>{selectedProject.description}</p>
            </div>
          </CSSTransition>
        </div>

        <CSSTransition nodeRef={imageRef} in={inProp} timeout={300} classNames="animation-fade">
          <div className={styles.image} ref={imageRef}>
            <Picture 
              imgAttr={selectedProject.image.imgAttr}
              sources={selectedProject.image.sources} />
          </div>
        </CSSTransition>
      </Container>
    </section>
  )
}

export default Cases