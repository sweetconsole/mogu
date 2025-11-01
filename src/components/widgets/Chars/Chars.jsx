import { charsAssets } from "../../../constants/copyright"
import Container from "../../general/Container/Container"
import Picture from "../../general/Picture/Picture"
import styles from "./Chars.module.scss"

const Chars = () => {
  return (
    <section className={styles.section} id="chars">
      <Container customStyles={styles.block}>

        <div className={styles.people_1}>
          <Picture imgAttr={charsAssets.people[0].image.imgAttr} sources={charsAssets.people[0].image.sources} />
        </div>
        <div className={styles.people_2}>
          <Picture imgAttr={charsAssets.people[1].image.imgAttr} sources={charsAssets.people[1].image.sources} />
        </div>
        <div className={styles.people_3}>
          <Picture imgAttr={charsAssets.people[2].image.imgAttr} sources={charsAssets.people[2].image.sources} />
        </div>
        <div className={styles.people_4}>
          <Picture imgAttr={charsAssets.people[3].image.imgAttr} sources={charsAssets.people[3].image.sources} />
        </div>
        <div className={styles.people_5}>
          <Picture imgAttr={charsAssets.people[4].image.imgAttr} sources={charsAssets.people[4].image.sources} />
        </div>
        

        <div className={styles.chars}>
          <Picture imgAttr={charsAssets.chars.all.imgAttr} />
        </div>
        <div className={styles.shadows}>
          <Picture imgAttr={charsAssets.shadows.imgAttr} />
        </div>

        <div className={styles.char_m}>
          <Picture imgAttr={charsAssets.chars.charM.imgAttr} />
        </div>
        <div className={styles.char_o}>
          <Picture imgAttr={charsAssets.chars.charO.imgAttr} />
        </div>
        <div className={styles.char_g}>
          <Picture imgAttr={charsAssets.chars.charG.imgAttr} />
        </div>
        <div className={styles.char_u}>
          <Picture imgAttr={charsAssets.chars.charU.imgAttr} />
        </div>
      </Container>
    </section>
  )
}

export default Chars