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

let param=[5,4,1,3,2];
console.log(bubbleSort(param));
