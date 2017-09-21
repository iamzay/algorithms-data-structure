const compare=(a,b)=>a-b;

function swap(arr,a,b){
  [arr[a],arr[b]]=[arr[b],arr[a]];
}

function median3(arr,left,right,cmp){
  cmp=cmp||compare;
  const center=Math.floor((left+right)/2);
  if(cmp(arr[left],arr[center])>0)
    swap(arr,left,center);
  if(cmp(arr[left],arr[right])>0)
    swap(arr,left,right);
  if(cmp(arr[center],arr[right])>0)
    swap(arr,center,right);
  swap(arr,center,right-1);
  return arr[right-1];
}

function _quicksort(arr,left,right,cmp){
  if(left>=right)
    return;
  if(right===left+1){
    if(cmp(arr[left],arr[right])>0)
      swap(arr,left,right);
    return;
  }
  let pivot=median3(arr,left,right,cmp);
  let i=left,j=right-1;
  for(;;){
    while(cmp(arr[++i],pivot)<0)
      ;
    while(cmp(arr[--j],pivot)>0)
      ;
    if(i<j)
      swap(arr,i,j)
    else
      break;
  }
  swap(arr,i,right-1);
  _quicksort(arr,left,i-1,cmp);
  _quicksort(arr,i+1,right,cmp);
  return arr;
}

function quicksort(arr,cmp){
  if(!arr||!arr.length)
    return [];
  cmp=cmp||compare;
  _quicksort(arr,0,arr.length-1,cmp);
  return arr;
}

/* const cnt=10;
 * const size=10;
 * for(let j=0;j<cnt;++j){
 *   let arr=[];
 *   for(let i=0;i<size;++i){
 *     arr.push(Math.floor(Math.random()*size));
 *   }
 *   console.log(arr);
 *   console.log(quicksort(arr));
 *   console.log("\n");
 * }*/
export default quicksort;
