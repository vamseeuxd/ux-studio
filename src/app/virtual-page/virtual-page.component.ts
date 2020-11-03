import {Component, OnInit} from '@angular/core';
import {EIGHT, FIVE, FOUR, NINE, SEVEN, SIX, THREE, TWO} from '@angular/cdk/keycodes';

export enum COMPONENT_TYPE {
  ALERT_SUCCESS = 'alert_success',
  ALERT_INFO = 'alert_info',
  ALERT_WARNING = 'alert_warning',
  ALERT_DANGER = 'alert_danger',
  CAROUSEL = 'carousel',
  ACCORDION = 'accordion',
  PROGRESSBAR = 'progressbar',
  TAB_SET = 'tab_set',
  PAGINATION = 'pagination',
  CARD = 'card',
}

export enum GRID_SIZE {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ELEVEN = 11,
  TWELVE = 12,
}

export interface IComponentConfig {
  id: string,
  type: COMPONENT_TYPE;
  col_all: GRID_SIZE;
  col_xs: GRID_SIZE;
  col_sm: GRID_SIZE;
  col_md: GRID_SIZE;
  col_lg: GRID_SIZE;
  col_xl: GRID_SIZE;
  offset_all: GRID_SIZE;
  offset_xs: GRID_SIZE;
  offset_sm: GRID_SIZE;
  offset_md: GRID_SIZE;
  offset_lg: GRID_SIZE;
  offset_xl: GRID_SIZE;
}


@Component({
  selector: 'app-virtual-page',
  templateUrl: './virtual-page.component.html',
  styleUrls: ['./virtual-page.component.scss']
})
export class VirtualPageComponent {

  readonly component_type = COMPONENT_TYPE;
  readonly grid_size = GRID_SIZE;
  components: IComponentConfig[] = [];

  editComponentId: string;

  deleteComponent(component: IComponentConfig) {
    const isConfirm = confirm('Are you sure! Do you want to delete the component?')
    if (isConfirm) {
      this.components = this.components.filter(d => d.id != component.id);
      this.editComponentId = '';
    }
  }

  addAlertSuccess() {
    this.components.push(
      {type: COMPONENT_TYPE.ALERT_SUCCESS, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addAlertInfo() {
    this.components.push(
      {type: COMPONENT_TYPE.ALERT_INFO, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addAlertWarning() {
    this.components.push(
      {type: COMPONENT_TYPE.ALERT_WARNING, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addAlertDanger() {
    this.components.push(
      {type: COMPONENT_TYPE.ALERT_DANGER, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addCarousel() {
    this.components.push(
      {type: COMPONENT_TYPE.CAROUSEL, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addAccordion() {
    this.components.push(
      {type: COMPONENT_TYPE.ACCORDION, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addProgressbar() {
    this.components.push(
      {type: COMPONENT_TYPE.PROGRESSBAR, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addTabSet() {
    this.components.push(
      {type: COMPONENT_TYPE.TAB_SET, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addPagination() {
    this.components.push(
      {type: COMPONENT_TYPE.PAGINATION, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addCard() {
    this.components.push(
      {type: COMPONENT_TYPE.CARD, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  getLayout() {
    return {
      col_all: GRID_SIZE.TWELVE,
      col_xl: GRID_SIZE.ZERO,
      col_lg: GRID_SIZE.ZERO,
      col_md: GRID_SIZE.ZERO,
      col_sm: GRID_SIZE.ZERO,
      col_xs: GRID_SIZE.ZERO,
      offset_all: GRID_SIZE.ZERO,
      offset_xl: GRID_SIZE.ZERO,
      offset_lg: GRID_SIZE.ZERO,
      offset_md: GRID_SIZE.ZERO,
      offset_sm: GRID_SIZE.ZERO,
      offset_xs: GRID_SIZE.ZERO
    }
  }

  editComponent(editComponentId: string) {
    this.editComponentId = editComponentId;
  }

  cloneComponent($event: IComponentConfig) {
    console.log($event);
    this.components.push(
      {...$event, id: new Date().getTime().toString()}
    );
    this.editComponentId = '';
  }
}
