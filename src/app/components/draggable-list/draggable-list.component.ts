import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem} from '@angular/cdk/drag-drop';
import {ControlTypeEnum} from '../interfaces/control-type.enum';
import {DynamicFormConfig} from '../interfaces/dynamic-form-config.interface';

@Component({
  selector: 'app-draggable-list',
  templateUrl: './draggable-list.component.html',
  styleUrls: ['./draggable-list.component.scss']
})
export class DraggableListComponent {

  readonly CONTROL_TYPE_ENUM = ControlTypeEnum;

  itemToEdit = 'userName';

  controlsList = [
    this.getTextControlConfig(),
    this.getEmailControlConfig(),
    this.getPasswordControlConfig(),
    this.getNumberControlConfig(),
    this.getSelectControlConfig(),
    this.getDateControlConfig(),
    this.getDate_timeControlConfig(),
    this.getTimeControlConfig(),
    this.getMonthControlConfig(),
    this.getWeekControlConfig(),
    this.getCheck_boxControlConfig(),
    this.getRadioControlConfig(),
    this.getRangeControlConfig(),
    this.getTelControlConfig(),
    this.getUrlControlConfig(),
    this.getFileControlConfig(),
    this.getColorControlConfig(),
  ];

  selectedControlsList = [
    this.getTextControlConfig(),
  ];

  drop(event: CdkDragDrop<DynamicFormConfig[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      event.container.data[event.currentIndex] = JSON.parse(JSON.stringify(event.container.data[event.currentIndex]))
      event.container.data[event.currentIndex].id = new Date().getTime().toString();
    }
  }

  drop2(event: CdkDragDrop<DynamicFormConfig[]>) {
    /*if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }*/
  }

  stopDropPredicate(item) {
    return false;
  }

  deleteControl(selectedControlsList: DynamicFormConfig[], $index: number) {
    const isConfirmed = confirm('Are you sure! Do you want to delete?');
    if (isConfirmed) {
      selectedControlsList.splice($index, 1);
    }
  }

  getControlConfig(type: ControlTypeEnum): DynamicFormConfig {
    switch (type) {
      case ControlTypeEnum.TEXT:
        return this.getTextControlConfig()
        break;
      case ControlTypeEnum.EMAIL:
        return this.getEmailControlConfig()
        break;
      case ControlTypeEnum.PASSWORD:
        return this.getPasswordControlConfig()
        break;
      case ControlTypeEnum.NUMBER:
        return this.getNumberControlConfig()
        break;
      case ControlTypeEnum.SELECT:
        return this.getSelectControlConfig()
        break;
      case ControlTypeEnum.DATE:
        return this.getDateControlConfig()
        break;
      case ControlTypeEnum.DATE_TIME:
        return this.getDate_timeControlConfig()
        break;
      case ControlTypeEnum.TIME:
        return this.getTimeControlConfig()
        break;
      case ControlTypeEnum.MONTH:
        return this.getMonthControlConfig()
        break;
      case ControlTypeEnum.WEEK:
        return this.getWeekControlConfig()
        break;
      case ControlTypeEnum.CHECK_BOX:
        return this.getCheck_boxControlConfig()
        break;
      case ControlTypeEnum.RADIO:
        return this.getRadioControlConfig()
        break;
      case ControlTypeEnum.RANGE:
        return this.getRangeControlConfig()
        break;
      case ControlTypeEnum.TEL:
        return this.getTelControlConfig()
        break;
      case ControlTypeEnum.URL:
        return this.getUrlControlConfig()
        break;
      case ControlTypeEnum.FILE:
        return this.getFileControlConfig()
        break;
      case ControlTypeEnum.COLOR:
        return this.getColorControlConfig()
        break;
      default:
        return this.getTextControlConfig();
        break;
    }
  }

  getTextControlConfig(): DynamicFormConfig {
    return {
      label: "TEXT Control",
      placeholder: "Provide valid User Name",
      id: "userName",
      type: ControlTypeEnum.TEXT,
      help: "Provide valid User Name in between 30 to 10 characters",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "Vamsee Kalyan",
      min: 3,
      max: 30,
      required: true,
      minErrorMessage: "User Name required 3 number",
      requiredErrorMessage: "User Name is required"
    };

  }

  getEmailControlConfig(): DynamicFormConfig {
    return {
      label: "EMAIL Control",
      placeholder: "Provide valid Email Address",
      id: "emailAddress",
      type: ControlTypeEnum.EMAIL,
      help: "Provide valid Email Address",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "vamsee.flex@gmail.com",
      min: 5,
      max: 50,
      required: true,
      minErrorMessage: "Email Address required 5 characters",
      emailErrorMessage:
        "Invalid Email Address, Please Provide valid Email Address",
      requiredErrorMessage: "Email Address is required"
    };

  }

