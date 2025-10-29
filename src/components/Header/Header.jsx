import { Link } from "react-scroll"
import { useState } from "react"
import { headerAssets } from "../../constants/copyright"
import Container from "../Container/Container"
import Picture from "../Picture/Picture"
import Menu from "./Menu/Menu"
import styles from "./Header.module.scss"

const Header = () => {
  const [viewMenu, setViewMenu] = useState(false)

  const changeViewMenu = () => {
    setViewMenu(!viewMenu)

    if (viewMenu) {
			document.body.style.overflow = "scroll"
		} else {
			document.body.style.overflow = "hidden"
		}
  }

  return (
    <header className={styles.header}>
      <Menu viewMenu={viewMenu} changeViewMenu={changeViewMenu} />

      <Container customStyles={styles.inner}>
        <div className={styles.block}>
          <Link 
            className={styles.logo} 
            to={headerAssets.logo.link}
            smooth={true}
            duration={500}
          >
            <Picture 
              imgAttr={headerAssets.logo.image.imgAttr} 
              sources={headerAssets.logo.image.sources}
            />
          </Link>

          <nav className={styles.navigation}>
            {headerAssets.links.map((link, key) => (
              <Link 
                className={styles.link} 
                to={link.link} 
                key={key}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <button 
          className={viewMenu ? styles.button_menu_active : styles.button_menu}
          onClick={changeViewMenu}
        >
          <div className={styles.button_menu_line}></div>
          <div className={styles.button_menu_line}></div>
          <div className={styles.button_menu_line}></div>
        </button>
        
        <button className={styles.button}>{headerAssets.button.text}</button>
      </Container>
    </header>
  )
}

export default Header