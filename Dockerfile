FROM node:buster AS deps

WORKDIR /deps
COPY . .
RUN npm install

FROM node:buster AS builder

WORKDIR /build
COPY --from=deps /deps/node_modules node_modules
COPY . .
RUN npm run build

FROM node:buster

WORKDIR /app
COPY --from=builder /build/node_modules node_modules
COPY --from=builder /build/.nuxt .nuxt
COPY . .

CMD ["npm", "start"]
