npm run build
scp -i $1 -r build/* ubuntu@$2:~/$2/