import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import { logRequestAndResponse } from "./middlewares/request-response-logger.middleware";
import { decodeCognitoToken } from "./middlewares/cognito-token.middleware";
import { productsRouter } from "./routers/products.router";
import { jobsRouter } from './routers/jobs.router';
const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(cors());

app.use(logRequestAndResponse);

// app.use(async ctx => {
//     ctx.body = 'Welcome to the server side';
//   });

app.use(productsRouter.routes()).use(productsRouter.allowedMethods());
app.use(jobsRouter.routes()).use(jobsRouter.allowedMethods());



export { app };
