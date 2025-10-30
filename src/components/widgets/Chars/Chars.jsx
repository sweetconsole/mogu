import { charsAssets } from "../../../constants/copyright"
import Container from "../../ui/Container/Container"
import Picture from "../../ui/Picture/Picture"
import styles from "./Chars.module.scss"

const Chars = () => {
  return (
    <section className={styles.section} id="chars">
      <Container customStyles={styles.block}>

        <div className={styles.people_1}>
          <Picture imgAttr={charsAssets.people[0].image.imgAttr} />
        </div>

        <div className={styles.people_2}>
          <Picture imgAttr={charsAssets.people[1].image.imgAttr} />
        </div>

        <div className={styles.people_3}>
          <Picture imgAttr={charsAssets.people[2].image.imgAttr} />
        </div>

        <div className={styles.people_4}>
          <Picture imgAttr={charsAssets.people[3].image.imgAttr} />
        </div>

        <div className={styles.people_5}>
          <Picture imgAttr={charsAssets.people[4].image.imgAttr} />
        </div>
        

        <div className={styles.chars}>
          <Picture imgAttr={charsAssets.chars.all.imgAttr} />
        </div>
        
        <div className={styles.shadows}>
          <Picture imgAttr={charsAssets.shadows.imgAttr} />
        </div>
      </Container>
    </section>
  )
}

export default Chars