FROM nginx:1.27.4

COPY dist/ /usr/share/nginx/html/
