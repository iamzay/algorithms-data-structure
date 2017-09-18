#include <stack>
#include <iostream>
using namespace std;

class node {
public:
  int data;
  node *left;
  node *right;
}

void preorder(node *root){
  if(!root)
    return;

  stack<node *> s;
  s.push(root);
  while(!s.empty()){
    node *n=s.top();
    s.pop();
    cout<<n->data<<end;
    if(n->right)
      s.push(n->right);
    if(n->left)
      s.push(n->left);
  }
}
