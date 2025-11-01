import { motion } from "framer-motion"
import Picture from "../../../general/Picture/Picture"
import styles from "./Message.module.scss"

const Message = ({text, type, color, cursor, duration}) => {
  return (
    <motion.div className={type === "footnote" ? styles.footnote : styles.bubble} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: duration }}> 
      <div className={styles.block}>
        <p style={{color: color}}>{text}</p>

        {type === "footnote" ? (
          <div className={styles.cursor}>
            <Picture imgAttr={cursor.imgAttr} sources={cursor.sources} />
          </div>
        ) : null}
      </div>
    </motion.div>
  )
}

export default Message