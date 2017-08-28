/* 冒泡排序:从后往前遍历，第一次遍历找到最小的元素，第二次遍历找到第二小的*/
function compare(a, b) {
  return a - b;
}

function bubbleSort(arr,cmp){
  cmp=cmp||compare;
  for(let i=1;i<arr.length;++i){
    for(let j=arr.length-1;j>=i;--j){
      if(cmp(arr[j-1],arr[j])>0){
        [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
      }
    }
  }
  return arr;
}

/* test
 * let param=[5,4,1,3,2];
 * console.log(bubbleSort(param));*/

export default bubbleSort;
