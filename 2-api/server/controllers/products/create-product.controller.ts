import { Context, Next } from "koa";
import { docClient } from "../../aws";
import { PRODUCTS_TABLE } from "../../constants";
import { v4 as uuid } from "uuid";

export const createProduct = async (ctx: Context, next: Next) => {
  const product = {
    id: uuid(),
    createdAt: Date.now(),
    ...ctx.request.body
  };

  const params = {
    TableName: PRODUCTS_TABLE,
    Item: product,
  };
  await docClient
    .put(params)
    .promise()
    .catch((err) => ctx.throw(500, new Error(err)));

  ctx.status = 200;
  ctx.body = product

  next();
};
