import {screen,enrollNowContent} from '../hooks/useSetContents'
import {MySection} from "../templates/enrollNowStyles";
import styles from './enrollnow.module.scss';

export const EnrollNow = () => {
  
    return (
        
        <MySection pathlocation={screen} className={styles.section}>
            
            <div className={styles.btnContainer}>
                <button className={styles.btn}>{enrollNowContent}</button>
            </div>

            <div className={styles.imgContainer}>
                <div className={styles.papers}>
                    <img className={styles.large} src="assets/img/hero/post-it.svg" alt="paper" />
                    <img className={styles.small} src="assets/img/hero/post-it.svg" alt="paper" />
                </div>
                <div className={styles.lampContainer}>
                    <img className={styles.lamp} src="assets/img/hero/lampara.svg" alt="lamp" />
                </div>
            </div>
        
        </MySection>
  )
}
