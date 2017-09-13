#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
template <typename T>
class AvlTree{
//	friend ostream &operator(ostream &, const AvlTree&);
private:
	struct AvlNode{
		AvlNode(const T &val, AvlNode *l = nullptr, AvlNode *r = nullptr, int h = 0) :element(val), left(l), right(r), height(h) {}
		T element;
		AvlNode *left;
		AvlNode *right;
		int height;
	};
	AvlNode *root;
	AvlNode *Find(AvlNode *r, const T &val)
	{
		if (!r)
			return nullptr;
		if (r->element < val)
			return Find(r->right, val);
		if (r->element>val)
			return Find(r->left, val);
		else
			return r;
	}
	AvlNode *FindMax(AvlNode *r)
	{
		if (!(r->right))
			return r;
		return FindMax(r->right);
	}
	AvlNode *FindMin(AvlNode *r)
	{
		if (!(r->left))
			return r;
		return FindMin(r->left);
	}
	void PrintTree(AvlNode *r)
	{
		if (r)
		{
			PrintTree(r->left);
			cout << r->element << endl;
			printTree(r->right);
		}
	}
	int Height(AvlNode *r)
	{
		if (!r)
			return -1;
		return r->height;
	}
	AvlNode *Insert(AvlNode *r, const T &val)
	{
		if (!r)
		{
			r = new AvlNode(val);
		}
		else if (r->element > val)  //插到左边
		{
			r->left = Insert(r->left, val);
			if (Height(r->left) - Height(r->right)== 2)
			{
		 		if (r->left->element > val)
					SingleRotateWithLeft(r);
				else
					DoubleRotateWithLeft(r);
			}
		}
		else if (r->element < val)
		{
			r->right = Insert(r->right, val);
			if (Height(r->right)- Height(r->left)== 2)
			{
				if (r->right->element < val)
					SingleRotateWithRight(r);
				else
					DoubleRotateWithRight(r);
			}
		}
		r->height = max(Height(r->left), Height(r->right)) + 1;
		return r;
	}
	AvlNode *Delete(AvlNode *r, const T &val)
	{
		if (!r)
		{
			cerr << "Error!" << endl;
			return r;
		}
		else if (r->element < val)
		{
			r->right = Delete(r->right, val);
			if (Height(r->left) - Height(r->right) == 2)
			{
				if (Height(r->left->left)>=Height(r->left->right))
					SingleRotateWithLeft(r);
				else
					DoubleRotateWithLeft(r);
			}
		}
		else if (r->element > val)
		{
			r->left = Delete(r->left, val);
			if (Height(r->right) - Height(r->left) == 2)
			{
				if (Height(r->right->right)>=Height(r->right->left))
					SingleRotateWithRight(r);
				else
					DoubleRotateWithRight(r);
			}
		}
		else
		{
			if (r->left == nullptr)
			{
				AvlNode *temp = r;
				r = r->right;
				delete temp;
			}
			else if (r->right == nullptr)
			{
				AvlNode *temp = r;
				r = r->left;
				delete temp;
			}
			else
			{
				AvlNode *temp = FindMin(r->right);
				r->element = temp->element;
				r->right = Delete(r->right, r->element);
				if (Height(r->left) - Height(r->right) == 2)
				{
					if (Height(r->left->left) >= Height(r->left->right))
						SingleRotateWithLeft(r);
					else
						DoubleRotateWithLeft(r);
				}
			}
		}
		if (r)
		r->height = max(Height(r->left), Height(r->right)) + 1;
		return r;
	}
	AvlNode *SingleRotateWithLeft(AvlNode *k)
	{
		AvlNode *temp = k->left;
		k->left = temp->right;
		temp->right = k;
		return temp;
	}
	AvlNode *SingleRotateWithRight(AvlNode *k)
	{
		AvlNode *temp = k->right;
		k->right = temp->left;
		temp->left = k;
		return temp;
	}
	AvlNode *DoubleRotateWithLeft(AvlNode *k)
	{
		AvlNode *k1 = k->left;
		AvlNode *k2 = k1->right;
		k1->right = k2->left;
		k->left = k2->right;
		k2->left = k1;
		k2->right = k;
		return k2;
	}
	AvlNode *DoubleRotateWithRight(AvlNode *k)
	{
		k->right = SingleRotateWithLeft(k->right);
		return SingleRotateWithRight(k);
	}
	void Print(AvlNode * r)
	{
		if (r)
		{
			Print(r->left);
			cout << r->element << " ";
			Print(r->right);
		}
	}
public:	
	AvlTree() :root(nullptr) {}
	AvlTree(const AvlTree &rhs)
	{
		root = nullptr;
		vector<AvlNode*> temp;
		if (!rhs.empty())
		temp.push_back(rhs.root);
		int cur = 0;
		while (cur<temp.size())
		{
			root=Insert(root, temp[cur]->element);
			if (temp[cur]->left)
				temp.push_back(temp[cur]->left);
			if (temp[cur]->right)
				temp.push_back(temp[cur]->right);
			++cur;
		}
	}
	int Height() { if (!root) return root->height; else return -1; }
	AvlNode *find(const T &val)
	{
		return Find(root, val);
	}
	AvlNode *findMax() { if (!root) return nullptr; return FindMax(root); }
	AvlNode *findMin() { if (!root) return nullptr; return FindMin(root); }
	bool empty() const { return !root; }
	void insert(const T &val)
	{
		root= Insert(root, val);
	}
	void print() { Print(root); }
	void erase(const T& val) { root=Delete(root, val); }
};

int main()
{
	AvlTree<int> tree;
	tree.insert(2);
	tree.insert(1);
	tree.insert(3);
	tree.print();
}
