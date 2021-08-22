import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job-form',
  templateUrl: 'add-job-form.component.html',
  styleUrls: ['add-job-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddJobFormComponent implements OnInit {
  @Input()
  isLoading: boolean | undefined | null;

  @Output()
  addJobFormSubmit = new EventEmitter();

  addJobForm: FormGroup = new FormGroup({
    jobDescription: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    hoursUsed: new FormControl(),
  });

  submit(): void {
    // console.log(this.addProductForm.value);
    // this.addProductFormSubmit.emit(this.addProductForm.value);
  }

  ngOnInit() {}
}
