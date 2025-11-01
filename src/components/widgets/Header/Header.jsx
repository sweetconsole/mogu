import { Fragment, useState } from "react"
import { headerAssets } from "../../../constants/copyright"
import Container from "../../general/Container/Container"
import Picture from "../../general/Picture/Picture"
import AnchorLink from "../../general/AnchorLink/AnchorLink"
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
          <AnchorLink className={styles.logo} to={headerAssets.logo.link}>
            <Picture imgAttr={headerAssets.logo.image.imgAttr} sources={headerAssets.logo.image.sources} />
          </AnchorLink>

          <nav className={styles.navigation}>
            {headerAssets.links.map((link, key) => (
              <Fragment key={key}>
                <AnchorLink className={styles.link} to={link.link} index={key}>
                  {link.title}
                </AnchorLink>
              </Fragment>
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