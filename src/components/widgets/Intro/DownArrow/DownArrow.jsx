import { Link } from "react-scroll"
import Picture from "../../../ui/Picture/Picture"
import styles from "./DownArrow.module.scss"

const DownArrow = ({image, link}) => {
  return (
    <Link className={styles.link} to={link} smooth={true} offset={-80} duration={500}>
      <Picture imgAttr={image.imgAttr} sources={image.sources} />
    </Link>
  )
}

export default DownArrow