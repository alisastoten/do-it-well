set -e
npm run build
cd src
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:alisastoten/do-it-well.git master:gh-pages
cd -