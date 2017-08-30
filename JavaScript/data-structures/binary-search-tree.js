class Node {
  constructor(value,left,right){
    this.value=value;
    this.left=left||null;
    this.right=right||null;
  }
}

class BinaryTree {
  constructor(){
    this.root=null;
  }

  insert(value){
    function Insert(value,current){
      if(!current){
        return new Node(value);
      }
      if(value<current.value){
        current.left=Insert(value,current.left);
      } else if(value>current.value){
        current.right=Insert(value,current.right);
      }
      return current;
    }

    if(!this.root){
      this.root=new Node(value);
      return;
    }
    this.root=Insert(value,this.root);
  }

  /* 中序遍历 */
  inorder(cb){
    function Inorder(current,cb){
      if(!current){
        return;
      }
      Inorder(current.left,cb);
      cb(current.value);
      Inorder(current.right,cb);
    }

    Inorder(this.root,cb);
  }

  find(value){
    function Find(current,value){
      if(!current){
        return false;
      }
      if(value<current.value){
        return Find(current.left,value);
      } else if(value>current.value){
        return Find(current.right,value);
      } else {
        return true;
      }
    }

    return Find(this.root,value);
  }

  remove(value){
    function Remove(current,value){
      if(!current){
        return null;
      }
      if(value<current.value){
        current.left=Remove(current.left,value);
      } else if(value>current.value){
        current.right=Remove(current.right,value);
      } else {
        if(!current.left&&!current.right){
          return null;
        }
        if(!current.right){
          return current.left;
        }
        if(!current.left){
          return current.right;
        }
        /* 找到右子树最小的节点，删除之，与current交换 */
        let cur=current,next=cur.right;
        while(next.left){
          cur=next;
          next=next.left;
        }
        current.value=next.value;
        if(cur===current){
          current.right=null;
        } else {
          cur.left=null;
        }
      }
      return current;
    }

    this.root=Remove(this.root,value);
  }
}

/* const t=new BinaryTree();
 * t.insert(100);
 * t.insert(200);
 * t.insert(300);
 * t.insert(0);
 * 
 * const print=t=>t.inorder(value=>console.log(value));
 * const values=[200,300,0,100];
 * 
 * for(let value of values){
 *   t.remove(value);
 *   console.log("remove ",value);
 *   print(t);
 * }*/

export default BinaryTree;
