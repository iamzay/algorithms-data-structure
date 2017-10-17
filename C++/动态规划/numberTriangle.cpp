int i,j;
for(int j=1;j<=n;++j)
  d[n][j]=a[n][j];
for(int i=n-1;i>=1;--i)
  for(int j=1;j<=i;++j)
    d[i][j]=a[i][j]+max(d[i+1][j],d[i+1][j+1]);
