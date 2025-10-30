import { useState } from "react"
import { casesAssets } from "../../../constants/copyright"
import Container from "../../ui/Container/Container"
import Picture from "../../ui/Picture/Picture"
import Info from "./Info"
import styles from "./Cases.module.scss"

const Cases = () => {
  const [selectedCase, setSelectedCase] = useState(0)

  return (
    <section className={styles.section} id="cases">
      <Container customStyles={styles.block}>
       <Info selectedCase={selectedCase} setSelectedCase={setSelectedCase} />

        {casesAssets.map((project, key) => (
          <div className={selectedCase === key ? styles.image_selected : styles.image} key={key}>
            <Picture imgAttr={project.image.imgAttr} sources={project.image.sources} />
          </div>
        ))}
      </Container>
    </section>
  )
}

export default Cases