let name = 'jiseung';
let age = 20;

function older() {
	age += 1;
}
function setAge() {
	return age;
}

module.exports.name = name;
module.exports.age = age;
module.exports.older = older;
module.exports.setAge = setAge;
