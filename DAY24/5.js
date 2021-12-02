let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);
undefined
array
(4) [1, 4, 9, 16]
값1
(4) [2, 8, 18, 32]
function 제곱(x) {
    return x ** 2
}
값2 = array.map(제곱);
(4) [1, 16, 81, 256]
array
(4) [1, 4, 9, 16]
값2
(4) [1, 16, 81, 256]
'1001001010'.replace('1', '#').replace('0', ' ')
'# 01001010'
'1001001010'.replace(/1/g, '#').replace(/0/g, ' ')
'#  #  # # '
array
(4) [1, 4, 9, 16]
array.map(Math.sqrt)
(4) [1, 2, 3, 4]
array.map(Math.sqrt).map(x=>x**3)
(4) [1, 8, 27, 64]
array
(4) [1, 4, 9, 16]
array.map(x=>x**0.5)
(4) [1, 2, 3, 4]0: 11: 22: 33: 4length: 4[[Prototype]]: Array(0)
let data = [{
                반 : 1, 
                번 : 1, 
                이름 : "호준", 
                중간고사점수 : 55
            }, {
                반 : 1, 
                번 : 2, 
                이름 : "길동", 
                중간고사점수 : 60
            }, {
                반 : 1, 
                번 : 3, 
                이름 : "영희", 
                중간고사점수 : 30
            }, {
                반 : 1, 
                번 : 4, 
                이름 : "철수", 
                중간고사점수 : 20
            }, {
                반 : 1, 
                번 : 5, 
                이름 : "규리", 
                중간고사점수 : 100
            }]
undefined
data.map(x => x.중간고사점수)
(5) [55, 60, 30, 20, 100]0: 551: 602: 303: 204: 100length: 5[[Prototype]]: Array(0)
data.map(x => {x.이름:x.중간고사점수})
VM2346:1 Uncaught SyntaxError: Unexpected token ':'
data.map(x => [x.이름,x.중간고사점수])
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]0: (2) ['호준', 55]1: (2) ['길동', 60]2: (2) ['영희', 30]3: (2) ['철수', 20]4: (2) ['규리', 100]length: 5[[Prototype]]: Array(0)
data.map(x => x)
(5) [{…}, {…}, {…}, {…}, {…}]0: {반: 1, 번: 1, 이름: '호준', 중간고사점수: 55}1: {반: 1, 번: 2, 이름: '길동', 중간고사점수: 60}2: {반: 1, 번: 3, 이름: '영희', 중간고사점수: 30}3: {반: 1, 번: 4, 이름: '철수', 중간고사점수: 20}4: {반: 1, 번: 5, 이름: '규리', 중간고사점수: 100}length: 5[[Prototype]]: Array(0)
Object.entries()
VM2427:1 Uncaught TypeError: Cannot convert undefined or null to object
    at Function.entries (<anonymous>)
    at <anonymous>:1:8
(익명) @ VM2427:1
Object.entries(data)
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]0: (2) ['0', {…}]1: (2) ['1', {…}]2: (2) ['2', {…}]3: (2) ['3', {…}]4: (2) ['4', {…}]length: 5[[Prototype]]: Array(0)
data.map(x => x.중간고사점수)
(5) [55, 60, 30, 20, 100]
let s = 0;
data.map(x => x.중간고사점수).forEach(y => s+=y)
undefined
s
265
function 제곱(x) {
    return x ** 2
}

let result = [1, 2, 3, 4].forEach(제곱);
undefined
result
undefined
let array = [1, 2, 3, 4]
function 제곱(x) {
    return x ** 2
}

array.forEach(제곱);
undefined
array
(4) [1, 2, 3, 4]
let sample = array.forEach(x => x **2);
undefined
sample
undefined
array
(4) [1, 2, 3, 4]
let array = [1, 2, 3, 4]
let result = []
function 제곱(x) {
    return x ** 2
}

array.forEach(x => result.push(x**2));
undefined
result
(4) [1, 4, 9, 16]
let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
undefined
let newData = data.map(a => a.map(n => n *2));
undefined
newData
(3) [Array(3), Array(3), Array(3)]0: (3) [2, 4, 6]1: (3) [8, 10, 12]2: (3) [14, 16, 18]length: 3[[Prototype]]: Array(0)