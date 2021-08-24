import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-job-dialog',
  templateUrl: './delete-job-dialog.component.html',
  styleUrls: ['./delete-job-dialog.component.scss'],
})
export class DeleteJobDialogComponent {
  @Input()
  jobId: any;

  @Output()
  delete = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(
      DeleteJobDialogConfirmComponent
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(this.jobId);
      }
    });
  }
}

@Component({
  templateUrl: 'delete-job-dialog-confirm.component.html',
})
export class DeleteJobDialogConfirmComponent {}
