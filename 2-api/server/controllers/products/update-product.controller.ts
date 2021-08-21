import { Context, Next } from "koa";
import { docClient } from "../../aws";
import { PRODUCTS_TABLE } from "../../constants";

export const updateProduct = async (ctx: Context, next: Next) => {
  const id = ctx.params.productId;

  const params = {
    TableName: PRODUCTS_TABLE,
    Key: { id },
    UpdateExpression:
      "SET #headLine = :headLine, #description = :description, #price = :price, #isPublic = :isPublic",
    ExpressionAttributeNames: {
      "#headLine": "headLine",
      "#description": "description",
      "#price": "price",
      "#isPublic": "isPublic",
    },
    ExpressionAttributeValues: {
      ":headLine": ctx.request.body.headLine,
      ":description": ctx.request.body.description,
      ":price": ctx.request.body.price,
      ":isPublic": "false",
    },
    ReturnValues: 'ALL_NEW',
  };

  const product = await docClient
    .update(params)
    .promise()
    .then((res) => res.Attributes)
    .catch((err) => {
      if (err.code === "ConditionalCheckFailedException") ctx.throw(404);
      ctx.throw(500, new Error(err));
    });

  ctx.status = 200;
  ctx.body = product;
};
