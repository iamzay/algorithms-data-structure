/* 选择排序:每次迭代选出剩余数组元素中最小的数*/
function compare(a,b){
  return a-b;
}

function selectionSort(arr,cmp){
  cmp=cmp||compare;
  for(let i=0;i<arr.length;++i){
    /* 找出arr[i,len-1]中最小的数，和arr[i]交换*/
    let min=arr[i];
    let id=i;
    for(let j=i+1;j<arr.length;++j){
      if(cmp(min,arr[j])>0){
        min=arr[j];
        id=j;
      }
    }
    [arr[i],arr[id]]=[arr[id],arr[i]];
  }
  return arr;
}

/* test
 * let param=[5,4,2,3,1];
 * console.log(selectionSort(param));*/

export default selectionSort;
