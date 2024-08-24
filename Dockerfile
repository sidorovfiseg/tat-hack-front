FROM node:20-alpine as base
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base AS builder
COPY . .
RUN npm ci
RUN npm run build

FROM base as production

ENV NODE_ENV production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD [ "npm", "start"]