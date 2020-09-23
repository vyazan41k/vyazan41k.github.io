let credits = 23580;
const pricePerDroid = 3000;

let userInput = prompt("Сколько дроидов хотите купить?");

if (userInput === null) {
  console.log("Отменено пользователем");
} else {
  const totalPrice = userInput * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    alert(
      `Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
    );
  }
}
