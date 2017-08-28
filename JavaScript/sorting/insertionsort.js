/* 插入排序:在数组的前部分有序的基础上，将当前元素插入到前部分的合适位置*/
function compare(a,b){
  return a-b;
}

function insertionSort(arr,cmp){
  cmp=cmp||compare;
  for(let j=1;j<arr.length;++j){
    let i;
    for(i=j-1;i>=0&&cmp(arr[i],arr[i+1])>0;--i){
      [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
    }
  }
  return arr;
}

let param=[5,4,2,3,1];
console.log(insertionSort(param));

/* modified version*/
function insertionSort1(arr,cmp){
  cmp=cmp||compare;
  for(let j=1;j<arr.length;++j){
    let current=arr[j];
    let i;
    for(i=j-1;i>=0&&cmp(arr[i],current)>0;--i){
      arr[i+1]=arr[i];
    }
    arr[i+1]=current;
  }
  return arr;
}

param=[5,3,2,4,1];
console.log(insertionSort1(param));
