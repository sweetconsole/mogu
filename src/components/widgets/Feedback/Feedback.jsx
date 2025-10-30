import { feedbackAssets } from "../../../constants/copyright"
import Container from "../../ui/Container/Container"
import Picture from "../../ui/Picture/Picture"
import styles from "./Feedback.module.scss"

const Feedback = () => {
  return (
    <section className={styles.section} id="feedback">
      <Container>
        <form className={styles.form}>
          <h2 className={styles.title}>{feedbackAssets.form.title}</h2>
          <input className={styles.input} {...feedbackAssets.form.email} />
          <textarea className={styles.textarea} {...feedbackAssets.form.message} />
          <button className={styles.button} type={feedbackAssets.form.button.type}>
            {feedbackAssets.form.button.text}

            <Picture 
              imgAttr={feedbackAssets.form.button.arrow.imgAttr}
              sources={feedbackAssets.form.button.arrow.sources}
            />
          </button>
        </form>
      </Container>

      <div className={styles.cat}>
        <Picture 
          imgAttr={feedbackAssets.cat.body.imgAttr}
          sources={feedbackAssets.cat.body.sources}
        />

        <Picture imgAttr={feedbackAssets.cat.leftEye.imgAttr} />

        <Picture imgAttr={feedbackAssets.cat.rightEye.imgAttr} />
      </div>
    </section>
  )
}

export default Feedback