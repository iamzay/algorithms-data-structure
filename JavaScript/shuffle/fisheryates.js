function shuffle(arr){
  let rand;
  for(let i=0;i<arr.length;++i){
    /* 获得一个i~arr.length-1的随机索引*/
    rand=Math.floor(Math.random()*(arr.length-i)+i);
    [arr[rand],arr[i]]=[arr[i],arr[rand]];
  }
  return arr;
}

for(let i=0;i<10;++i){
  console.log(shuffle([1,2,3,4,5]));
}
