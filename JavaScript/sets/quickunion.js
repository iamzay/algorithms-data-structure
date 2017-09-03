class QuickUnion {
  constructor(size){
    size=size||100;
    this._ids=[];
    for(let i=0;i<size;++i){
      this._ids[i]=i;
    }
  }

  _root(p){
    while(p!==this._ids[p]){
      p=this._ids[p];
    }

    return p;
  }

  union(p,q){
    this._ids[this._root(p)]=this._root(q);
  }

  connected(p,q){
    return this._root(p)===this._root(q);
  }
}

/* var qfind = new QuickUnion(10);
 * qfind.union(0, 1);
 * qfind.union(2, 1);
 * qfind.union(3, 4);
 * qfind.union(8, 9);
 * qfind.union(4, 8);
 * 
 * console.log(qfind.connected(0, 9)); // false
 * console.log(qfind.connected(3, 9)); // true*/

export default QuickUnion;
