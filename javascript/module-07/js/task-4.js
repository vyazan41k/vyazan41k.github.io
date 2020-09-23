let counterValue = 0;

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

decrementBtn.addEventListener("click", decrementFn);
incrementBtn.addEventListener("click", incrementFn);

function decrementFn() {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
}
function incrementFn() {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
}
