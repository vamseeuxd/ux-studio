import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-slide-nav',
  templateUrl: './left-slide-nav.component.html',
  styleUrls: ['./left-slide-nav.component.scss']
})
export class LeftSlideNavComponent implements OnInit {

  @Input() open = false;
  @Input() width = 250;

  constructor() { }

  ngOnInit(): void {
  }

}
