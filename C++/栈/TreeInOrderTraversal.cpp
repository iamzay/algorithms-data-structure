#include <iostream>
#include <stack>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void InOrderTraversal(TreeNode *root) {
    auto current = root;
    stack<TreeNode*> s;
    while(!s.empty() || current != NULL) {
        if(current != NULL) {
            s.push(current);
            current = current->left;
        } else {
            auto node = s.top();
            s.pop();
            cout<<node->val;
            current = node->right;
        }
    }
}