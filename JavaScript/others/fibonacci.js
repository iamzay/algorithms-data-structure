function fibonacci(n){
  let prev=0,cur=1;
  let tmp;
  while(--n){
    tmp=cur;
    cur+=prev;
    prev=tmp;
  }

  return cur;
}

console.log(fibonacci(20))
/* export default fibonacci;*/
