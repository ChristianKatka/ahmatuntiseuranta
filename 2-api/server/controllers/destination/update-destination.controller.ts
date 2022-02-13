import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { DESTINATION_TABLE } from '../../constants';

export const updateDestination = async (ctx: Context, next: Next) => {
  const id = ctx.params.destinationId;

  const params = {
    TableName: DESTINATION_TABLE,
    Key: { id },
    UpdateExpression: 'SET address = :address, invoiced = :invoiced',
    ExpressionAttributeValues: {
      ':address': ctx.request.body.address,
      ':invoiced': ctx.request.body.invoiced,
    },
    ReturnValues: 'ALL_NEW',
  };

  const destination = await docClient
    .update(params)
    .promise()
    .then((res) => res.Attributes)
    .catch((err) => {
      if (err.code === 'ConditionalCheckFailedException') ctx.throw(404);
      ctx.throw(500, new Error(err));
    });

  ctx.status = 200;
  ctx.body = destination;

  next();
};
