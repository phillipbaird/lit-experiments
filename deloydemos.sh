#!/usr/bin/bash
rm -rf dist
mkdir dist

mkdir dist/thinking-in-lit
cd thinking-in-lit
npm run build
cp -r dist/* ../dist/thinking-in-lit
sed -i 's/\/assets/assets/g' ../dist/thinking-in-lit/index.html

cd ..

npm run deploy
