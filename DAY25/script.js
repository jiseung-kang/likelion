let lottoArr = [];
let lottoSet = new Set();
function lottoGenerator() {
  while (lottoSet.size < 6) {
    let result = randomNum(1, 46);
    // let isGot = false;
    lottoSet.add(result);
    // 중복 판단
    // lottoArr.forEach(element => {
    //     if (element === result) {
    //         isGot = true;
    //     }
    // });

    // 중복이 없다면 배열에 추가
    // if (!isGot) {
    //     lottoArr.push(result);
    // }

    // if (!lottoArr.includes(result)) {
    //     lottoArr.push(result);
    // }
  }
  return lottoSet;
}