  getPasswordControlConfig(): DynamicFormConfig {
    return {
      label: "PASSWORD Control",
      placeholder: "Provide valid Password",
      id: "password",
      type: ControlTypeEnum.PASSWORD,
      help: "Provide valid Password",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "123",
      min: 3,
      max: 10,
      required: true,
      minErrorMessage: "Password required 3 number",
      requiredErrorMessage: "Password is required"
    };

  }

  getNumberControlConfig(): DynamicFormConfig {
    return {
      label: "NUMBER Control",
      id: "height",
      placeholder: "Provide valid Height",
      type: ControlTypeEnum.NUMBER,
      help:
        "Provide your Height & Height should be in between 3 feets to 7 feets",
      width: "col-12",
      offset: "offset-0",
      defaultValue: 5.9,
      min: 3,
      max: 7,
      required: true,
      minErrorMessage: "Height should be more than 2",
      maxErrorMessage: "Height should be less than 8",
      requiredErrorMessage:
        "Height is required, Provide your Height in between 2 to 7"
    };

  }

  getSelectControlConfig(): DynamicFormConfig {
    return {
      label: "SELECT Control",
      placeholder: "Select your Hobby",
      id: "hobby",
      type: ControlTypeEnum.SELECT,
      help: "Select your Hobby",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "2",
      dataProvider: [
        {id: "1", label: "Option 1"},
        {id: "2", label: "Option 2"},
        {id: "3", label: "Option 3"},
        {id: "4", label: "Option 4"},
        {id: "5", label: "Option 5"}
      ],
      idField: "id",
      labelFiled: "label",
      required: true,
      requiredErrorMessage: "Hobby is required"
    }

  }

  getDateControlConfig(): DynamicFormConfig {
    return {
      label: "DATE Control",
      id: "dateOfBirth",
      type: ControlTypeEnum.DATE,
      placeholder: "Provide valid Date of Birth",
      help:
        "Provide your Date of Birth & should be in between 1st Aug 2020 to 15th Aug 2020",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "2020-08-10",
      min: "2020-07-01",
      max: "2020-09-15",
      required: true,
      minErrorMessage:
        "Date of Birth should be more than or equal to 01-Jul-2020",
      maxErrorMessage:
        "Date of Birth should be less than or equal to 15-Sep-2020",
      requiredErrorMessage: "Date of Birth is required"
    };

  }

  getDate_timeControlConfig(): DynamicFormConfig {
    return {
      label: "DATE_TIME Control",
      id: "dateOfBirthTime",
      type: ControlTypeEnum.DATE_TIME,
      placeholder: "Provide valid Date of Birth & Time",
      help:
        "Provide your Date of Birth & Time & should be in between 1st Aug 2020 to 15th Aug 2020",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "2020-08-10T08:30",
      min: "2020-07-01T00:00",
      max: "2020-09-15T24:00",
      required: true,
      minErrorMessage:
        "Date of Birth & Time should be more than or equal to 01-Jul-2020",
      maxErrorMessage:
        "Date of Birth & Time should be less than or equal to 15-Sep-2020",
      requiredErrorMessage: "Date of Birth & Time is required"
    };

  }

  getTimeControlConfig(): DynamicFormConfig {
    return {
      label: "TIME Control",
      id: "selectTime",
      type: ControlTypeEnum.TIME,
      placeholder: "Provide valid Time",
      help: "Provide Time & should be in between 09:00 to 18:00",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "09:30",
      min: "09:00",
      max: "18:00",
      required: true,
      minErrorMessage: "Time should be more than or equal to 09:00",
      maxErrorMessage: "Time should be less than or equal to 18:00",
      requiredErrorMessage: "Time is required"
    };

  }

  getMonthControlConfig(): DynamicFormConfig {
    return {
      label: "MONTH Control",
      id: "selectMonth",
      type: ControlTypeEnum.MONTH,
      placeholder: "Provide valid Date of Birth & Time",
      help:
        "Provide your Date of Birth & Time & should be in between 1st Aug 2020 to 15th Aug 2020",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "2020-05",
      min: "2018-07",
      max: "2020-09",
      required: true,
      minErrorMessage: "Month should be more than or equal to July 2018",
      maxErrorMessage: "Month should be less than or equal to Sep 2020",
      requiredErrorMessage: "Month is required"
    };

  }

