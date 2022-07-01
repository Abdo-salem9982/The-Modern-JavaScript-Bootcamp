// Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Deafult arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  return `name ${name} Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);
