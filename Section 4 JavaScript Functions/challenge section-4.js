///////   Function Challenge /////////

// Convert farenheit into celsius

// let ConvertFarenheitIntoCelsius = function (farenheit) {
//   let celsius = ((farenheit - 32) * 5) / 9;
//   return celsius;
// };

// let value = ConvertFarenheitIntoCelsius(32);
// let otherValue = ConvertFarenheitIntoCelsius(68);
// console.log(value);
// console.log(otherValue);

///////////////////////////////////////

///////   Arguments Challenge /////////

// let getTip = function (total, tipPercent = 12) {
//   return total * (tipPercent / 100);
// };

// let tip = getTip(100, 12);
// console.log(tip);

///////////////////////////////////////

///////   Tamplate String Challenge /////////

// let getTip = function (total, tipPercent = 12) {
//   let tip = total * (tipPercent / 100);
//   return `A ${tipPercent}% tip on $${total} would be $${tip}`;
// };

// let tip = getTip(100, 12);
// console.log(tip);

///////////////////////////////////////

///////   Grade calculator Challenge /////////

const gradeCalc = function (score, total) {
  const percent = (score / total) * 100;
  let letterGrade = "";
  if (percent >= 90) {
    letter = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  return `You got a ${letterGrade} (${percent}%)!`;
};

const result = gradeCalc(10, 20);
console.log(result);
///////////////////////////////////////
