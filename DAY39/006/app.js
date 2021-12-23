const fs = require('fs');

// let 변수 = '지승'; // 사용자 이름
// let 날짜 = new Date();
// fs.rename('./test.png', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
// 	console.log(err);
// });

// fs.readFile('./test.txt', 'utf8', (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });

// fs.readdir('./', (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });

// fs.writeFile('./test2.txt', 'hello world 2', (err) => {
// 	console.log(err);
// });

// fs.appendFile('./test2.txt', 'hello world 3', (err) => {
// 	console.log(err);
// });

// fs.copyFile('./test2.txt', './test3.txt', (err) => {
// 	console.log(err);
// });

fs.mkdir('./yoyo', (err) => {
	console.log(err);
});
