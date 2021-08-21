import { Component } from '@angular/core';
import { RouterActions } from '@app/store/actions';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/reducers';

@Component({
  selector: 'cmysafe-back-arrow',
  templateUrl: './back-arrow.container.html',
  styleUrls: ['./back-arrow.container.scss'],
})
export class BackArrowContainerComponent {
  constructor(private store: Store<AppState>) {}

  navigateBack() {
    this.store.dispatch(RouterActions.back());
  }
}
