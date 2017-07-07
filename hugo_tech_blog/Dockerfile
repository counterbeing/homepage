FROM alpine:latest

ENV HUGO_VERSION=0.24.1

ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz /tmp

RUN mkdir -p /usr/local/sbin && mv /tmp/hugo /usr/local/sbin/hugo
RUN apk add --no-cache ca-certificates
RUN apk add --no-cache elinks py-pygments

WORKDIR /src

EXPOSE 1313
