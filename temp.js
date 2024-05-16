const fs = require("fs");
process.stdout.write("Question Answers with streams");

const questions = ["How are you ?", "Are you serious ?", "Really?"];

let answerStream;

var answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(">");
}

process.stdin.once("data", (data) => {
  let name = data.toString().trim();
  let filename = `./${name}.md`;
  if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
  }
  answerStream = fs.createWriteStream(filename);
  answerStream.write(`Q and A for ${name}\n`);
});

ask(answers.length);

process.stdin.on("data", function (data) {
  let answer = data.toString().trim();
  answerStream.write(`Question: ${questions[answers.length]}\n`);
  answerStream.write(`Answer: ${answer}\n`, () => {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });
  answers.push(answer);
});

process.on("exit", function () {
  answerStream.close();
  process.stdout.write("These are the answers\n");
  process.stdout.write(answers.toString());
});
