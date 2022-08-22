import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import {formValidations,initialValues,formIsEmpty,} from "../helpers/formValidations";
import { Loader } from '../components/Loader';
import styles from './contactContainer.module.scss';
import { EnrollNow } from '../components/EnrollNow';


export const ContactContainer = () => {

  const {form,errors,handleChange,handleBlur,loading,handleSubmit} = useForm(initialValues, formValidations);

  const navigate = useNavigate();
  const handleToHome = () =>{navigate('/home')};


  return (
    <section className={styles.contactSection}>
        
        <div className={styles.titleContainer}>
          <img className={styles.title} src="assets/img/contactus/contact-puntos.svg" alt="about us" />
        </div>

        <div className={styles.sayHolaContainer}>
          <img className={styles.img} src="assets/img/contactus/say.svg" alt="about us" />
        </div>

        <div className={styles.contactContainer}>
          
          <div className={styles.faqsContainer}>
            <div className={styles.doubts}>ANY DOUBTS?</div>
            <div className={styles.faqs}>FAQs</div>
          </div>

          <div className={styles.toHomeContainer}>
            <span onClick={handleToHome} className={styles.toHome}></span>
            <span className={styles.actualPage}>Contact Us</span>
          </div>

          

          <form className={`${styles.formContainer}` } onSubmit={handleSubmit}>

                <div className={styles.nameLastnameContainer}>
                  <div className={`${styles.nameContainer} ${styles.inputContainers}`}>
                    <label className={`${styles.labels} ${styles.labelName}`} htmlFor="name">Name</label>
                    <input
                      className={errors.name ? `${styles.inputsError}` : `${styles.inputs}`}
                      type="text"
                      id="name"
                      name="name"
                      value={form.name || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      />
                      { errors.name && <span className={`${styles.errorsMsg} ${styles.errorsMsgName}`}>{errors.name}</span>}
                  </div>

                   <div className={`${styles.lastNameContainer} ${styles.inputContainers}`}> 
                    <label className={`${styles.labels} ${styles.labelLastName}`} htmlFor="lastname">Surname</label>
                    <input
                      className={ errors.lastname ? `${styles.inputsError}` :`${styles.inputs} ${styles.inputLastName}`}
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={form.lastname || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      />
                      { (errors.lastname) && <span className={styles.errorsMsg}>{errors.lastname}</span>}
                  </div>  
                </div>

                <div className={`${styles.emailContainer} ${styles.inputContainers}` }> 
                    <label className={`${styles.labels} ${styles.labelEmail}`} htmlFor="email">Email</label>
                    <input
                      className={errors.email ? `${styles.inputsError}` : `${styles.inputs} ${styles.inputemail}`}
                      type="email"
                      id="email"
                      name="email"
                      value={form.email || ""}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                    />
                    { errors.email && <span className={styles.errorsMsg}>{errors.email}</span>}
                </div>

                <div className={`${styles.levelContainer} ${styles.inputContainers}`}> 
                    <label className={`${styles.labels} ${styles.labelLevel}`} htmlFor="level">Language Level</label>
                    <select
                        className={errors.level ? `${styles.inputs} ${styles.inputLevelError}` : `${styles.inputs} ${styles.inputLevel}`}
                        type="text"
                        id="level"
                        name="level"
                        value={form.level || ""}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                    >
                        <option className={styles.disabledOption} defaultValue="level">
                          Select your level
                        </option>
                        <option className={styles.selectOption} value="A1">A1-BREAKTHROUGH OR BEGINNER</option>
                        <option className={styles.selectOption} value="A2">A2-WAY STAGE OR ELEMENTARY</option>
                        <option className={styles.selectOption} value="B1">B1-THRESHOLD OR INTERMEDIATE</option>
                        <option className={styles.selectOption} value="B2">B2-VANTAGE OR UPPER INTERMEDIATE</option>
                        <option className={styles.selectOption} value="C1">C1-EFFECTIVE OPERATIONAL PROFICIENCY OR ADVANCED</option>
                        <option className={styles.selectOption} value="C2">C2-MASTERY OR PROFICIENCY</option>
                    </select>
                        { errors.level && <span className={styles.errorsMsg}>{errors.level}</span>}
                </div>

                <div className={`${styles.messageContainer} ${styles.inputContainers}`}> 
                    <label className={`${styles.labels} ${styles.labelMessage}`} htmlFor="message">Your Message</label>
                    <textarea
                      className={`${styles.inputs} ${styles.inputMessage}`}
                      type="text"
                      id="message"
                      name="message"
                      value={form.message || ""}
                      onBlur={handleBlur}
                      maxLength="250"
                      onChange={handleChange}
                    />
                </div>

                <button 
                  type='submit'
                  className={styles.btn} 
                  onClick={handleSubmit}
                  disabled={
                    Object.entries(errors).length !== 0 ||
                    formIsEmpty(form) === true
                  }
                  >
                  {loading ? <Loader/> : 'SUBMIT'}
                </button>
          </form>
        </div>

        <div className={styles.contactImgContainer} >
          <div className={styles.imgContainer}>
            <img className={styles.logoImg} src="assets/img/contactus/logo-ig.svg" alt="instagram" />
            <img className={styles.titleImg} src="assets/img/contactus/follow.svg" alt="instagram" />
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.logoImg} src="assets/img/contactus/logo-messenger.svg" alt="messenger" />
            <img className={styles.titleImg} src="assets/img/contactus/contact.svg" alt="messenger" />          
          </div>
        </div>

        <EnrollNow/>
    </section>
  )
}
