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
  POPOVER = 'popover',
  RATING = 'rating',
  SORTTABLE = 'sorttable',
  TIMEPICKER = 'timepicker',
  TOOLTIP = 'tooltip',
  TYPEAHEAD = 'typeahead',
  MODAL = 'modal',
  DROPDOWN = 'dropdown',
  DATEPICKER = 'datepicker',
  BUTTON = 'button',

}

export enum GRID_SIZE {
  NONE = -1,
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

export enum HORIZONTAL_PADDING_SIZE {
  NONE = -1,
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export enum PROPERTY_TYPE {
  TEXT = 0,
  NUMBER = 1,
  DROPDOWN = 3,
}

export interface IPropertyDropDownOption {
  id: string;
  label: string;
  value: string | number | boolean;
}

export interface IProperty {
  id: string;
  name: string;
  value: string | number | boolean;
  type: PROPERTY_TYPE;
  dropDownOption?: IPropertyDropDownOption[];
}

export interface IComponentConfig {
  id: string,
  type: COMPONENT_TYPE;
  horizontal_padding_all: HORIZONTAL_PADDING_SIZE;
  horizontal_padding_xs: HORIZONTAL_PADDING_SIZE;
  horizontal_padding_sm: HORIZONTAL_PADDING_SIZE;
  horizontal_padding_md: HORIZONTAL_PADDING_SIZE;
  horizontal_padding_lg: HORIZONTAL_PADDING_SIZE;
  horizontal_padding_xl: HORIZONTAL_PADDING_SIZE;
  vertical_padding_all: HORIZONTAL_PADDING_SIZE;
  vertical_padding_xs: HORIZONTAL_PADDING_SIZE;
  vertical_padding_sm: HORIZONTAL_PADDING_SIZE;
  vertical_padding_md: HORIZONTAL_PADDING_SIZE;
  vertical_padding_lg: HORIZONTAL_PADDING_SIZE;
  vertical_padding_xl: HORIZONTAL_PADDING_SIZE;
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
  properties?: IProperty[];
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

  constructor() {
    this.addAlertDanger();
    setTimeout(() => this.addAlertSuccess());

  }

  deleteComponent(component: IComponentConfig) {
    const isConfirm = confirm('Are you sure! Do you want to delete the component?')
    if (isConfirm) {
      this.components = this.components.filter(d => d.id != component.id);
      this.editComponentId = '';
    }
  }

  getPropValueById(props: IProperty[], propId: string): string | number | boolean {
    const targetedProp = props.find(d => d.id == propId);
    if (targetedProp) {
      return targetedProp.value;
    }
    return '';
  }

  addAlertSuccess() {
    this.components.push(
      {
        type: COMPONENT_TYPE.ALERT_SUCCESS, ...this.getLayout(), id: new Date().getTime().toString(),
        properties: [
          {name: 'Title', value: 'Vamsee Kalyan', type: PROPERTY_TYPE.TEXT, id: 'title'},
          {
            name: 'Message',
            value: 'He is a Softeware expert and Arc',
            type: PROPERTY_TYPE.TEXT,
            id: 'message'
          },
          {
            name: 'Alert Type', value: 'success', type: PROPERTY_TYPE.DROPDOWN, id: 'type',
            dropDownOption: [
              {id: 'success', label: 'Success Alert', value: 'success'},
              {id: 'danger', label: 'Danger Alert', value: 'danger'},
              {id: 'info', label: 'Info Alert', value: 'info'},
            ]
          },
        ]
      }
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

  addpopover() {
    this.components.push(
      {type: COMPONENT_TYPE.POPOVER, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addrating() {
    this.components.push(
      {type: COMPONENT_TYPE.RATING, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addsorttable() {
    this.components.push(
      {type: COMPONENT_TYPE.SORTTABLE, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addtimepicker() {
    this.components.push(
      {type: COMPONENT_TYPE.TIMEPICKER, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addtooltip() {
    this.components.push(
      {type: COMPONENT_TYPE.TOOLTIP, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }


  addtypeahead() {
    this.components.push(
      {type: COMPONENT_TYPE.TYPEAHEAD, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }


  addmodal() {
    this.components.push(
      {type: COMPONENT_TYPE.MODAL, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  adddropdown() {
    this.components.push(
      {type: COMPONENT_TYPE.DROPDOWN, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  adddatepicker() {
    this.components.push(
      {type: COMPONENT_TYPE.DATEPICKER, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  addbutton() {
    this.components.push(
      {type: COMPONENT_TYPE.BUTTON, ...this.getLayout(), id: new Date().getTime().toString()}
    );
  }

  getLayout() {
    return {
      col_all: GRID_SIZE.SIX,
      col_xl: GRID_SIZE.ZERO,
      col_lg: GRID_SIZE.ZERO,
      col_md: GRID_SIZE.ZERO,
      col_sm: GRID_SIZE.ZERO,
      col_xs: GRID_SIZE.ZERO,
      offset_all: GRID_SIZE.NONE,
      offset_xl: GRID_SIZE.NONE,
      offset_lg: GRID_SIZE.NONE,
      offset_md: GRID_SIZE.NONE,
      offset_sm: GRID_SIZE.NONE,
      offset_xs: GRID_SIZE.NONE,
      horizontal_padding_all: HORIZONTAL_PADDING_SIZE.NONE,
      horizontal_padding_xl: HORIZONTAL_PADDING_SIZE.NONE,
      horizontal_padding_lg: HORIZONTAL_PADDING_SIZE.NONE,
      horizontal_padding_md: HORIZONTAL_PADDING_SIZE.NONE,
      horizontal_padding_sm: HORIZONTAL_PADDING_SIZE.NONE,
      horizontal_padding_xs: HORIZONTAL_PADDING_SIZE.NONE,
      vertical_padding_all: HORIZONTAL_PADDING_SIZE.NONE,
      vertical_padding_xs: HORIZONTAL_PADDING_SIZE.NONE,
      vertical_padding_sm: HORIZONTAL_PADDING_SIZE.NONE,
      vertical_padding_md: HORIZONTAL_PADDING_SIZE.NONE,
      vertical_padding_lg: HORIZONTAL_PADDING_SIZE.NONE,
      vertical_padding_xl: HORIZONTAL_PADDING_SIZE.NONE,

    }
  }

  editComponent(editComponentId: string) {
    this.editComponentId = this.editComponentId == editComponentId ? '' : editComponentId;
  }

  cloneComponent($event: IComponentConfig) {
    console.log($event);
    this.components.push(
      {...$event, id: new Date().getTime().toString()}
    );
    this.editComponentId = '';
  }
}
