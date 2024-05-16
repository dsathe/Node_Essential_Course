const readline = require("readline");
const { eventEmitter } = require("events");
const { EventEmitter } = require("stream");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (questions, done) => {
  const answers = [];

  const emit = new EventEmitter();

  const question_answered = (answer) => {
    answers.push(answer.trim());
    emit.emit("answer", answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], question_answered);
    } else {
      done(answers);
    }
  };

  rl.question(questions[0], question_answered);

  return emit;
};
