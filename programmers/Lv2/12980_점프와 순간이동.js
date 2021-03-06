function solution(n){
    var ans = 0;
    if (n == 1)
      return 1;
  
    while (n != 0){
      if (n % 2 == 1){
        n--;
        ans++;
      } else{
        n /= 2;
      }
    }
    return ans;
  }
  
  function solution(N) {
    let answer = 0;
  
    while (N){
      if (N % 2 === 1){
        answer++;
        N--;
      } else{
        N /= 2;
      }
    }
  
    return answer;
  } // 2021-06-21
  
  // https://programmers.co.kr/learn/courses/30/lessons/68936
  
  console.log("solution : ", solution(5));
  console.log("answer   : ", 2);
  console.log("\n");
  
  console.log("solution : ", solution(6));
  console.log("answer   : ", 2);
  console.log("\n");
  
  console.log("solution : ", solution(5000));
  console.log("answer   : ", 5);
  console.log("\n");