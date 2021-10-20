import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationComponent implements OnInit {
  @Input()
  destination: any | undefined | null;

  @Output()
  deleteDestinationSubmitted: EventEmitter<any> = new EventEmitter();

  @Output()
  startEditing = new EventEmitter();

  @Output()
  startFullScreenDestinationMode = new EventEmitter();

  @Output()
  openBottomSheetAddJobToDestination = new EventEmitter();

  @Output()
  openBottomSheetAddDestinationToDestination = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteDestination(destinationId: any) {
    this.deleteDestinationSubmitted.next(destinationId);
  }

  addJobToDestination() {
    this.openBottomSheetAddJobToDestination.emit();
  }
}
