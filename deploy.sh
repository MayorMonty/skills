preact build

git add build/

git commit "${date '+%Y-%m-%d %H:%M:%S'} build"

git push

git subtree push --prefix build origin gh-pages