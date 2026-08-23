FROM node:20-alpine AS builder

WORKDIR /app/server
COPY server/package*.json ./
RUN npm ci
COPY server/ ./
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app/server
COPY --from=builder /app/server/dist ./dist
COPY --from=builder /app/server/node_modules ./node_modules
COPY --from=builder /app/server/package*.json ./
COPY --from=builder /app/server/prisma ./prisma

ENV NODE_ENV=production
EXPOSE 5000

CMD ["sh", "-c", "npx prisma db push && node dist/index.js"]