  getWeekControlConfig(): DynamicFormConfig {
    return {
      label: "WEEK Control",
      id: "selectWeek",
      type: ControlTypeEnum.WEEK,
      placeholder: "Provide valid Week",
      help:
        "Provide Week & should be in between Week 32, 2020 to Week 35, 2020",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "2020-W34",
      min: "2020-W32",
      max: "2020-W35",
      required: true,
      minErrorMessage: "Week should be more than or equal to Week 32, 2020",
      maxErrorMessage: "Week should be less than or equal to Week 35, 2020",
      requiredErrorMessage: "Week is required"
    };

  }

  getCheck_boxControlConfig(): DynamicFormConfig {
    return {
      label: "CHECK_BOX Control",
      placeholder: "Select your Technologies",
      id: "technologies",
      type: ControlTypeEnum.CHECK_BOX,
      help: "Select your Technologies",
      width: "col-12",
      offset: "offset-0",
      defaultValue: ["2", "4"],
      dataProvider: [
        {id: "1", label: "Technology 1"},
        {id: "2", label: "Technology 2"},
        {id: "3", label: "Technology 3"},
        {id: "4", label: "Technology 4"},
        {id: "5", label: "Technology 5"}
      ],
      idField: "id",
      labelFiled: "label",
      required: true,
      requiredErrorMessage: "Hobby is required",
      min: 2,
      max: 4,
      minErrorMessage: "Select Minimum 2 Technologies",
      maxErrorMessage: "Select Maximum 4 Technologies only"
    };
  }

  getRadioControlConfig(): DynamicFormConfig {
    return {
      label: "RADIO Control",
      placeholder: "Select your Blood Group",
      id: "bloodGroup",
      type: ControlTypeEnum.RADIO,
      help: "Select your Blood Group",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "1",
      dataProvider: [
        {id: "1", label: "O+"},
        {id: "2", label: "O-"},
        {id: "3", label: "A+"},
        {id: "4", label: "A-"},
        {id: "5", label: "B+"},
        {id: "6", label: "B-"},
        {id: "7", label: "AB+"},
        {id: "8", label: "AB-"}
      ],
      idField: "id",
      labelFiled: "label",
      required: true,
      requiredErrorMessage: "Blood Group is required"
    };

  }

  getRangeControlConfig(): DynamicFormConfig {
    return {
      label: "RANGE Control",
      id: "age",
      placeholder: "Provide valid Age",
      type: ControlTypeEnum.RANGE,
      help: "Provide your age & Age should be in between 18 to 30",
      width: "col-12",
      offset: "offset-0",
      defaultValue: 20,
      min: 18,
      max: 30,
      required: true,
      minErrorMessage: "Age should be more than 17",
      maxErrorMessage: "Age should be less than 31",
      requiredErrorMessage:
        "Age is required, Provide your age in between 17 to 31"
    };

  }

  getTelControlConfig(): DynamicFormConfig {
    return {
      label: "TEL Control",
      placeholder: "Provide valid Mobile Phone Number",
      id: "mobilePhoneNumber",
      type: ControlTypeEnum.TEL,
      help: "Provide valid Indian Mobile Phone Number",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "9962266742",
      min: 3,
      max: 10,
      required: true,
      minErrorMessage: "Mobile Phone Number required 3 number",
      patternErrorMessage: "Invalid mobile phone number format",
      requiredErrorMessage: "Mobile Phone Number is required",
      pattern: "^[7-9][0-9]{9}$"
    };

  }

  getUrlControlConfig(): DynamicFormConfig {
    return {
      label: "URL Control",
      placeholder: "Provide valid Web Address",
      id: "webAddress",
      type: ControlTypeEnum.URL,
      help: "Provide valid Web Address",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "https://www.google.com/",
      min: 10,
      max: 50,
      required: true,
      minErrorMessage: "Web Address required 10 characters",
      requiredErrorMessage: "Web Address is required"
    };

  }

  getFileControlConfig(): DynamicFormConfig {
    return {
      label: "FILE Control",
      placeholder: "Select File to Upload",
      id: "fileUpload",
      type: ControlTypeEnum.FILE,
      accept: "image/*",
      help: "Select File to Upload",
      width: "col-12",
      offset: "offset-0",
      defaultValue: [],
      min: 200000,
      max: 300000,
      required: true,
      multiple: false,
      minErrorMessage: "File size should be more than 0.0001 MB",
      maxErrorMessage: "File size should be less than 1 MB",
      requiredErrorMessage: "File is required"
    };

  }

  getColorControlConfig(): DynamicFormConfig {
    return {
      label: "COLOR Control",
      placeholder: "Provide valid Color",
      id: "color",
      type: ControlTypeEnum.COLOR,
      help: "Provide valid Color",
      width: "col-12",
      offset: "offset-0",
      defaultValue: "#ff0000",
      required: true,
      requiredErrorMessage: "Color is required"
    };

  }
}


