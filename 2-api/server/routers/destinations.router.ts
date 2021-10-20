import Router from 'koa-router';
import { createDestination } from '../controllers/destination/create-destination.controller';
import { deleteDestination } from '../controllers/destination/delete-destination.controller';
import { getAllDestinations } from '../controllers/destination/get-all-destination.controller';
import { updateDestination } from '../controllers/destination/update-destination.controller';

const destinationRouter = new Router({ prefix: '/destinations' });

destinationRouter.get('/', getAllDestinations);
destinationRouter.post('/', createDestination);
destinationRouter.delete('/:destinationId', deleteDestination);
destinationRouter.put('/:destinationId', updateDestination);

export { destinationRouter };
