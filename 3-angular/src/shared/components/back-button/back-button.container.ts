import { Component } from '@angular/core';
import { RouterActions } from '@app/store/actions';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/reducers';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.container.html',
  styleUrls: ['./back-button.container.scss'],
})
export class BackButtonContainerComponent {
  constructor(private store: Store<AppState>) {}

  navigateBack() {
    this.store.dispatch(RouterActions.back());
  }
}
