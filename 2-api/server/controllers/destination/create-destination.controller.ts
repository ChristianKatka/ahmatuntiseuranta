import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { DESTINATION_TABLE } from '../../constants';
import { v4 as uuid } from 'uuid';

export const createDestination = async (ctx: Context, next: Next) => {
  const destination = {
    id: uuid(),
    createdAt: Date.now(),
    ...ctx.request.body,
  };

  const params = {
    TableName: DESTINATION_TABLE,
    Item: destination,
  };
  await docClient
    .put(params)
    .promise()
    .catch((err) => ctx.throw(500, new Error(err)));

  ctx.status = 200;
  ctx.body = destination;

  next();
};
