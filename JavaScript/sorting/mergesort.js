let mergeSort=(()=>{
  function compare(a, b) {
    return a - b;
  }

  function merge(arr,cmp,begin,middle,end){
    const leftArr=arr.slice(begin,middle);
    const rightArr=arr.slice(middle,end);
    let cnt=end-begin;
    let i=0,j=0,k=begin;
    while(cnt--){
      if(i<leftArr.length && j<rightArr.length){
        if(cmp(leftArr[i],rightArr[j])>0){
          arr[k++]=rightArr[j++];
        } else{
          arr[k++]=leftArr[i++];
        }
      } else if(i<leftArr.length){
        arr[k++]=leftArr[i++];
      } else{
        arr[k++]=rightArr[j++];
      }
    }
  }

  function mergeSort(arr,cmp,begin,end){
    /* 若只有一个元素，则无需排序*/
    if(end-begin<=1){
      return;
    }

    /* ceil or floor? */
    const middle=Math.floor((begin+end)/2);
    mergeSort(arr,cmp,begin,middle);
    mergeSort(arr,cmp,middle,end);

    merge(arr,cmp,begin,middle,end);
  }

  return function(arr,cmp){
    if(!arr){
      return [];
    }

    cmp=cmp||compare;
    mergeSort(arr,cmp,0,arr.length);
    return arr;
  }
})();

/* test
 * let param=[5,4,3,2,1];
 * console.log(mergeSort(param));*/

export default mergeSort;
