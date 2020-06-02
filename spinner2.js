let spinArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 100;
for (let item of spinArr) {
  setTimeout(() => {
    process.stdout.write(`\r ${item}`);
  }, time);
  time += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, time);
