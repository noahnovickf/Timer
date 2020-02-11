//process.stdout.write("\x07");

const beepTimes = process.argv.slice(2);

const timer = beep => {
  for (let val of beep) {
    time = val * 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time);
  }
};

timer(beepTimes);
