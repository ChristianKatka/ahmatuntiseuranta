import Router from 'koa-router';
import { createJob } from '../controllers/jobs/create-job.controller';
import { deleteJob } from '../controllers/jobs/delete-product.controller';
import { getAllJobs } from '../controllers/jobs/get-all-products.controller';
import { updateJob } from '../controllers/jobs/update-product.controller';

const jobsRouter = new Router({ prefix: '/jobs' });

jobsRouter.get('/', getAllJobs);
jobsRouter.post('/', createJob);
jobsRouter.delete('/:jobId', deleteJob);
jobsRouter.put('/:jobId', updateJob);

export { jobsRouter };
