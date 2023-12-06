# angular-docker
A docker template for a typical Angular application.

# Usage Individually
`docker build -t ex1 .`
`docker run -p 3001:3001/tcp ex1`
`docker build -t db1 . -f ./Dockerfile-DB`
`docker run -p 3000:3000/tcp db1`

# Usage with compose
ATTENTION: change host port of the frontend service!
`docker-compose up`
