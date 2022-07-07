const parseUrl = require('./index');

console.log(`-----------------------`);
console.log(`about to call rust`);
console.log(parseUrl.getQuery(`https://github.com/peteyycz/rust-url-parse?now=${Date.now()}`));
console.log(`done calling rust`);
console.log(`-----------------------`);
