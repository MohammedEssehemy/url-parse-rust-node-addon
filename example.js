const urlUtils = require('./index');

console.log(`-----------------------`);
console.log(`about to call rust`);
console.log(urlUtils.getQuery(`https://github.com/peteyycz/rust-url-parse?now=${Date.now()}`));
console.log(`done calling rust`);
console.log(`-----------------------`);
