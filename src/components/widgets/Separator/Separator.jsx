import { separatorAsset } from '../../../constants/copyright'
import Picture from '../../ui/Picture/Picture'
import styles from "./Separator.module.scss"

const Separator = () => {
  return (
    <div className={styles.block}>
      <Picture
        imgAttr={separatorAsset.imgAttr}
        sources={separatorAsset.sources}
      />
    </div>
  )
}

export default Separator