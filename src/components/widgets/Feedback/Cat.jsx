import { feedbackAssets } from "../../../constants/copyright"
import {useMediaQuery} from "../../../hooks/useMediaQuery";
import Picture from "../../general/Picture/Picture"
import Eye from "./Eye";
import styles from "./Feedback.module.scss"

const Cat = () => {
  const desktop= useMediaQuery("(min-width: 1024px)")

  return (
    <div className={styles.cat}>
      <Picture imgAttr={feedbackAssets.cat.body.imgAttr} sources={feedbackAssets.cat.body.sources} />

      {desktop ? (
        <>
          <Eye className={styles.leftEye} />
          <Eye className={styles.rightEye} />
        </>
      ) : null}
    </div>
  )
}

export default Cat