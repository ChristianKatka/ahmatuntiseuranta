import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: 'list-jobs.component.html',
  styleUrls: ['list-jobs.component.scss'],
})
export class ListJobsComponent {
  @Input()
  productJobs!: any[];

  @Output()
  onJobSelect: EventEmitter<any> = new EventEmitter();

  selectJob(job: any) {
    console.log(job);
    this.onJobSelect.emit(job);
  }
}
