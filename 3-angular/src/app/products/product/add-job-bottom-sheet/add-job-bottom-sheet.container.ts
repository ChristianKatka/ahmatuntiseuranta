import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AppState } from '@app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: 'add-job-bottom-sheet.container.html',
  styleUrls: ['add-job-bottom-sheet.container.scss'],
})
export class AddJobBottomSheetContainerComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddJobBottomSheetContainerComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  close() {
    this.bottomSheetRef.dismiss();
  }
}
