'use strict'

const md5 = require('./md5'); // https://github.com/blueimp/JavaScript-MD5

let input = 'ojvtpuvg';
let password = '';
let index = 0;

while(password.length < 8) {
  let hash = md5(input + index);
  
  if(hash.substr(0, 5) == '00000') {
    password += hash.substr(5, 1);
    console.log(` * added to password!`);
  }

  if(index % 100000 == 0) console.log(`(${password}) @ ${index}...`);

  index++
}

console.log(password);
