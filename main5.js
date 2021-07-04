graph = {100: new Set([67, 66]),
  67: new Set([100, 82, 63]),
  66: new Set([100, 73, 69]),
  82: new Set([67, 61, 79]),
  63: new Set([67]),
  73: new Set([66]),
  69: new Set([66, 65, 81]),
  61: new Set([82]),
  79: new Set([82, 87, 77]),
  65: new Set([69, 84, 99]),
  81: new Set([69]),
  87: new Set([79, 31, 78]),
  77: new Set([79]),
  84: new Set([65]),
  99: new Set([65]),
  31: new Set([87]),
  78: new Set([87])};

function 깊이우선탐색(graph, start){
  let 방문 =[];
  let stack=[start];

  while (stack){
    let n =0; //다음 방문할 노드
    n =  stack.pop();
    if(!방문.includes(n)){
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
      for (var v of 차집합){
        stack.push(v);
      }
      // console.log(`방문: ${방문}`);
      // console.log(`stack: ${stack}`);
    }
    if (stack.length ==0){
      break
    }
  }
  return 방문
}

function 깊이우선탐색최댓값(graph, start){
  let 방문 =[];
  let stack=[start];

  while (stack){
    let n =0; //다음 방문할 노드
    n =  stack.pop();
    if(!방문.includes(n)){
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
      if([...차집합].length == 0){
        break
      }
      stack.push(Math.max(...차집합));
      
      // console.log(`방문: ${방문}`);
      // console.log(`stack: ${stack}`);
    }
    if (stack.length ==0){
      break
    }
  }
  return 방문
}

function 깊이우선탐색최소값(graph, start){
  let 방문 =[];
  let stack=[start];

  while (stack){
    let n =0; //다음 방문할 노드
    n =  stack.pop();
    if(!방문.includes(n)){
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
      if([...차집합].length == 0){
        break
      }
      stack.push(Math.min(...차집합));
      
      // console.log(`방문: ${방문}`);
      // console.log(`stack: ${stack}`);
    }
    if (stack.length ==0){
      break
    }
  }
  return 방문
}

결과값_깊이우선탐색최대값 = 깊이우선탐색최댓값(graph, 100)

console.log(결과값_깊이우선탐색최대값);
let result = '';
for (var v of 결과값_깊이우선탐색최대값){
  result += String.fromCharCode(v);
}
console.log(result);


결과값_깊이우선탐색최소값 = 깊이우선탐색최소값(graph, 100)

console.log(결과값_깊이우선탐색최소값);
let result2 = '';
for (var v of 결과값_깊이우선탐색최소값){
  result2 += String.fromCharCode(v);
}

console.log(result2)
