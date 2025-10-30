import { headerAssets } from "../../../../constants/copyright"
import Container from "../../../ui/Container/Container"
import AnchorLink from "../../../ui/AnchorLink/AnchorLink"
import styles from "./Menu.module.scss"
import { Fragment } from "react/jsx-runtime"

const Menu = ({viewMenu, changeViewMenu}) => {
  return (
    <div className={viewMenu ? styles.modal_active : styles.modal}>
      <Container customStyles={styles.block}>
        <nav className={styles.navigation}>
          {headerAssets.links.map((link, key) => (
            <Fragment key={key}>
              <AnchorLink className={styles.link} to={link.link} onClick={changeViewMenu}>
                {link.title}
              </AnchorLink>
            </Fragment>
          ))}
        </nav>
        
        <button className={styles.button}>{headerAssets.button.text}</button>
      </Container>
    </div>
  )
}

export default Menu