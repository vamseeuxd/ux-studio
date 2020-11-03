import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {GRID_SIZE, IComponentConfig} from '../virtual-page/virtual-page.component';
import * as _ from "lodash";

@Component({
  selector: 'app-responsive-column',
  templateUrl: './responsive-column.component.html',
  styleUrls: ['./responsive-column.component.scss']
})
export class ResponsiveColumnComponent implements OnInit {
  readonly _lodash = _;
  private _component: IComponentConfig;
  get component(): IComponentConfig {
    return this._component;
  }

  @Input() set component(value: IComponentConfig) {
    this._component = value;
    this.className = '';
    this.changeColSize();
  }

  @Input() editComponentId = '';

  @Output() deleteComponent: EventEmitter<IComponentConfig> = new EventEmitter<IComponentConfig>();
  @Output() cloneComponent: EventEmitter<IComponentConfig> = new EventEmitter<IComponentConfig>();
  @Output() editComponent: EventEmitter<string> = new EventEmitter<string>();

  @HostBinding('class') className = '';

  readonly grid_size = GRID_SIZE;
  action: string;
  subAction: string;
  actionValue: string;
  allValue: number;
  xlValue: number;
  openWidth = false;
  openOffset = false;

  constructor() {
    console.log(this._component);
    console.log(this._component);
  }

  ngOnInit(): void {
  }

  updateColAll() {
    this.className = this.className + ' ' + 'col-' + this.component.col_all;
  }

  updateColXl() {
    this.className = this.className + ' ' + 'col-xl-' + this.component.col_xl;
  }

  updateColLg() {
    this.className = this.className + ' ' + 'col-lg-' + this.component.col_lg;
  }

  updateColMd() {
    this.className = this.className + ' ' + 'col-md-' + this.component.col_md;
  }

  updateColSm() {
    this.className = this.className + ' ' + 'col-sm-' + this.component.col_sm;
  }

  updateColXs() {
    this.className = this.className + ' ' + 'col-xs-' + this.component.col_xs;
  }

  updateOffsetAll() {
    this.className = this.className + ' ' + 'offset-' + this.component.offset_all;
  }

  updateOffsetXl() {
    this.className = this.className + ' ' + 'offset-xl-' + this.component.offset_xl;
  }

  updateOffsetLg() {
    this.className = this.className + ' ' + 'offset-lg-' + this.component.offset_lg;
  }

  updateOffsetMd() {
    this.className = this.className + ' ' + 'offset-md-' + this.component.offset_md;
  }

  updateOffsetSm() {
    this.className = this.className + ' ' + 'offset-sm-' + this.component.offset_sm;
  }

  updateOffsetXs() {
    this.className = this.className + ' ' + 'offset-xs-' + this.component.offset_xs;
  }

  changeColSize() {
    this.className = '';
    this.updateColAll();
    this.updateColXl();
    this.updateColLg();
    this.updateColMd();
    this.updateColSm();
    this.updateColXs();
    this.updateOffsetAll();
    this.updateOffsetXl();
    this.updateOffsetLg();
    this.updateOffsetMd();
    this.updateOffsetSm();
    this.updateOffsetXs();
  }

  editWidth() {
    this.action = 'Width';
    this.allValue = this.component.col_all;
    this.xlValue = this.component.col_xl;
  }
}
