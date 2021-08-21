import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticatedActions } from '@auth/store/actions';
import { AuthExtendedAppState } from '../../../Auth/store/reducers';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private store: Store<AuthExtendedAppState>) {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logOut() {
    this.store.dispatch(AuthenticatedActions.signOut());
  }
}
