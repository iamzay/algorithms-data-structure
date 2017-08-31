class Heap {
  constructor(cmp){
    /* 第一个位置不放元素 */
    this._heap=[null];
    this._cmp=cmp||((a,b)=>a-b);
  }

  up(index){
    const h=this._heap;
    const cmp=this._cmp;
    let current=index;
    let k;
    /* 如果parent存在 */
    while(Math.floor(current/2)>=1){
      k=Math.floor(current/2);

      /* 如果parent更大，则将它移到current */
      if(cmp(h[k],h[index])>0){
        h[current]=h[k];
      } else{
        break;
      }
      current=k;
    }
    h[current]=h[index];
  }

  add(value){
    /* 将元素插在数组最后，然后逐层往上升 */
    this._heap.push(value);
    this.up(this._heap.length-1);
  }

  down(index){
    const h=this._heap;
    const cmp=this._cmp;
    const size=h.length;
    let current=index;
    while(2*current<size){
      let k=2*current;
      let tmp=k;

      /* 如果k+1的值要更小一些 */
      if(k+1<size && cmp(h[k],h[k+1])>0){
        tmp=k+1;
      }
      /* current同tmp处的值比较 */
      if(cmp(h[tmp],h[index])<0){
        h[current]=h[tmp];
      } else{
        break;
      }
      current=tmp;
    }
    h[current]=h[index];
  }

  deleteMin(){
    const h=this._heap;
    /* heap为空的情况 */
    if(h.length<=1){
      return null;
    }
    /* 将最后一个数放到顶端，然后让他向下移动 */
    const size=h.length;
    [h[1],h[size-1]]=[h[size-1],h[1]];
    const res=h.pop();
    this.down(1);
    return res;
  }
}

const h=new Heap();
for(let i=1;i<10;++i){
  let tmp=Math.floor(Math.random()*9+1);
  h.add(tmp);
}
console.log(h._heap);
for(let i=1;i<10;++i){
  console.log(h.deleteMin());
}

/* export default Heap;*/
