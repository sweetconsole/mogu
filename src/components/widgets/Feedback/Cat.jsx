import { feedbackAssets } from "../../../constants/copyright"
import Picture from "../../ui/Picture/Picture"
import Eye from "./Eye";
import styles from "./Feedback.module.scss"
import {useMediaQuery} from "../../../hooks/useMediaQuery";

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