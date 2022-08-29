import { EnrollNow } from './EnrollNow'
import styles from './ourTeachers.module.scss'

export const OurTeachers = () => {
  return (
    <section className={styles.ourTeachersSection}>
        
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                Our Teachers
            </div>
            <span className={styles.line}></span>
        </div>
        
        <div className={styles.textContainer}>
            <p className={styles.text}>
                Our Comprehensive History Course has been carefully designed by the two teachers responsible for delivering it: Mr. Agustín Claret and Mr. Fernando Laborde. They are two International Relations graduates from Universidad del Salvador, a well-known local institution, and share a profound interest in Argentine history, politics, and economic development. <span className={styles.boldText}>They have been teaching introductory courses and seminars on Argentine History for seven years.</span>
            </p>
        </div>

        <div className={styles.teachersContainer}>
            <div className={styles.teachersCard}>
                <p className={styles.teacherName}>AGUSTIN CLARET</p>
                <img className={styles.teacherPhoto} src="assets/img/ourteachers/profe.png" alt="teacher photo" />
                <img className={styles.teacherLinkedin} src="assets/img/ourteachers/linkedin.svg" alt="linkedin" />
            </div>
            <div className={styles.teachersCard}>
                <p className={styles.teacherName}>FERNANDO LABORDE</p>
                <img className={styles.teacherPhoto} src="assets/img/ourteachers/profe2.png" alt="teacher photo" />
                <img className={styles.teacherLinkedin} src="assets/img/ourteachers/linkedin.svg" alt="linkedin" />
            </div>
        </div>



        <EnrollNow/>

    </section>
  )
}
