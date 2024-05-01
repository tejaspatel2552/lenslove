const validateFirstName = (formData, errors) => {
  if (!formData || !formData.firstName.trim()) {
    errors.firstName = "Please enter first name";
  }
};

const validateLastName = (formData, errors) => {
  if (!formData || !formData.lastName.trim()) {
    errors.lastName = "Please enter last name";
  }
};

// const validateUserName = (formData, errors) => {
//   console.log("formData in validateUserName:", formData);

//   if (!formData || !formData.username.trim()) {
//     console.log("Error: Username is empty or undefined");
//     errors.username = "Please enter username";
//   } else if (!/^[a-zA-Z0-9_\-]+$/.test(formData.username.trim())) {
//     console.log("Error: Invalid characters in username");
//     errors.username =
//       "Username can only contain alphabets, numbers, underscores, or hyphens";
//   }
// };

const validateEmail = (formData, errors) => {
  if (!formData || !formData.email.trim()) {
    errors.email = "Please enter email";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      formData.email.trim()
    )
  ) {
    errors.email = "Please enter a valid email address";
  }
};

const validatePhone = (formData, errors) => {
  if (!formData || !formData.phone.trim()) {
    errors.phone = "Please enter phone number";
  } else if (!/^\d{10}$/.test(formData.phone.trim())) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }
};

const validatePassword = (formData, errors) => {
  if (!formData || !formData.password.trim()) {
    errors.password = "Please enter password";
  }
};

export {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhone,
  validatePassword,
};
