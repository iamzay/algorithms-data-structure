const leftChild=i=>2*i+1;
const compare=(a,b)=>a-b;

function PercDown(arr,i,n,cmp){
  let tmp=arr[i];
  for(;leftChild(i)<n;){
    let k=leftChild(i);
    if(k+1<n&&cmp(arr[k],arr[k+1])<0){
      ++k;
    }
    if(cmp(arr[k],tmp)>0){
      arr[i]=arr[k];
      i=k;
    } else{
      break;
    }
  }
  arr[i]=tmp;
}

function heapSort(arr,cmp){
  if(!arr||!arr.length){
    return;
  }
  cmp=cmp||compare;
  let n=arr.length;
  for(let i=Math.floor(n/2)-1;i>=0;--i){
    PercDown(arr,i,n,cmp);
  }
  for(let i=n-1;i>=1;--i){
    [arr[i],arr[0]]=[arr[0],arr[i]];
    PercDown(arr,0,i,cmp);
  }
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
 *   console.log(heapSort(arr,(a,b)=>b-a));
 *   console.log("\n");
 * }
 * */
export default heapSort;
