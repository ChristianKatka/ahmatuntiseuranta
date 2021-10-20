import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-destination-dialog',
  templateUrl: './delete-destination-dialog.component.html',
  styleUrls: ['./delete-destination-dialog.component.scss'],
})
export class DeleteDestinationDialogComponent {
  @Input()
  destinationId: any;

  @Output()
  delete = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(
      DeleteDestinationDialogConfirmComponent
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(this.destinationId);
      }
    });
  }
}

@Component({
  templateUrl: 'delete-destination-dialog-confirm.component.html',
})
export class DeleteDestinationDialogConfirmComponent {}
