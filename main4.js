let 동물 = ['척추동물', '어류','척추동물','무척추동물','파충류','척추동물','어류','파충류'];
/* 
  1회: ['척추동물'] #false 1분
  2회: ['척추동물', '어류'] #false 2분
  3회: ['어류',' 척추동물'] #true 1초
  4회: ['어류',' 척추동물',' 무척추동물'] #false 1분
  5회: ['척추동물','무척추동물','파충류'] #false 1분
  6회: ['무척추동물','파충류','척추동물']  #true 1초
  7회: ['파충류','척추동물','어류']  #false 1분
  8회: ['무척추동물','척추동물','파충류']  #true 1초
*/

function solution(동물, 자리){
  let 의자 = [];
  let answer = 0;

  for (var 개별동물 of 동물) {
    if(의자.length < 3){
      if(의자.includes(개별동물)){  // 동일종, 히트되었을때
        의자.splice(의자.indexOf(개별동물), 1);
        의자.push(개별동물);
        answer += 1;
      } else {
        의자.push(개별동물);  // 다른종 , 히트 아닐때
        answer += 60;
      }
    } else {  // 자리가 꽉 찼을때
      if(의자.includes(개별동물)){  // 동일종, 히트되었을때
        의자.splice(의자.indexOf(개별동물), 1);
        의자.push(개별동물);
        answer += 1;
      } else {  // 다른종 , 히트 아닐때
        의자.shift();
        의자.push(개별동물);
        answer += 60;
      }
    }
    console.log(의자);
  }

  return `${parseInt(answer/60, 10)} 분, ${answer%60} 초`;

}

console.log(solution(동물, 3));