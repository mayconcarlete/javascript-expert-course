docker build -t test .
docker run \
    -p 3000:3000 \
    -p 9229:9229 \
    test

curl -i \
    -X POST \
    -d '{"v1":"1", "v2":"2"}' \
    http://localhost:3000