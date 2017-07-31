FROM nginx:1.11.10-alpine

# ADD nginx.conf /etc/nginx/

COPY rendered_assets /usr/share/nginx/html

