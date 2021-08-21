import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    OnInit,
  } from '@angular/core';
  import { MatDialog } from '@angular/material/dialog';
  
  import { Product } from '../../models/product.model';
  import { MAT_DIALOG_DATA } from '@angular/material/dialog';
  
  @Component({
    selector: 'app-view-image-dialog',
    templateUrl: './view-image.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ViewImageComponent implements OnInit {
    @Input()
    product: Product | undefined | null;
    constructor(public dialog: MatDialog) {}
  
    ngOnInit(): void {}
    openDialog(imageUrl: string) {
      const dialogRef = this.dialog.open(ViewImageDialogComponent, {
        data: { imageUrl },
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log(result);
        }
      });
    }
    changeMainImage(imageUrl: string) {
      if (this.product) {
        // this.product.mainImageUrl = imageUrl;
      }
    }

  }
  
  @Component({
    templateUrl: './view-image-dialog.component.html',
    styleUrls: ['./view-image-dialog.component.scss'],
  })
  export class ViewImageDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  }
  