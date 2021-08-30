import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddJobBottomSheetContainerComponent } from '@app/products/product/add-job-bottom-sheet/add-job-bottom-sheet.container';
import { JobBottomSheetContainerComponent } from '@app/products/product/job-bottom-sheet/job-bottom-sheet.container';

@Injectable({
  providedIn: 'root',
})
export class BottomSheetService {
  constructor(private bottomSheet: MatBottomSheet) {}

  openAddJobBottomsheet() {
    this.bottomSheet.open(AddJobBottomSheetContainerComponent);
  }
  closeAddJobBottomsheet() {
    this.bottomSheet.dismiss(AddJobBottomSheetContainerComponent);
  }

  openJobBottomsheet() {
    this.bottomSheet.open(JobBottomSheetContainerComponent);
  }
  closeJobBottomsheet() {
    this.bottomSheet.dismiss(JobBottomSheetContainerComponent);
  }
}
