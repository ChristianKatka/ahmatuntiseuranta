import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/store/reducers';
import { Store } from '@ngrx/store';
import { DestinationActions } from '../../store/actions';
import { DestinationSelectors } from '@app/store/selectors';
import { BottomSheetService } from '@app/services/bottom-sheet.service';

@Component({
  templateUrl: './destination.container.html',
  styleUrls: ['./destination.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationContainerComponent implements OnInit, OnDestroy {
  destination$ = this.store.select(
    DestinationSelectors.getSelectedDestinationEntity
  );
  editing$ = this.store.select(DestinationSelectors.getIsEditing);
  // fullScreenDestinationMode$ = this.store.select(
  //   DestinationSelectors.getIsFullScreenDestinationMode
  // );

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private bottomSheetService: BottomSheetService
  ) {}
  ngOnInit(): void {
    const destinationId = this.route.snapshot.paramMap.get('destinationId');
    if (destinationId) {
      this.store.dispatch(
        DestinationActions.selectDestination({ destinationId })
      );
    }
  }
  ngOnDestroy() {
    this.store.dispatch(DestinationActions.clearDestinationSelection());
    this.stopEditing();
  }

  deleteDestination(destinationId: string) {
    if (destinationId) {
      this.store.dispatch(
        DestinationActions.deleteDestination({ destinationId })
      );
    }
  }

  startEditing() {
    this.store.dispatch(DestinationActions.startEditing());
  }
  stopEditing() {
    this.store.dispatch(DestinationActions.stopEditing());
  }

  editedDestinationSubmitted(destination: any) {
    this.store.dispatch(DestinationActions.updateDestination({ destination }));
  }

  onOpenBottomSheetAddJobToDestination() {
    this.bottomSheetService.openAddJobBottomsheet();
  }

  onOpenBottomSheetAddDestinationToDestination() {
    this.bottomSheetService.openAddDestinationBottomsheet();
  }

  // onStartFullScreenDestinationMode() {
  //   this.store.dispatch(DestinationActions.startFullScreenDestinationMode());
  // }

  // onStopFullScreenDestinationMode() {
  //   this.store.dispatch(DestinationActions.stopFullScreenDestinationMode());
  // }
}
