const myObj = {};

(function () { 
  function plus(a, b) {
  return a+b;
}
  myObj.plus = plus;
}
)();