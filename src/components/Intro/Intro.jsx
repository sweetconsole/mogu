import { introAssets } from "../../constants/copyright"
import Container from "../Container/Container"
import Picture from "../Picture/Picture"
import styles from "./Intro.module.scss"

const Intro = () => {
  return (
    <section >
      <Container customStyles={styles.section}>
        <div className={styles.left_block}>
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
                  // sources={introAssets.rightBlock.image.sources}
                />
            </button>
          </form>
        </div>

        <div className={styles.right_block}>
          <h2 className={styles.subtitle}>{introAssets.rightBlock.title}</h2>

          <ul className={styles.users}>
            {introAssets.rightBlock.avatars.map((user, key) => (
              <li className={styles.user} key={key}>
                <Picture 
                  className={styles.user_image} 
                  imgAttr={user.image.imgAttr} 
                  sources={user.image.sources} />
              </li>
            ))}
          </ul>

          <Picture 
            className={styles.image} 
            imgAttr={introAssets.rightBlock.image.imgAttr} 
            sources={introAssets.rightBlock.image.sources} />
        </div>
      </Container>
    </section>
  )
}

export default Intro