const name = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const lastname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const email = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;


export const initialValues = {
  name: "",
  lastname: "",
  email: "",
  level: "",
  message: "",
};

export const formatDataValidation = {
  name: (data) => name.test(data),
  lastname: (data) => lastname.test(data),
  email: (data) => email.test(data),
}

export const formValidations = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "* Name required";
  } else if (!formatDataValidation.name(form.name.trim())) {
    errors.name = "* Numbers are not allowed";
  } else if (form.name.trim().length < 3) {
    errors.name = "* Three characters required";
  }

  if (!form.lastname.trim()) {
    errors.lastname = "* Surname required";
  } else if (!formatDataValidation.lastname(form.lastname.trim())) {
    errors.lastname = "* Numbers are not allowed";
  } else if (form.lastname.trim().length < 3) {
    errors.lastname = "* Three characters required";
  }

  if (!form.email.trim()) {
    errors.email = "* Email required";
  } else if (!formatDataValidation.email(form.email.trim())) {
    errors.email = "* Not a valid datatype";
  }

  if (form.level === '' || form.level === 'Select your level' ) {
    errors.level = "* Level required";
  } 

  return errors;
};

export const formIsEmpty = (form) => {
  const array = [];
  for (let [key, value] of Object.entries(form)) {
    if (value === '') array.push(key)
  }
  if (array.length > 1){
    return true
  } else return false

}