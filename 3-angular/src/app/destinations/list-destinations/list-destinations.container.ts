import { Component } from '@angular/core';
import { DestinationActions } from '@app/store/actions';
import { AppState } from '@app/store/reducers';
import { ProductSelectors } from '@app/store/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-destinations-container',
  templateUrl: 'list-destinations.container.html',
  styleUrls: ['list-destinations.container.scss'],
})
export class ListDestinationsContainerComponent {
  destinations$ = this.store.select(ProductSelectors.getSelectedProductDestinations);
  constructor(private store: Store<AppState>) {}

  onDestinationSelect(destination: any) {
    console.log(destination);
    
    this.store.dispatch(DestinationActions.selectDestination({ destinationId: destination.id }));
  }
}
