/* 木桶排序:数组元素必须为数字。将元素放入相应的木桶，对每个木桶中的元素排序，按顺序
 * 将各个木桶中的元素写入数组*/
function bubbleSort(arr,cmp){
  for(let i=1;i<arr.length;++i){
    for(let j=arr.length-1;j>=i;--j){
      if(cmp(arr[j-1],arr[j])>0){
        [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
      }
    }
  }
  return arr;
}

function createBucket(arr){
  let bucket=[];
  let num;
  for(let elem of arr){
    num=Math.floor(elem);
    bucket[num]=bucket[num]||[];
    bucket[num].push(elem);
  }
  return bucket;
}

function sortBucket(bucket){
  for(let elems of bucket){
    if(typeof elems === "object"){
      bubbleSort(elems,(a,b)=>a-b);
    }
  }
}

function unionBucket(bucket){
  let res=[];
  for(let elems of bucket){
    if(typeof elems==="object"){
      res=res.concat(elems);
    }
  }
  return res;
}

function bucketSort(arr){
  let bucket=createBucket(arr);
  sortBucket(bucket);
  return unionBucket(bucket);
}

/* test
 * let params=[5,4,2,1,3];
 * console.log(bucketSort(params));*/
