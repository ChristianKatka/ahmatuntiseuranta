import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthExtendedAppState } from '../Auth/store/reducers';
import { AuthenticatedActions } from '@auth/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'admin';

  constructor(private store: Store<AuthExtendedAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(AuthenticatedActions.checkOldUserSession());
  }
}
