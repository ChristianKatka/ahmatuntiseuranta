import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeContainerComponent implements OnInit {
  ngOnInit(): void {}
}
