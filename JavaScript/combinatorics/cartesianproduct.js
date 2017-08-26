let cartesianProduct=(()=>{
  let result=[];

  function cartesianProduct(sets,n,current){
    if(n>=sets.length){
      return result.push(current.concat());
    }

    for(let i=0;i<sets[n].length;++i){
      current[n]=sets[n][i];
      cartesianProduct(sets,n+1,current);
    }
  }

  return function(sets){
    cartesianProduct(sets,0,[]);
    return result;
  }
})();

// test
let res=cartesianProduct([[1,2,3],[1,2,3]]);
console.log(res);
/* [ [ 1, 1 ],
 *   [ 1, 2 ],
 *   [ 1, 3 ],
 *   [ 2, 1 ],
 *   [ 2, 2 ],
 *   [ 2, 3 ],
 *   [ 3, 1 ],
 *   [ 3, 2 ],
 *   [ 3, 3 ] ]*/
