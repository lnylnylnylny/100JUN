const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const score = Number(input[0]);

if(score>=90) console.log('A')
else if(score<90 && score>=80) console.log('B')
else if(score<80 && score>=70) console.log('C')
else if(score<70 && score>=60) console.log('D')
else console.log('F')