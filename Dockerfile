FROM node:20-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose depending on technology used
ENV PORT=5173
EXPOSE 5173

CMD ["npm", "run", "dev"]
