let permutations1=(()=>{
  let res;

  function permutations1(arr,cnt,current){
    if(cnt>=arr.length){
      return res.push(current.concat());
    }

    for(let i=0;i<arr.length;++i){
      /* 难点1:确保在求permutation前数组已排序
       * 每个位置不能选之前选过的*/
      if(i&&arr[i]===arr[i-1]){
        continue;
      }
      /* 难点2:检查这个数能不能选*/
      let ok=1,c1=0,c2=0;
      for(let j=0;j<cnt;++j){
        if(current[j]===arr[i]){
          ++c1;
        }
      }
      for(let j=0;j<arr.length;++j){
        if(arr[j]===arr[i]){
          ++c2;
        }
      }
      /* 这个数的重复次数还没有达到，所以还能选*/
      if(c1<c2){
        current[cnt]=arr[i];
        permutations1(arr,cnt+1,current);
      }
    }
  }

  return function(arr){
    res=[];
    if(!arr||!arr.length){
      return [];
    }

    permutations1(arr,0,[]);
    return res;
  }
})();

/* test */
let param=[1,2,3];
let res=permutations1(param);
console.log(res);
/* [ [ 1, 2, 3 ],
 *   [ 1, 3, 2 ],
 *   [ 2, 1, 3 ],
 *   [ 2, 3, 1 ],
 *   [ 3, 1, 2 ],
 *   [ 3, 2, 1 ] ]*/

res=permutations1([1,1,1]);
console.log(res);
/* [ [ 1, 1, 1 ] ]*/

/* 下面的方法需确保数组中无重复*/
let permutations2=(()=>{
  let res;

  function swap(arr,i,j){
    const tmp=arr[i];
    arr[i]=arr[j];
    arr[j]=tmp;
  }

  function permutations2(arr,start){
    if(start>=arr.length){
      return res.push(arr.concat());
    }

    for(let i=start;i<arr.length;++i){
      swap(arr,i,start);
      permutations2(arr,start+1);
      swap(arr,i,start);
    }
  }
  return function(arr){
    res=[];
    permutations2(arr,0);
    return res;
  }
})();

res=permutations2(param);
console.log(res);
