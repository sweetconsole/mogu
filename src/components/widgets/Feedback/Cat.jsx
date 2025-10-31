import { feedbackAssets } from "../../../constants/copyright"
import Picture from "../../ui/Picture/Picture"
import styles from "./Feedback.module.scss"

const Cat = () => {
  return (
    <div className={styles.cat}>
      <Picture imgAttr={feedbackAssets.cat.body.imgAttr} sources={feedbackAssets.cat.body.sources} />

      {/* <Picture imgAttr={feedbackAssets.cat.leftEye.imgAttr} />
      <Picture imgAttr={feedbackAssets.cat.rightEye.imgAttr} /> */}
    </div>
  )
}

export default Cat