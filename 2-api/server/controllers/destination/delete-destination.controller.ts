import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { DESTINATION_TABLE } from '../../constants';

export const deleteDestination = async (ctx: Context, next: Next) => {
  const id = ctx.params.destinationId;

  await docClient
    .delete({
      TableName: DESTINATION_TABLE,
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
