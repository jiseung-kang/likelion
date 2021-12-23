const fs = require('fs');

fs.readFile('./username.csv', 'utf8', (err, csvdata) => {
	let users = csvdata.split('\n');
	let user = [];
	for (let u of users) {
		user.push(u.split(', '));
	}
	user.shift[0];
	for (let u of user) {
		if (u == '') {
			continue;
		}
		fs.mkdir(u[0], (err) => {
			console.log(err);
		});

		fs.appendFile(`./${u[0]}/userinfo.txt'`, `Username : ${u[0]}\nIdentifier : ${u[1]}\nJob : ${u[2]}`, (err) => {
			console.log(err);
		});
	}
});
