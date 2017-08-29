class Node {
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

class LinkedList {
  constructor(){
    this.first=this.last=null;
  }

  push(data){
    const node=new Node(data);
    if(!this.first){
      this.first=this.last=node;
    } else{
      this.last.next=node;
      this.last=node;
    }
  }

  unshift(data){
    const node=new Node(data);
    if(!this.first){
      this.first=this.last=node;
    } else{
      let tmp=this.first;
      this.first=node;
      this.first.next=tmp;
    }
  }

  inorder(cb){
    let tmp=this.first;
    while(tmp){
      cb(tmp);
      tmp=tmp.next;
    }
  }

  remove(data){
    if(this.first.data===data){
      this.first=this.first.next;
      if(!this.first){
        this.last=null;
      }
      return true;
    }

    let prev=this.first;
    let current=this.first.next;
    while(current){
      if(current.data===data){
        if(!current.next){
          this.last=prev.next=null;
        } else{
          prev.next=current.next;
        }
        return true;
      }
    }
    return false;
  }

  hasCycle(){
    let slow=this.first;
    let fast=this.first;

    while(slow&&fast&&fast.next){
      slow=slow.next;
      fast=fast.next.next;
      if(slow&&fast&&slow===fast){
        return true;
      }
    }
    return false;
  }

  pop(){
    /* 没有节点 */
    if(!this.first){
      return null;
    }
    let prev=this.first;
    let current=this.first.next;
    /* 只有一个节点 */
    if(!current){
      this.first=this.last=null;
      return prev;
    }
    /* 有多个节点 */
    while(current.next){
      current=current.next;
      prev=pev.next;
    }
    prev.next=null;
    this.last=prev;
    return current;
  }

  shift(){
    if(!this.first){
      return null;
    }
    const tmp=this.first;
    this.first=this.first.next;
    if(!this.first){
      this.last=null;
    }
    /* 返回删除的节点 */
    return tmp;
  }

  reverse(){

    function Reverse(current,next){
      if(!next){
        return;
      }
      Reverse(next,next.next);
      next.next=current;
    }

    if(!this.first||!this.first.next){
      return;
    }

    reverse(this.first,this.first.next);
    this.first.next=null;
    [this.first,this.last]=[this.last,this.first];
  }
}

export default LinkedList;
