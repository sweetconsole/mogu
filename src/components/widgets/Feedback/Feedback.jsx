import { feedbackAssets } from "../../../constants/copyright"
import Container from "../../general/Container/Container"
import Picture from "../../general/Picture/Picture"
import Cat from "./Cat"
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

      <Cat />
    </section>
  )
}

export default Feedback