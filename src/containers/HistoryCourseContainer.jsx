import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { OurTeachers } from '../components/OurTeachers';
import styles from './historyCourseContainer.module.scss';

export const HistoryCourseContainer = () => {

  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/argentine');
    scroll.scrollToTop();
  }



  return (
    <section className={styles.historySection}>
      <div className={styles.container}>

        <div className={styles.toHomeContainer}>
          <span onClick={handleToHome} className={styles.toHome}></span>
          <span className={styles.actualPage}>Comprehensive History Course</span>
        </div>

        <div className={styles.titleContainer}>
          <div className={styles.title}>COMPREHENSIVE HISTORY COURSE</div>
          <div className={styles.secondTitle}>Argentina: From Pre-Columbian Times to the Present</div>
        </div>

        <div className={`${styles.cardContainer} ${styles.firstCardContainer} `}>

          <div className={styles.photoFirstContainer}>
            <img className={styles.photoFirst} src="assets/img/history/argentinian.png" alt="photo" />
            <button className={styles.btnFirst}>Enroll Now</button>
          </div>

          <div className={styles.boxGeneralContainer}>

            <div className={styles.boxContainer}>
              <div className={`${styles.logoContainer}`}>
                <img className={styles.logo} src="/assets/img/history/online.svg" alt="schedule" />
                <p className={styles.textLogo}>ONLINE</p>
              </div>
              <div className={styles.textContainer}>
                <p className={styles.textLogoDesktop}>ONLINE</p>
                <p className={styles.text}>All our classes take place online on Zoom</p>
              </div>
            </div>

            <div className={styles.boxContainer}>
              <div className={`${styles.logoContainer}`}>
                <img className={styles.logo} src="/assets/img/history/sessions.svg" alt="schedule" />
                <p className={styles.textLogo}>SESSIONS</p>
              </div>
              <div className={styles.textContainer}>
                <p className={styles.textLogoDesktop}>SESSIONS</p>
                <p className={styles.text}>One lesson per week. 16 sessions of 1 hour</p>
              </div>
            </div>

            <div className={styles.boxContainer}>
              <div className={`${styles.logoContainer}`}>
                <img className={styles.logo} src="/assets/img/history/coordination.svg" alt="schedule" />
                <p className={styles.textLogo}>COORDINATION</p>
              </div>
              <div className={styles.textContainer}>
                <p className={styles.textLogoDesktop}>COORDINATION</p>
                <p className={`${styles.text} ${styles.textLink} `}>Class size to be coordinated with interested participants</p>
              </div>
            </div>

          </div>
        </div>


        <div className={styles.secondCard}>
          <div className={styles.textSecondCardContainer}>
            <div className={styles.titleSecondCardContainer}>
              <p className={styles.titleSecondCard}>ABOUT THE COURSE</p>
            </div>
            <div className={styles.textSecondCardContainer}>
              <div className={styles.titleSecondCardContainerDesktop}>
                <p className={styles.titleSecondCardDesktop}>ABOUT THE COURSE</p>
              </div>
              <div className={styles.firstText}>
                <div className={styles.first}>This course is intended for absolute beginners with no prior knowledge of Argentine history.</div>
                <div className={styles.second}>We open our study on the eve of contact between South America, Europe, and Africa and end just after the current president's electoral victory.</div>
                <div className={styles.third}>Along the way, we’ll see the rise and fall of democracy, the clash and encounter of cultures, military coups, political intrigue, and war. In the final part of the course, we will concentrate on current events and political actors.</div>

              </div>
            </div>
            <div className={styles.imgSecondCardContainer}>
              <img className={styles.imgSecondCard} src="assets/img/regular/about.png" alt="photo" />
            </div>
          </div>
        </div>

        <div className={styles.thirdCard}>
          <div className={styles.imgThirdCardContainer}>
            <img className={styles.imgThirdCard} src="assets/img/history/objectives.png" alt="photo" />
          </div>
          <div className={styles.thirdCardContainer}>
            <div className={styles.titleThirdCardContainer}>
              <p className={styles.titleThirdCard}>OBJECTIVES</p>
            </div>
            <div className={styles.textThirdCardContainer}>
              <div className={styles.thirdCardText}>
                <ul className={styles.thirdCardText}>
                  <li className={styles.thirdCardTextLi}>Knowledge of a basic narrative of Argentine history; political, economic, social, and cultural</li>
                  <li className={styles.thirdCardTextLi}>Knowledge of common institutions in Argentine society and how they have affected different groups</li>
                  <li className={styles.thirdCardTextLi}>Understanding of America’s evolving relationship with the rest of the world</li>
                  <li className={styles.thirdCardTextLi}>Knowledge of the major events, ideas, trends, and problems in Argentine history</li>
                  <li className={styles.thirdCardTextLi}>An ability to explain how the past has shaped the present and to understand the ongoing challenges the country faces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.syllabusContainer}>

          <div className={styles.syllabusTitle}>
            <div className={styles.title}>SYLLABUS</div>
            <span className={styles.titleLine}></span>
          </div>

          <div className={styles.syllabusTextContainer}>



            <div className={`${styles.syllabusTextOne} ${styles.syllabusTextAll}`}>
                <div className={styles.bar}></div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}><div className={styles.number}>1</div></div>
                <div className={styles.syllabusText}>Native societies</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>2</div></div>
                <div className={styles.syllabusText}> The Age of Enlightenment and its impact on the Colony</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>3</div></div>
                <div className={styles.syllabusText}>The May Revolution and the War of Independence</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>4</div></div>
                <div className={styles.syllabusText}>State formation and national identity</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>5</div></div>
                <div className={styles.syllabusText}>Immigration and the modern state</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>6</div></div>
                <div className={styles.syllabusText}>The Centennial, the Sáenz Peña Law, and the Radical administrations</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>7</div></div>
                <div className={styles.syllabusText}>The Infamous Decade, Conservative administrations and the origins of Peronism</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>8</div></div>
                <div className={styles.syllabusText}>Argentina during the Second World War</div>
              </div>
              <div className={styles.syllabusitems}>
                <div className={styles.syllabusNumber}> <div className={styles.number}>9</div></div>
                <div className={styles.syllabusText}>Rise and Fall of Perón</div>
              </div>
              </div>

              <div className={`${styles.syllabusTextTwo} ${styles.syllabusTextAll}`}>
              <div className={styles.barTwo}></div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>10</div></div>
                  <div className={styles.syllabusText}>The "Liberating Revolution"</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>11</div></div>
                  <div className={styles.syllabusText}>Military rule and Developmentalism</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>12</div></div>
                  <div className={styles.syllabusText}>The return of Perón and the war against subversion</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>13</div></div>
                  <div className={styles.syllabusText}>"The Process" and human rights violations</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>14</div></div>
                  <div className={styles.syllabusText}>Malvinas War and the democratic transition</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>15</div></div>
                  <div className={styles.syllabusText}>The Neoliberal paradigm</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>16</div></div>
                  <div className={styles.syllabusText}>The economic crisis of 2001</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>17</div></div>
                  <div className={styles.syllabusText}>The Kirchner administration</div>
                </div>
                <div className={styles.syllabusitems}>
                  <div className={styles.syllabusNumber}> <div className={styles.number}>18</div></div>
                  <div className={styles.syllabusText}>Contemporary politics and final discussions</div>
                </div>
              </div>
            
          </div>


        </div>

        <button className={styles.downloadButton}>Download PDF</button>


      </div>

      <OurTeachers/>
    </section>

  )
}
