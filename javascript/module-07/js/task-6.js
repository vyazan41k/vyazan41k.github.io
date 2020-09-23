const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur", (event) => {
  inputValidation.classList.add("invalid");
  let str = event.target.value;

  if (str.length === +inputValidation.getAttribute("data-length")) {
    inputValidation.classList.replace("invalid", "valid");
  } else inputValidation.classList.replace("valid", "invalid");
});
