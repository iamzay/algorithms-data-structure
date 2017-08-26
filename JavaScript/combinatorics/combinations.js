let combinations=(()=>{
  let result=[];

  function combinations(arr,cnt,start,n,current){
    if(n>=cnt){
      return result.push(current.concat());
    }

    /* 第一个在0~n-1中取，若取了i,则第二个只能在i+1~n-1中取，否则会有重复*/
    for(let i=start;i<arr.length;++i){
      current[n]=arr[i];
      combinations(arr,cnt,i+1,n+1,current);
    }
  }

  /* 从arr中取k个*/
  return function(arr,k){
    if(k>arr.length){
      return [];
    }

    combinations(arr,k,0,0,[]);
    return result;
  }
})();

/* test */
let res=combinations([1,2,3,4],2);
console.log(res);
