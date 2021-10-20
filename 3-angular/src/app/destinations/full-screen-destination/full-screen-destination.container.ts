import { Component, Output, EventEmitter } from '@angular/core';

import { AppState } from '@app/store/reducers';
import { DestinationSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-full-screen-destination-container',
  templateUrl: 'full-screen-destination.container.html',
  styleUrls: ['full-screen-destination.container.scss'],
})
export class FullScreenDestinationContainerComponent {
  @Output()
  stopFullScreenDestinationMode = new EventEmitter();

  jobs$ = this.store.select(DestinationSelectors.getSelectedDestinationJobs);

  rowHeight = '5:1';
  constructor(private store: Store<AppState>) {}

  changeRowHeight(rowHeight: string) {
    this.rowHeight = rowHeight;
  }
}
