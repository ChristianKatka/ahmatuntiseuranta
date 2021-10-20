import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: 'job.component.html',
  styleUrls: ['job.component.scss'],
})
export class JobComponent {
  @Input() job: any;
  @Output()
  deleteJob: EventEmitter<any> = new EventEmitter();
  @Output()
  startEditingJob = new EventEmitter();
}
