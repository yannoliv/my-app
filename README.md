
## Development

localhost:3000

- Enkel development in /src

## nieuwe image bouwen en oude verwijderen
docker container rm -f my-app-web-1 && docker image rm my-app-web && docker build --no-cache -t yannickai/my-app:1.0 .  && docker compose up -d



## Docker info


### Image bouwen

>docker build --no-cache -t yannickai/my-app:1.0 . 


### Image naar container

> docker images
> docker compose down && docker compose up -d

### delete
> docker images
> docker image rm ...



https://plainenglish.io/blog/step-by-step-guide-to-dockerize-react-app-created-using-vite

## CSS

### Tailwind

https://tailwindcss.com/docs/guides/sveltekit

### Flowbite

https://flowbite-svelte.com


https://gist.github.com/coehne/caf0b3934455d842dfbfe1f4c1544348

https://stackoverflow.com/questions/66812479/nextjs-how-to-correctly-add-firebase-analytics-to-nextjs-app


https://stackoverflow.com/questions/74444562/how-to-host-a-sveltekit-app-with-firebase-hosting