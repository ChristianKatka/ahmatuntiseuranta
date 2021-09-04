import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { JOBS_TABLE } from '../../constants';

export const deleteJob = async (ctx: Context, next: Next) => {
  const id = ctx.params.jobId;

  await docClient
    .delete({
      TableName: JOBS_TABLE,
      Key: { id },
    })
    .promise()
    .then(() => {
      ctx.status = 200;
      ctx.response.body = {
        id,
      };
    })
    .catch((err) => {
      ctx.status = 500;
      console.log(err);
    });

  next();
};
