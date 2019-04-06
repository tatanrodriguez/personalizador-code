# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
# git init
git add -A
git commit -m 'deploy 2'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git remote add origin git@github.com:tatanrodriguez/platzi-music.git
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tatanrodriguez/newcars.git master:gh-pages

# git push origin master

cd -