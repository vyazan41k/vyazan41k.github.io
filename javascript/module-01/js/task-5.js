const china = "Китай";
const chinaPrice = 100;
const chili = "Чили";
const chiliPrice = 250;
const avstralia = "Австралия";
const avstraliaPrice = 170;
const india = "Индия";
const indiaPrice = 80;
const yamayka = "Ямайка";
const yamaykaPrice = 120;

let userInput = prompt("В какую страну доставить товар?");

if (userInput === null) {
  alert("Вы нажали отмена");
} else {
  switch (userInput.toLowerCase()) {
    case "китай":
      console.log(`Доаствка в ${china} будет стоить ${chinaPrice} кредитов`);
      break;

    case "чили":
      console.log(`Доаствка в ${chili} будет стоить ${chiliPrice} кредитов`);
      break;

    case "австралия":
      console.log(
        `Доаствка в ${avstralia} будет стоить ${avstraliaPrice} кредитов`
      );
      break;

    case "индия":
      console.log(`Доаствка в ${india} будет стоить ${indiaPrice} кредитов`);
      break;

    case "ямайка":
      console.log(
        `Доаствка в ${yamayka} будет стоить ${yamaykaPrice} кредитов`
      );
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
