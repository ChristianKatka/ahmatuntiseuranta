import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { JOBS_TABLE } from '../../constants';

export const updateJob = async (ctx: Context, next: Next) => {
  const id = ctx.params.jobId;

  const params = {
    TableName: JOBS_TABLE,
    Key: { id },
    UpdateExpression:
      'SET #date = :date, #hoursUsed = :hoursUsed, #jobDescription = :jobDescription, #time = :time',
    ExpressionAttributeNames: {
      '#date': 'date',
      '#hoursUsed': 'hoursUsed',
      '#jobDescription': 'jobDescription',
      '#time': 'time',
    },
    ExpressionAttributeValues: {
      ':date': ctx.request.body.date,
      ':hoursUsed': ctx.request.body.hoursUsed,
      ':jobDescription': ctx.request.body.jobDescription,
      ':time': ctx.request.body.time,
    },
    ReturnValues: 'ALL_NEW',
  };

  const job = await docClient
    .update(params)
    .promise()
    .then((res) => res.Attributes)
    .catch((err) => {
      if (err.code === 'ConditionalCheckFailedException') ctx.throw(404);
      ctx.throw(500, new Error(err));
    });

  ctx.status = 200;
  ctx.body = job;

  next();
};
