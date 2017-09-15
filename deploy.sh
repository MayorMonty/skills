preact build

git add build/

today=`date +%Y-%m-%d.%H:%M:%S`

git commit -m "${today} build"

git push

git subtree push --prefix build origin gh-pages