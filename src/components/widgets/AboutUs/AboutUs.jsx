import { aboutAssets } from "../../../constants/copyright"
import Container from "../../ui/Container/Container"
import Picture from "../../ui/Picture/Picture"
import Points from "./Points"
import styles from "./AboutUs.module.scss"

const AboutUs = () => {
  const getTitleStyles = (item) => {
    return { color: item.colors.title ? item.colors.title : null }
  }

  return (
    <section className={styles.section} id="about">
      <Container customStyles={styles.grid}>
        {aboutAssets.map((item, key) => (
          <div className={styles.block} style={item.colors} key={key}> 
            <div className={styles.image}>
              {item.image ? (
                <Picture imgAttr={item.image?.imgAttr} sources={item.image?.sources} />
              ) : null}
            </div>

            <h2 className={styles.title} style={getTitleStyles(item)}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>

            {item.points ? <Points points={item.points} /> : null}
          </div>
        ))}
      </Container>
    </section>
  )
}

export default AboutUs