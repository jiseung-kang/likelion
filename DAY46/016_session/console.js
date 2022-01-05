//콘솔창에서 입력 후 test() 함수를 실행하세요.
async function test() {
      const res = await fetch('/secret', {
          method:'GET',
          headers:{
              'Content-Type' : 'application/json',
              'Authorization' : 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyLsnoTsi5xpZCI6ImhlbGxvIiwiaWF0IjoxNjM1NTc3MDk0LCJleHAiOjE2MzU1NzczOTR9.H-jNCxjJAHKg0lm-O-v_ZnbOhvlYqaQqi_p0Gqz9OxU'
      },
  })
  const resText = await res.text()
  console.log(resText)
  }