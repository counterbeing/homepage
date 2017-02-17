FROM nginx:1.11.10-alpine

COPY rendered_assets /usr/share/nginx/html

