import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddDestinationBottomSheetContainerComponent } from '@app/destinations/add-destination-bottom-sheet/add-destination-bottom-sheet.container';
import { AddJobBottomSheetContainerComponent } from '@app/jobs/add-job-bottom-sheet/add-job-bottom-sheet.container';
import { JobBottomSheetContainerComponent } from '@app/jobs/job-bottom-sheet/job-bottom-sheet.container';

@Injectable({
  providedIn: 'root',
})
export class BottomSheetService {
  constructor(private bottomSheet: MatBottomSheet) {}

  openAddDestinationBottomsheet() {
    this.bottomSheet.open(AddDestinationBottomSheetContainerComponent);
  }

  closeAddDestinationBottomsheet() {
    this.bottomSheet.dismiss(AddDestinationBottomSheetContainerComponent);
  }


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
