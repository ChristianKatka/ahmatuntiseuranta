import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { JOBS_TABLE } from '../../constants';
import { v4 as uuid } from 'uuid';

export const createJob = async (ctx: Context, next: Next) => {
  const job = {
    id: uuid(),
    createdAt: Date.now(),
    ...ctx.request.body,
  };

  const params = {
    TableName: JOBS_TABLE,
    Item: job,
  };
  await docClient
    .put(params)
    .promise()
    .catch((err) => ctx.throw(500, new Error(err)));

  ctx.status = 200;
  ctx.body = job;

  next();
};
