import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/shared/models/product.model';

@Component({
  selector: 'app-job-edit-form',
  templateUrl: './job-edit-form.component.html',
  styleUrls: ['./job-edit-form.component.scss'],
})
export class JobEditFormComponent implements OnChanges {
  @Input()
  job: any;

  @Output()
  editedJob: EventEmitter<Product> = new EventEmitter();

  dateFormControl = new FormControl();
  timeFormControl = new FormControl();
  jobDescriptionFormControl = new FormControl();

  jobEditForm: FormGroup = new FormGroup({
    date: this.dateFormControl,
    time: this.timeFormControl,
    jobDescription: this.jobDescriptionFormControl,
  });

  ngOnChanges() {
    if (this.job) {
      this.dateFormControl.setValue(this.job.date);
      this.timeFormControl.setValue(this.job.time);
      this.jobDescriptionFormControl.setValue(this.job.jobDescription);
    }
  }

  saveEditForm() {
    if (this.job) {
      this.editedJob.next(this.jobEditForm.value);
    }
  }
}
