import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-full-collection',
  templateUrl: 'full-collection.component.html',
  styleUrls: ['full-collection.component.scss'],
})
export class FullCollectionComponent implements OnInit {
  @Input()
  products: any;

  ngOnInit() {}
}
