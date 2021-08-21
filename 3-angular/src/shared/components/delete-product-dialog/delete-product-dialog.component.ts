import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.scss'],
})
export class DeleteProductDialogComponent {
  @Input()
  productId: any;

  @Output()
  delete = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(
      DeleteProductDialogConfirmComponent
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete.emit(this.productId);
      }
    });
  }
}

@Component({
  templateUrl: 'delete-product-dialog-confirm.component.html',
})
export class DeleteProductDialogConfirmComponent {}
