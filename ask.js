collectAnswers = require("./lib/collectAnswers");

const questions = ["Hey what is your name ?", "Age ?", "Address ?"];

const obj = collectAnswers(questions, (answers) => {
  console.log("Go F*** yourself !!!");
  console.log(answers);
  process.exit();
});

obj.on("answer", (answer) => {
  console.log("Answer is :=" + answer);
});
