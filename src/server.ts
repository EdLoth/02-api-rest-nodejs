import fastify from "fastify"
import { knex } from "../db/database"
import { env } from "./env"
import { transactionsRoutes } from "./routes/transactions"

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
