preact build --template index.html
find build/ -maxdepth 1 -name 'bundle.*.js' -print0 | xargs -0 -I {} -P 0 sed -i -e 's/\/sw\.js/\/skills\/sw\.js/g' {}
git add build/
today=`date +%Y-%m-%d.%H:%M:%S`
git commit -m "${today} build"
git push
git subtree push --prefix build origin gh-pages
echo "Done."