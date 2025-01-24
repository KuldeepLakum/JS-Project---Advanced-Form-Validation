const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
    // console.log(e);
  const name = document.getElementById("fullname");
  const email = document.getElementById("email");
  const contact = document.getElementById("contectnum");
  const password = document.getElementById("password");
  const confirmpass = document.getElementById("confirmpass")
  const city = document.getElementById("city");
  const country = document.getElementById("country");
  const successMessage = document.getElementById("successMessage");
  let isValid = true;
  let firstinvalidfield = null;
  function validateFiled(field, regex, errorMessage) {
    console.log(field.value.trim());
    // console.log(field);
    const errorElement = field.nextElementSibling;
    if (!regex.test(field.value.trim())) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
      if (!firstinvalidfield) {
        firstinvalidfield = field;
      }
      isValid = false;
    } else {
      errorElement.style.display = "none";
    }
  }
  validateFiled(fullname, /^[a-zA-Z0-9\s]+$/, "Name must containe only letters");
  validateFiled(email, /^\S+@\S+\.\S+$/, "enter a valid email Addresss");
  validateFiled(contectnum, /^\d{10}$/, "contact must be a 10 digit number");
  validateFiled(city, /^[a-zA-Z\s]+$/, "City must contain only letters.");
  validateFiled(country, /^[a-zA-Z\s]+$/, "Country must contain only letters.");
  validateFiled(
    password,
    /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/,
    "Password must have 8+ chars, a number, a special char, and an uppercase."
  );
  if (confirmpass.value.trim() !== password.value.trim()) {
    confirmpass.nextElementSibling.textContent = "Password must match";
    confirmpass.nextElementSibling.style.display = "block";
    if (!firstinvalidfield) {
      firstinvalidfield = confirmpass;
    }
    isValid = false;
  } else {
    confirmpass.nextElementSibling.style.display = "none";
  }
  if (isValid) {
    const formData = {
        fullname: name.value.trim(),
      Email: email.value.trim(),
      contectnum: contact.value.trim(),
      password: password.value.trim(),
      City: city.value.trim(),
      Country: country.value.trim(),
    };
    console.log("form Data Submitted", formData);
    alert("Form submitted successfully.");
    // successMessage.textContent = "Form submitted successfully.";
    successMessage.style.display = "block";
    // document.getElementById("form").reset();
  } else {
    successMessage.textContent = "Form submitted successfully.";
    successMessage.style.display = "none";
  }
});
// console.log(form);
function togglebutton(togglebuttonid, passwordFieldid) {
  const togglebutton = document.getElementById(togglebuttonid);
  const passwordfieid = document.getElementById(passwordFieldid);
  togglebutton.addEventListener("click", () => {
    if (passwordfieid.type === "password") {
      passwordfieid.type = "text";
      togglebutton.textContent = "🙈";
        passwordfieid.type = "password";
    } else {
      passwordfieid.type = "password";
      togglebutton.textContent = "👁️";
        passwordfieid.type = "text";
    }
  });
}
togglebutton("togglePassword", "password");
togglebutton("togglePasswordconfirm", "confirmpass");