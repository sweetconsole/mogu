import { introAssets } from "../../../../constants/copyright"
import Picture from "../../../general/Picture/Picture"
import styles from "./LeftBlock.module.scss"

const LeftBlock = () => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>{introAssets.leftBlock.title}</h1>
      <p className={styles.description}>{introAssets.leftBlock.description}</p>
          
      <ul className={styles.features}>
        {introAssets.leftBlock.features.map((feature, key) => (
          <li className={styles.feature} key={key}>{feature.text}</li>
        ))}
      </ul>

      <form  className={styles.field}>
        <input className={styles.input} {...introAssets.leftBlock.input} />
        <button 
          className={styles.button} 
          type={introAssets.leftBlock.button.type}
        >
            {introAssets.leftBlock.button.text}

            <Picture
              className={styles.image}
              imgAttr={introAssets.leftBlock.button.arrow.imgAttr}
              sources={introAssets.leftBlock.button.arrow.sources}
            />
        </button>
      </form>
    </div>
  )
}

export default LeftBlock