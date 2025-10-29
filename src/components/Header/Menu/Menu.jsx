import { Link } from "react-scroll"
import { headerAssets } from "../../../constants/copyright"
import Container from "../../Container/Container"
import styles from "./Menu.module.scss"

const Menu = ({viewMenu, changeViewMenu}) => {
  return (
    <div className={viewMenu ? styles.modal_active : styles.modal}>
      <Container customStyles={styles.block}>
        <nav className={styles.navigation}>
          {headerAssets.links.map((link, key) => (
              <Link 
                className={styles.link} 
                to={link.link} 
                key={key}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={changeViewMenu}
              >
                {link.title}
              </Link>
            ))}
        </nav>
        
        <button className={styles.button}>{headerAssets.button.text}</button>
      </Container>
    </div>
  )
}

export default Menu