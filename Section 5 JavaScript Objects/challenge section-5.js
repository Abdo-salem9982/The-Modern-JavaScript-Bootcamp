///////   Object Challenge /////////

// let me = {
//   name: "Abdo",
//   age: 22,
//   location: "Egypt",
// };

// console.log(`${me.name} is ${me.age} and lives in ${me.location}`);
// me.age = me.age + 1;
// console.log(`${me.name} is ${me.age} and lives in ${me.location}`);

///////////////////////////////////////

///////   Object-Function Challenge /////////

// let convertFahrenheit = function (fahrenheit) {
//   let celsius = (fahrenheit - 32) * (5 / 9);
//   let kelvin = (fahrenheit + 459.67) * (5 / 9);
//   return {
//     fahrenheit: fahrenheit,
//     celsius: celsius,
//     kelvin: kelvin,
//   };
// };
// let temps = convertFahrenheit(60);
// console.log(
//   `fahrenheit = ${temps.fahrenheit} and celsius = ${temps.celsius} and kelvin = ${temps.kelvin}`
// );

///////////////////////////////////////

// ///////   objects-references Challenge /////////

// let myAccount = {
//   name: "Abdo Salem",
//   expenses: 0,
//   income: 0,
// };

// let addIncome = function (account, income) {
//   account.income = account.income + income;
// };
// let addExpense = function (account, amount) {
//   account.expenses = account.expenses + amount;
// };

// let resetAccount = function (account) {
//   account.expenses = 0;
//   account.income = 0;
// };

// let getAccountSummary = function (account) {
//   let balance = account.income - account.expenses;
//   return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`;
// };

// addIncome(myAccount, 2000);
// addExpense(myAccount, 2.5);
// addExpense(myAccount, 160);
// console.log(getAccountSummary(myAccount));
// resetAccount(myAccount);
// console.log(getAccountSummary(myAccount));

// ///////////////////////////////////////

///////   String Methods Challenge /////////

// let isValidPassword = function (passwode) {
//   return passwode.length > 8 && !passwode.includes("password");
// };

// console.log(isValidPassword("asdfp"));
// console.log(isValidPassword("abc123!@#$%^&"));
// console.log(isValidPassword("asdfpasdfpoijpassword"));

// ///////////////////////////////////////

///////   Numbers Methods Challenge /////////

let makeGuess = function (guess) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomNum;
};

console.log(makeGuess(1));

// ///////////////////////////////////////
