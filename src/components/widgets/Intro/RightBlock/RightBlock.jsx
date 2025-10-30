import { motion } from "framer-motion"
import { introAssets } from "../../../../constants/copyright"
import Picture from "../../../ui/Picture/Picture"
import Message from "../Message/Message"
import styles from "./RightBlock.module.scss"

const RightBlock = () => {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{introAssets.rightBlock.title}</h2>

      <ul className={styles.users}>
        {introAssets.rightBlock.avatars.map((user, key) => (
          <motion.li 
            className={styles.user} 
            key={key} 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: user.duration }} 
          >
            <Picture 
              imgAttr={user.image.imgAttr} 
              sources={user.image.sources} />

            {user.message !== undefined ? (
              <Message {...user.message} />
            ) : null}
          </motion.li>
        ))}
      </ul>

      <div className={styles.image}>
        <Picture 
          imgAttr={introAssets.rightBlock.image.imgAttr } 
          sources={introAssets.rightBlock.image.sources} />
      </div>
    </div>
  )
}

export default RightBlock