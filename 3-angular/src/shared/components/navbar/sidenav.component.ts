import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticatedActions } from '@auth/store/actions';
import { AuthExtendedAppState } from '../../../Auth/store/reducers';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private store: Store<AuthExtendedAppState>) {}

  logOut() {
    this.store.dispatch(AuthenticatedActions.signOut());
  }
}
