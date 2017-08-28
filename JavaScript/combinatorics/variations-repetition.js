/* 在一个无重复数组中选n个数，这个n个数可以相同
 * 和combinations有细微差别*/
let variationsWithRepetion=(()=>{
  let res;

  function variationsWithRepetion(arr,n,cnt,current){
    if(cnt>=n){
      return res.push(current.concat());
    }

    for(let i=0;i<arr.length;++i){
      current[cnt]=arr[i];
      variationsWithRepetion(arr,n,cnt+1,current);
    }
  }
  return function(arr,n){
    res=[];
    variationsWithRepetion(arr,n,0,[]);
    return res;
  }
})();

let result = variationsWithRepetion(['apple', 'orange', 'pear'], 2);
console.log(result);
