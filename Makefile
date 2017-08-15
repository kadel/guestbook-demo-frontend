NAME=quay.io/tomkral/guestbook-demo-frontend
VERSION=v1

all: image push

image:
	docker build -t $(NAME):$(VERSION) .

push:
	docker push $(NAME):$(VERSION)

deploy:
	kedge apply -f Kedge/