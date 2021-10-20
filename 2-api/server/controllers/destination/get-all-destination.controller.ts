import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { DESTINATION_TABLE } from '../../constants';

export const getAllDestinations = async (ctx: Context, next: Next) => {
  const params = {
    TableName: DESTINATION_TABLE,
  };
  const destinations = await docClient
    .scan(params)
    .promise()
    .then((res) => res.Items)
    .catch((err) => ctx.throw(500, new Error(err)));

  ctx.status = 200;
  ctx.body = destinations;

  next();
};
