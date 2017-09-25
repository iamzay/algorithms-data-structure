typedef struct node {
  int data;
  struct node *left,*child;
} Node;

Node *findLowestCommonAncestor(Node *r,Node *a,Node *b)
{
  if(!r)
    return NULL;
  if(r->value==a||r->value==b)
    return r;
  Node *left=findLowestCommonAncestor(r->left,a,b);
  Node *right=findLowestCommonAncestor(r->right,a,b);
  if(left&&right)
    return r;
  return left?left:right;
}

/* 下面这种情况，若是二叉查找树，且a,b代表节点值 */
Node *findLowestCommonAncestor1(Node *r,int a,int b)
{
  if(a>b){
    a=a^b;
    b=a^b;
    a=a^b;
  }
  while(r){
    int value=r->value;
    if(value>=a&&value<=b)
      return r;
    else if(value<a)
      r=r->right;
    else
      r=r->left;
  }
  return NULL;
}
