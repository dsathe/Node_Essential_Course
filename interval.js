const waittime = 6000;
console.log(`Setting wait time for ${waittime / 1000}`);

const timefinished = () => {
  clearInterval(interv);
  console.log("\nDone");
};

const waitinterval = 500;
let curr_time = 0;

const inc_time = () => {
  curr_time = curr_time + waitinterval;
  let p = Math.floor((curr_time / waittime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting..... ${p}`);
};

const interv = setInterval(inc_time, waitinterval);
setTimeout(timefinished, waittime);
