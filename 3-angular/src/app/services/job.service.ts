import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthHTTPService } from './auth-http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private authHttp: AuthHTTPService) {}

  getAllJobs(): Observable<any[]> {
    return this.authHttp.get(`${environment.apiBaseUrl}/jobs`);
  }

  createJob(job: any, destinationId: any): Observable<any> {
    const jobWithDestinationId = { ...job, destinationId };    
    return this.authHttp.post(
      `${environment.apiBaseUrl}/jobs`,
      jobWithDestinationId
    );
  }

  updateJob(job: any): Observable<any> {
    return this.authHttp.put(`${environment.apiBaseUrl}/jobs/${job.id}`, job);
  }

  deleteJob(jobId: string): Observable<{ id: string }> {
    return this.authHttp.delete(`${environment.apiBaseUrl}/jobs/${jobId}`);
  }
}
