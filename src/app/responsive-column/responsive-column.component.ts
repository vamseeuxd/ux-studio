import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {
  GRID_SIZE,
  IComponentConfig,
  HORIZONTAL_PADDING_SIZE,
  PROPERTY_TYPE
} from '../virtual-page/virtual-page.component';
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
  readonly padding_size = HORIZONTAL_PADDING_SIZE;
  readonly property_type = PROPERTY_TYPE;
  action: string;
  subAction: string;
  actionValue: string;
  allValue: number;
  xlValue: number;
  openWidth = false;
  openOffset = false;
  openPadding = false;
  openMargin = false;

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

  updateHorizontalPaddingAll() {
    this.className = this.className + ' ' + 'px-' + this.component.horizontal_padding_all;
  }

  updateHorizontalPaddingXl() {
    this.className = this.className + ' ' + 'px-xl-' + this.component.horizontal_padding_xl;
  }

  updateHorizontalPaddingLg() {
    this.className = this.className + ' ' + 'px-lg-' + this.component.horizontal_padding_lg;
  }

  updateHorizontalPaddingMd() {
    this.className = this.className + ' ' + 'px-md-' + this.component.horizontal_padding_md;
  }

  updateHorizontalPaddingSm() {
    this.className = this.className + ' ' + 'px-sm-' + this.component.horizontal_padding_sm;
  }

  updateHorizontalPaddingXs() {
    this.className = this.className + ' ' + 'px-xs-' + this.component.horizontal_padding_xs;
  }

  updateVerticalPaddingAll() {
    this.className = this.className + ' ' + 'py-' + this.component.vertical_padding_all;
  }

  updateVerticalPaddingXl() {
    this.className = this.className + ' ' + 'py-xl-' + this.component.vertical_padding_xl;
  }

  updateVerticalPaddingLg() {
    this.className = this.className + ' ' + 'py-lg-' + this.component.vertical_padding_lg;
  }

  updateVerticalPaddingMd() {
    this.className = this.className + ' ' + 'py-md-' + this.component.vertical_padding_md;
  }

  updateVerticalPaddingSm() {
    this.className = this.className + ' ' + 'py-sm-' + this.component.vertical_padding_sm;
  }

  updateVerticalPaddingXs() {
    this.className = this.className + ' ' + 'py-xs-' + this.component.vertical_padding_xs;
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
    this.updateHorizontalPaddingAll();
    this.updateHorizontalPaddingXl();
    this.updateHorizontalPaddingLg();
    this.updateHorizontalPaddingMd();
    this.updateHorizontalPaddingSm();
    this.updateHorizontalPaddingXs();
    this.updateVerticalPaddingAll();
    this.updateVerticalPaddingXl();
    this.updateVerticalPaddingLg();
    this.updateVerticalPaddingMd();
    this.updateVerticalPaddingSm();
    this.updateVerticalPaddingXs();
  }

  editWidth() {
    this.action = 'Width';
    this.allValue = this.component.col_all;
    this.xlValue = this.component.col_xl;
  }
}
