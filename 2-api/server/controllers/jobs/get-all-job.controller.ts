import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { JOBS_TABLE } from '../../constants';

export const getAllJobs = async (ctx: Context, next: Next) => {
  const params = {
    TableName: JOBS_TABLE,
  };
  const jobs = await docClient
    .scan(params)
    .promise()
    .then((res) => res.Items)
    .catch((err) => ctx.throw(500, new Error(err)));

  ctx.status = 200;
  ctx.body = jobs;

  next();
};
