import { introAssets } from "../../../constants/copyright"
import Container from "../../general/Container/Container"
import LeftBlock from "./LeftBlock/LeftBlock"
import RightBlock from "./RightBlock/RightBlock"
import DownArrow from "./DownArrow/DownArrow"
import styles from "./Intro.module.scss"

const Intro = () => {
  return (
    <section >
      <Container customStyles={styles.section}>
        <LeftBlock />
        <RightBlock />
        <DownArrow {...introAssets.downArrow} />
      </Container>
    </section>
  )
}

export default Intro