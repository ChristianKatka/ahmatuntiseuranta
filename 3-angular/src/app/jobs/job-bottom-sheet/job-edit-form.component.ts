import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-edit-form',
  templateUrl: './job-edit-form.component.html',
  styleUrls: ['./job-edit-form.component.scss'],
})
export class JobEditFormComponent implements OnChanges {
  @Input()
  job: any;

  @Output()
  editedJob: EventEmitter<any> = new EventEmitter();

  dateFormControl = new FormControl();
  timeFormControl = new FormControl();
  hoursUsedFormControl = new FormControl();
  jobDescriptionFormControl = new FormControl();

  jobEditForm: FormGroup = new FormGroup({
    date: this.dateFormControl,
    time: this.timeFormControl,
    hoursUsed: this.hoursUsedFormControl,
    jobDescription: this.jobDescriptionFormControl,
  });

  ngOnChanges() {
    if (this.job) {
      this.dateFormControl.setValue(this.job.date);
      this.timeFormControl.setValue(this.job.time);
      this.hoursUsedFormControl.setValue(this.job.hoursUsed);
      this.jobDescriptionFormControl.setValue(this.job.jobDescription);
    }
  }

  submit() {
    const editedJob = {  ...this.job, ...this.jobEditForm.value, };
    this.editedJob.emit(editedJob);
  }
}
