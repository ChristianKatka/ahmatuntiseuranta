import { Context, Next } from "koa";
import { docClient } from "../../aws";
import { PRODUCTS_TABLE } from "../../constants";

export const getAllProducts = async (ctx: Context, next: Next) => {
  console.log('HEi oieke paikka');
  
  const params = {
    TableName: PRODUCTS_TABLE,
  };
  const products = await docClient
    .scan(params)
    .promise()
    .then((res) => res.Items)
    .catch((err) => ctx.throw(500, new Error(err)));

  ctx.status = 200;
  ctx.body = products;
};
