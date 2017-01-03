.PHONY: build run

build:
	#docker build -t $(IMAGE_NAME) .
	npm install
run:
	#docker run -t $(IMAGE_NAME)
	node server.js
