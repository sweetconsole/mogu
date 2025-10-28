import { Link } from "react-scroll"
import { headerAssets } from "../../constants/copyright"
import Container from "../Container/Container"
import Picture from "../Picture/Picture"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <Container customStyles={styles.inner}>
        <div className={styles.block}>
          <Link className={styles.logo} to={headerAssets.logo.link}>
            <Picture 
              imgAttr={headerAssets.logo.image.imgAttr} 
              sources={headerAssets.logo.image.sources}
            />
          </Link>

          <nav className={styles.navigation}>
            {headerAssets.links.map((link, key) => (
              <Link className={styles.link} to={link.link} key={key}>{link.title}</Link>
            ))}
          </nav>
        </div>
        
        <button className={styles.button}>{headerAssets.button.text}</button>
      </Container>
    </header>
  )
}

export default Header