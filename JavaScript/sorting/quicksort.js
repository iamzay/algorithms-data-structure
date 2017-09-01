function compare(a, b) {
  return a - b;
}

function partition(arr,left,right,cmp){
  let pivot=arr[right-1];
  let minEnd=left;
  let maxEnd;
  for(maxEnd=left;maxEnd<right-1;++maxEnd){
    if(cmp(arr[maxEnd],pivot)<0){
      [arr[maxEnd],arr[minEnd]]=[arr[minEnd],arr[maxEnd]];
      ++minEnd;
    }
  }
  [arr[minEnd],arr[right-1]]=[arr[right-1],arr[minEnd]];
  return minEnd;
}

function _quickSort(arr,left,right,cmp){
  if(left<right){
    /* q是索引 */
    let q=partition(arr,left,right,cmp);
    _quickSort(arr,left,q,cmp);
    _quickSort(arr,q+1,right,cmp);
  }
}

function quickSort(arr,cmp){
  if(!arr||!arr.length){
    return [];
  }

  cmp=cmp||compare;
  _quickSort(arr,0,arr.length,cmp);
  return arr;
}

/* const arr=[5,4,1,3,2];
 * quickSort(arr);
 * console.log(arr);*/

export default quickSort;


