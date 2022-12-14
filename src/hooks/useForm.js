import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import { animateScroll as scroll} from 'react-scroll';
import Swal from 'sweetalert2';

export const useForm = (initialValues, dataValidations) => {

    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const navigate = useNavigate();
    
    const handleChange = (e) => { const { name, value } = e.target; setForm({ ...form, [name]: value }) };
    
    const handleBlur = (e) => {handleChange(e); setErrors(dataValidations(form))};
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(dataValidations(form));
      console.log('enviando formulario');
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/86b4a4844fecfb82aa37c3b88e5c4e82",{
          body:form,
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then((res)=>{
            setLoading(false);
            setResponse(true);
        })
        .then((res)=>{
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Information sent successfully!'
          })

        })
        .then((res)=>{
          setForm(initialValues);
        })
        .then((res)=>{
            navigate('/home');
          })
          .then((res)=>{
            setTimeout(() => {
              scroll.scrollToTop();
            }, 500);
          })
        


    };

    return { form, errors, handleChange, handleBlur, loading,response,handleSubmit };
  }