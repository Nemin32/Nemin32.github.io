.PHONY: build

build: generate
	./generate > 2019-11-17-timeline.md

generate: timeline.c
	gcc timeline.c -o generate
