import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-destinations',
  templateUrl: 'list-destinations.component.html',
  styleUrls: ['list-destinations.component.scss'],
})
export class ListDestinationsComponent {
  @Input()
  productDestinations!: any[];

  @Output()
  onDestinationSelect: EventEmitter<any> = new EventEmitter();

  selectDestination(destination: any) {
    this.onDestinationSelect.emit(destination);
  }
}
