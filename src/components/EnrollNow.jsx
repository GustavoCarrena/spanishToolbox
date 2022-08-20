import { useNavigate } from "react-router-dom";
import { animateScroll as scroll} from 'react-scroll';
import {useSetContents} from "../hooks/useSetContents";
import {MySection, MyBtnContainer,MyBtn, MyPapersContainer,MyLampContainer} from "../templates/enrollNowStyles";
import styles from './enrollnow.module.scss';

export const EnrollNow = () => {

    const {screen, enrollTextBtn} = useSetContents();
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (screen === 'about') {
            navigate('/contact');
            scroll.scrollToTop();
        }
    }


    return (
        
        <MySection pathlocation={screen} className={styles.section}>
            
            <MyBtnContainer pathlocation={screen} className={styles.btnContainer}>
                <MyBtn pathlocation={screen} className={styles.btn}  onClick={handleNavigate}>{enrollTextBtn}</MyBtn>
            </MyBtnContainer>

            <div className={styles.imgContainer}>
                <MyPapersContainer pathlocation={screen} className={styles.papers}>
                    <img className={styles.large} src="assets/img/hero/post-it.svg" alt="paper" />
                    <img className={styles.small} src="assets/img/hero/post-it.svg" alt="paper" />
                </MyPapersContainer>
                <MyLampContainer pathlocation={screen} className={styles.lampContainer}>
                    <img className={styles.lamp} src="assets/img/hero/lampara.svg" alt="lamp" />
                </MyLampContainer>
            </div>
        
        </MySection>
  )
}
