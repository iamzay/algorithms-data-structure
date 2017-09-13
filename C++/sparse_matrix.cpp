include <iostream>
#include <iomanip>
#include <map>
using namespace std;
class matrix{
	friend ostream &operator<<(ostream &,matrix&);
private:
	int row, column, num;
	map<int, map<int, int>> m;  //行号→（列号，值）
public:
	matrix() = default;
	matrix(int r, int c, int n) :row(r), column(c), num(n) {}
	matrix &operator=(const matrix &right)
	{
		row = right.row;
		column = right.column;
		num = right.num;
		m = right.m;
	}
	void add(int r, int c, int val){ m[r].emplace(c, val); }
	int Row() const { return row; }
	int Column() const { return column; }
	matrix transpose() const
	{
		matrix temp(column, row, num);
		for (auto it = m.begin(); it != m.end(); ++it)  //这一行的元素
		{
			const map<int, int> &elems = it->second;
			for (auto it2 = elems.begin(); it2 != elems.end(); ++it2)
				temp.add(it2->first, it->first, it2->second);
		}
		return temp;
	}
	pair<bool,matrix> operator*(const matrix &right);
	pair<bool, matrix> operator+(const matrix &right)
	{
		if (row != right.row || column != right.column)
			return make_pair(false, matrix());
		matrix temp(row, column, 0);
		int cnt = 0;  //记录非零元素个数
		for (int i = 1; i <= row; ++i)
		{
			auto &m1 = m.at(i);
			auto &m2 = right.m.at(i);
			map<int, int>::const_iterator it1, it2;
			for (it1 = m1.begin(), it2 = m2.begin(); it1 != m1.end() || it2 != m2.end();)
			{
				if (it1 != m1.end() && it2 != m2.end())
				{
					int c1 = it1->first;
					int c2 = it2->first;
					if (c1 == c2)
					{
						int sum = it1->second + it2->second;
						if (sum)
						{
							temp.add(i, c1, sum);
							++cnt;
						}
						++it1;
						++it2;
					}
					else if (c1 < c2)
					{
						temp.add(i, c1, it1->second);
						++cnt;
						++it1;
					}
					else
					{
						temp.add(i, c2, it2->second);
						++cnt;
						++it2;
					}
				}
				else if (it1 == m1.end())
				{
					temp.add(i, it2->first, it2->second);
					++cnt;
					++it2;
				}
				else
				{
					temp.add(i, it1->first, it1->second);
					++cnt;
					++it1;
				}
			}
		}
		temp.num = cnt;
		return make_pair(true, temp);
	}
};
ostream &operator<<(ostream &os, matrix& mat)
{
	for (int r = 1; r <= mat.row; ++r)
	{
		for (int c = 1; c <= mat.column; ++c)
		{
			if (mat.m.count(r) && mat.m[r].count(c))
				os <<right<<setw(5) << mat.m[r][c];
			else
				os <<right<<setw(5) << 0;
		}
		os << endl;
	}
	return os;
}
pair<bool,matrix> matrix::operator*(const matrix &right)
{
	if (column != right.row)
		return make_pair(false, matrix());
	matrix temp(row, right.column, 0);
	int cnt = 0;  //记录结果有多少个非零元
	for (auto it = m.begin(); it != m.end(); ++it)  //遍历每一行
	{
		int r = it->first;
		map<int, int> result;  //列号→结果，map可能为空
		for (auto it2 = it->second.begin(); it2 != it->second.end(); ++it2)  //遍历这一行的元素
		{
			int c = it2->first;
			auto mat = right.m.at(c);  //找到要与此元素相乘的行
			for (auto it3 = mat.begin(); it3 != mat.end(); ++it3)
			{
				result[it3->first] += it2->second*it3->second;
			}
		}
		for (auto it4 = result.begin(); it4 != result.end(); ++it4,++cnt)
			temp.add(r, it4->first, it4->second);
	}
	temp.num = cnt;
	return make_pair(true, temp);
}

int main()
{
	matrix m(3, 4, 7);
	m.add(1, 1, 2);
	m.add(1, 4, 4);
	m.add(2, 1, 2);
	m.add(2, 2, 3);
	m.add(2, 3, 3);
	m.add(2, 4, 2);
	m.add(3, 4, 3);
	matrix m2(3, 4, 7);
	m2.add(1, 1, -1);
	m2.add(1, 2, 1);
	m2.add(1, 3, 1);
	m2.add(2, 3, 2);
	m2.add(2, 4, 1);
	m2.add(3, 1, 1);
	m2.add(3, 4, 2);
	matrix t = m.transpose();
	auto p = m*t;
	auto p2 = m + m2;
	cout.flags(ios::right);
	cout << "matrix1:" << endl;
	cout << m << endl;
	cout << "matix2:" << endl;
	cout << m2;
	cout<< "matrix1's transpose:" << endl;
	cout << t << endl;
	cout << "matrix1 multiply matrix1's transpose:" << endl;
	cout<<p.second<< endl;
	cout << "matrix1 add matrix2:" << endl;
	cout << p2.second << endl;
}
