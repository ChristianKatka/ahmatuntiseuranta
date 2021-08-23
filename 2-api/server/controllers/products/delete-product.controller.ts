import { Context, Next } from "koa";
import { docClient } from "../../aws";
import { PRODUCTS_TABLE } from "../../constants";

export const deleteProduct = async (ctx: Context, next: Next) => {
  const id = ctx.params.productId;

  await docClient
    .delete({
      TableName: PRODUCTS_TABLE,
      Key: { id },
    })
    .promise()
    .then(() => {
      ctx.status = 200;
      ctx.response.body = {
        id
      }
    })
    .catch((err) => {
      ctx.status = 500;
      console.log(err);
    });

    next();
};
