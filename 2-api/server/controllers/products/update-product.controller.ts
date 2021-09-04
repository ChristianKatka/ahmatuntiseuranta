import { Context, Next } from 'koa';
import { docClient } from '../../aws';
import { PRODUCTS_TABLE } from '../../constants';

export const updateProduct = async (ctx: Context, next: Next) => {
  const id = ctx.params.productId;
  
  const params = {
    TableName: PRODUCTS_TABLE,
    Key: { id },
    UpdateExpression:
      'SET #address = :address, #companyContactInfo = :companyContactInfo, #companyName = :companyName, #description = :description, #phase = :phase, #phoneNumber = :phoneNumber',
    ExpressionAttributeNames: {
      '#address': 'address',
      '#companyContactInfo': 'companyContactInfo',
      '#companyName': 'companyName',
      '#description': 'description',
      '#phase': 'phase',
      '#phoneNumber': 'phoneNumber',
    },
    ExpressionAttributeValues: {
      ':address': ctx.request.body.address,
      ':companyContactInfo': ctx.request.body.companyContactInfo,
      ':companyName': ctx.request.body.companyName,
      ':description': ctx.request.body.description,
      ':phase': ctx.request.body.phase,
      ':phoneNumber': ctx.request.body.phoneNumber,
    },
    ReturnValues: 'ALL_NEW',
  };

  const product = await docClient
    .update(params)
    .promise()
    .then((res) => res.Attributes)
    .catch((err) => {
      if (err.code === 'ConditionalCheckFailedException') ctx.throw(404);
      ctx.throw(500, new Error(err));
    });

  ctx.status = 200;
  ctx.body = product;

  next();
};
