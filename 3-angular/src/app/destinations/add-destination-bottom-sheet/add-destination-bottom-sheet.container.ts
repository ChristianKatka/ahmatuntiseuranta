import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DestinationActions } from '@app/store/actions';
import { AppState } from '@app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: 'add-destination-bottom-sheet.container.html',
  styleUrls: ['add-destination-bottom-sheet.container.scss'],
})
export class AddDestinationBottomSheetContainerComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddDestinationBottomSheetContainerComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  close() {
    this.bottomSheetRef.dismiss();
  }

  addDestinationToProduct(destination: any) {
    this.store.dispatch(DestinationActions.createDestination({ destination }));
    this.close();
  }
}
