class QuickFind {
  constructor(size){
    size=size||100;
    this._ids=[];
    for(let i=0;i<size;++i){
      this._ids[i]=i;
    }
  }

  union(p,q){
    const size=this._ids.length;
    const {_ids:ids}=this;
    if(p<=0||p>=size||q<=0||q>=size){
      return;
    }

    for(let i=0;i<size;++i){
      if(ids[i]===ids[p]){
        ids[i]=ids[q];
      }
    }
  }

  connected(p,q){
    const size=this._ids.length;
    if(p<=0||p>=size||q<=0||q>=size){
      return false;
    }

    return this._ids[q]===this._ids[p];
  }

}

var qfind = new QuickFind(10);
qfind.union(0, 1);
qfind.union(2, 1);
qfind.union(3, 4);
qfind.union(8, 9);
qfind.union(4, 8);

console.log(qfind.connected(0, 9)); // false
console.log(qfind.connected(3, 9)); // true

