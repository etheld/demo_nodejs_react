.PHONY: build run

build:
	#docker build -t $(IMAGE_NAME) .
	npm install
run:
	#docker run -t $(IMAGE_NAME)
	node_modules/.bin/http-server src/static

run2:
	NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' src/server.js

webpack:
	NODE_ENV=production node_modules/.bin/webpack -p
