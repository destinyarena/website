.PHONY: docker docker-build docker-push


docker-build:
	test $(DOCKERREPO)
	docker build . -t $(DOCKERREPO)

docker-push:
	test $(DOCKERREPO)
	docker push $(DOCKERREPO)

docker: docker-build docker-push
