import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: 'list-jobs.component.html',
  styleUrls: ['list-jobs.component.scss'],
})
export class ListJobsComponent implements OnChanges {
  @Input()
  productJobs!: any[];

  @Output()
  onJobSelect: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.productJobs);
  }

  selectJob(job: any) {
    this.onJobSelect.emit(job);
  }
}
