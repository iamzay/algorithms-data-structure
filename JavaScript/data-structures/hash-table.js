class Node {
  constructor(key,data){
    this.key=key;
    this.data=data;
    this.next=undefined;
  }
}

class Hashtable {
  constructor(maxBucketCount){
    this.bucket=[];
    this.maxBucketCount=maxBucketCount||100;
  }

  static hashCode(val){
    if(!val.length){
      return val;
    }

    let hashCode=0;
    let ch;
    for(let i=0;i<val.length;++i){
      ch=val.charCodeAt(i);
      hashCode=((hashCode<<5)-hashCode)+ch;
      hashCode&=hashCode;
    }

    return hashCode;
  }

  put(key,data){
    const {bucket,maxBucketCount}=this;

    const hashCode=Hashtable.hashCode(key)%maxBucketCount;
    const node=new Node(key,data);

    /* 若链表为空 */
    if(!bucket[hashCode]){
      bucket[hashCode]=node;
      return;
    }

    let current;
    for(current=bucket[hashCode];current.next&&current.key!==key;current=current.next)
      ;
    if(current.key===key){
      current.data=data;
    } else{
      current.next=node;
    }

    return;
  }

  get(key){
    const {bucket,maxBucketCount}=this;
    const hashCode=Hashtable.hashCode(key)%maxBucketCount;

    let current=bucket[hashCode];
    for(;current&&current.key!==key;current=current.next)
      ;
    return current?current:null;
  }

  remove(key){
    const {bucket,maxBucketCount}=this;
    const hashCode=Hashtable.hashCode(key)%maxBucketCount;

    let current=bucket[hashCode];
    for(;current&&current.next&&current.next.key!=key;current=current.next)
      ;
    /* 链表为空 */
    if(!current){
      return false;
    }

    if(!current.next){
      /* 只在current为第一个时才可能相等 */
      if(current===bucket[hashCode]&&current.key===key){
        bucket[hashCode]=undefined;
        return true;
      }
    }

    /* current.next.key等于key的情况 */
    current.next=current.next.next;
    return true;
  }
}

/* const h=new Hashtable();
 * h.put("key",100);
 * h.put("ff",200);
 * h.put("kaka",200);
 * console.log(h.get("ff").data);
 * h.remove("ff");
 * console.log(h.get("ff")===null);
 * console.log(h.get("kaka").data);*/

export default Hashtable;
