npm run build;
git add dist;
git commit -m 'Committed via deploy script';
git subtree push --prefix=dist origin gh-pages;

