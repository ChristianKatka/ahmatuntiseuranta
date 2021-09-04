import Router from 'koa-router';
import { createJob } from '../controllers/jobs/create-job.controller';
import { deleteJob } from '../controllers/jobs/delete-job.controller';
import { getAllJobs } from '../controllers/jobs/get-all-job.controller';
import { updateJob } from '../controllers/jobs/update-job.controller';

const jobsRouter = new Router({ prefix: '/jobs' });

jobsRouter.get('/', getAllJobs);
jobsRouter.post('/', createJob);
jobsRouter.delete('/:jobId', deleteJob);
jobsRouter.put('/:jobId', updateJob);

export { jobsRouter };
