let sample = []


let 첫번째밭 = [
  [1,0,0,0,0],
  [0,0,1,0,1],
  [0,0,1,0,1],
  [0,0,1,0,1],
  [0,0,1,0,1]
]
let 두번째밭 = [
  [0,0,0,0,1],
  [0,0,0,0,3],
  [0,0,0,0,4],
  [0,2,0,0,2],
  [4,5,0,2,0]
]

for (var i=0;i<첫번째밭.length;i++){
  sample[i] = new Array(첫번째밭[0].length)
}

// 90도 회전시켜주기
for (var i=0; i<첫번째밭.length;i++){
  for (var j=0;j<두번째밭[0].length;j++){
    sample[i][j] = 두번째밭[j][두번째밭[0].length-1-i]
    sample[i][j] += 첫번째밭[i][j]
  }
}

console.log(sample);  // 결과는 8진법

result='';
for (var v of sample){
  console.log(String.fromCharCode(parseInt(v.join(''), 8)));
  result += String.fromCharCode(parseInt(v.join(''), 8))
}
console.log(result);