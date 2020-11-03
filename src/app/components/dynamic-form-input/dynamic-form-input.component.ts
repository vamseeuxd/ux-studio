import {Component, OnInit, HostBinding, Input, forwardRef} from "@angular/core";
import {NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, FormControl} from "@angular/forms";
import {DynamicFormConfig} from '../interfaces/dynamic-form-config.interface';
import {ControlTypeEnum} from '../interfaces/control-type.enum';

@Component({
  selector: "dynamic-form-input",
  templateUrl: "./dynamic-form-input.component.html",
  styleUrls: ["./dynamic-form-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DynamicFormInputComponent),
      multi: true
    }
  ]
})
export class DynamicFormInputComponent implements OnInit, ControlValueAccessor, Validator {

  readonly CONTROL_TYPE_ENUM = ControlTypeEnum;

  @HostBinding("class") cssClass = "form-group d-block";
  _value: any;

  get value(): any {
    return this._value;
  }

  set value(val: any) {
    if (this.config.type == "range" || this.config.type == "number") {
      if (typeof val == "string" && val.trim().length == 0) {
        this._value = null;
      } else {
        if (val == null || val == undefined || isNaN(val)) {
          this._value = null;
        } else {
          this._value = Number(val);
        }
      }
    } else {
      this._value = val;
    }
  }

  checkBoxDataProvider = [];

  @Input() set label(value) {
    this._config.label = value;
  }

  get label() {
    return this._config.label;
  }

  @Input() set placeholder(value) {
    this._config.placeholder = value;
  }

  get placeholder() {
    return this._config.placeholder;
  }

  @Input() set type(value) {
    this._config.type = value;
  }

  get type() {
    return this._config.type;
  }

  @Input() set help(value) {
    this._config.help = value;
  }

  get help() {
    return this._config.help;
  }

  @Input() set width(value) {
    this._config.width = value;
  }

  get width() {
    return this._config.width;
  }

  @Input() set offset(value) {
    this._config.offset = value;
  }

  get offset() {
    return this._config.offset;
  }

  @Input() set defaultValue(value) {
    this._config.defaultValue = value;
  }

  get defaultValue() {
    return this._config.defaultValue;
  }

  @Input() set min(value) {
    this._config.min = value;
  }

  get min() {
    return this._config.min;
  }

  @Input() set minErrorMessage(value) {
    this._config.minErrorMessage = value;
  }

  get minErrorMessage() {
    return this._config.minErrorMessage;
  }

  @Input() set max(value) {
    this._config.max = value;
  }

  get max() {
    return this._config.max;
  }

  @Input() set maxErrorMessage(value) {
    this._config.maxErrorMessage = value;
  }

  get maxErrorMessage() {
    return this._config.maxErrorMessage;
  }

  @Input() set pattern(value) {
    this._config.pattern = value;
  }

  get pattern() {
    return this._config.pattern;
  }

  @Input() set patternErrorMessage(value) {
    this._config.patternErrorMessage = value;
  }

  get patternErrorMessage() {
    return this._config.patternErrorMessage;
  }

  @Input() set required(value) {
    this._config.required = value;
  }

  get required() {
    return this._config.required;
  }

  @Input() set requiredErrorMessage(value) {
    this._config.requiredErrorMessage = value;
  }

  get requiredErrorMessage() {
    return this._config.requiredErrorMessage;
  }

  @Input() set emailErrorMessage(value) {
    this._config.emailErrorMessage = value;
  }

  get emailErrorMessage() {
    return this._config.emailErrorMessage;
  }

  @Input() set dataProvider(value) {
    this._config.dataProvider = value;
  }

  get dataProvider() {
    return this._config.dataProvider;
  }

  @Input() set idField(value) {
    this._config.idField = value;
  }

  get idField() {
    return this._config.idField;
  }

  @Input() set labelFiled(value) {
    this._config.labelFiled = value;
  }

  get labelFiled() {
    return this._config.labelFiled;
  }

  _config: DynamicFormConfig = {
    label: "Controller Label",
    placeholder: "",
    type: ControlTypeEnum.TEXT,
    help: "Controller Help Text",
    width: "col-md-6",
    offset: "offset-md-0",
    defaultValue: "",
    min: null,
    minErrorMessage: null,
    max: null,
    maxErrorMessage: null,
    pattern: null,
    patternErrorMessage: null,
    required: false,
    requiredErrorMessage: null,
    emailErrorMessage: null,
    dataProvider: null,
    idField: 'id',
    labelFiled: 'label'
  };

  @Input() set config(_config: DynamicFormConfig) {
    this._config = _config;
    this.updateCssClass();
    this.updateValue();
  }

  get config(): DynamicFormConfig {
    return this._config;
  }

  updateCssClass() {
    this.cssClass = `form-group d-block ${this.config.width} ${
      this.config.offset
    }`;
  }

  updateValue() {
    this.value = this.config.defaultValue;
    this.propagateChange(this.value);
  }

  isValid(): { messsage: string; error: string } {
    switch (this.config.type) {
      case ControlTypeEnum.TEXT:
      case ControlTypeEnum.TEL:
      case ControlTypeEnum.PASSWORD:
      case ControlTypeEnum.URL:
      case ControlTypeEnum.EMAIL:
      case ControlTypeEnum.RADIO:
      case ControlTypeEnum.SELECT:
        return this.isTextInputValid();
        break;
      case ControlTypeEnum.NUMBER:
      case ControlTypeEnum.RANGE:
        return this.isNumberInputValid();
        break;
      case ControlTypeEnum.FILE:
        return this.isFileInputValid();
        break;
      case ControlTypeEnum.DATE:
      case ControlTypeEnum.DATE_TIME:
      case ControlTypeEnum.MONTH:
      case ControlTypeEnum.TIME:
      case ControlTypeEnum.WEEK:
        return this.isDateInputValid();
        break;
      case ControlTypeEnum.CHECK_BOX:
        return this.isCheckBoxValid();
        break;
      default:
        return {messsage: "", error: ""};
    }
  }

  isTextInputValid(): { messsage: string; error: string } {
    let messsage = "";
    let error = "";
    if (this.config.required && !this.value) {
      if (this.config.requiredErrorMessage) {
        messsage = this.config.requiredErrorMessage;
      } else {
        messsage = `${this.config.label} is required`;
      }
      error = "required";
    } else if (
      this.config.min &&
      this.value &&
      this.value.length < this.config.min
    ) {
      if (this.config.minErrorMessage) {
        messsage = this.config.minErrorMessage;
      } else {
        messsage = `${this.config.label} required Minimum ${
          this.config.min
        } characters `;
      }
      error = "min";
    } else if (
      this.config.max &&
      this.value &&
      this.value.length > this.config.max
    ) {
      if (this.config.maxErrorMessage) {
        messsage = this.config.maxErrorMessage;
      } else {
        messsage = `${this.config.label} required Maximum ${
          this.config.max
        } characters `;
      }
      error = "min";
    } else if (this.config.pattern && this.value) {
      const re = new RegExp(this.config.pattern);
      if (!re.test(this.value)) {
        if (this.config.patternErrorMessage) {
          messsage = this.config.patternErrorMessage;
        } else {
          messsage = `${this.config.label} Pattern is mismatched`;
        }
        error = "pattern";
      }
    } else if (this.config.type == "email" && this.value) {
      if (!this.validateEmail(this.value)) {
        if (this.config.emailErrorMessage) {
          messsage = this.config.emailErrorMessage;
        } else {
          messsage = `Invalid Email Address`;
        }
        error = "email";
      }
    }
    return {messsage, error};
  }

  isCheckBoxValid(): { messsage: string; error: string } {
    let messsage = "";
    let error = "";
    if (
      this.config.required &&
      (!this.value || (this.value && this.value.length == 0))
    ) {
      if (this.config.requiredErrorMessage) {
        messsage = this.config.requiredErrorMessage;
      } else {
        messsage = `${this.config.label} is required`;
      }
      error = "required";
    } else if (
      this.config.min &&
      this.value &&
      this.value.length < this.config.min
    ) {
      if (this.config.minErrorMessage) {
        messsage = this.config.minErrorMessage;
      } else {
        messsage = `${this.config.label} required Minimum ${
          this.config.min
        } Items `;
      }
      error = "min";
    } else if (
      this.config.max &&
      this.value &&
      this.value.length > this.config.max
    ) {
      if (this.config.maxErrorMessage) {
        messsage = this.config.maxErrorMessage;
      } else {
        messsage = `${this.config.label} required Maximum ${
          this.config.max
        } Items `;
      }
      error = "min";
    }
    return {messsage, error};
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isNumberInputValid(): { messsage: string; error: string } {
    let messsage = "";
    let error = "";
    if (this.config.required && this.value == null) {
      if (this.config.requiredErrorMessage) {
        messsage = this.config.requiredErrorMessage;
      } else {
        messsage = `${this.config.label} is required`;
      }
      error = "required";
    } else if (
      this.config.min &&
      this.value != null &&
      this.value < this.config.min
    ) {
      if (this.config.minErrorMessage) {
        messsage = this.config.minErrorMessage;
      } else {
        messsage = `Minimum ${this.config.label} sholud be ${this.config.min}`;
      }
      error = "min";
    } else if (
      this.config.max &&
      this.value != null &&
      this.value > this.config.max
    ) {
      if (this.config.maxErrorMessage) {
        messsage = this.config.maxErrorMessage;
      } else {
        messsage = `Maximum ${this.config.label} sholud be ${this.config.max}`;
      }
      error = "max";
    }
    return {messsage, error};
  }

  isFileInputValid(): { messsage: string; error: string } {
    let messsage = "";
    let error = "";

    if (
      this.config.required &&
      (!this.value || (this.value && this.value.length == 0))
    ) {
      if (this.config.requiredErrorMessage) {
        messsage = this.config.requiredErrorMessage;
      } else {
        messsage = `${this.config.label} is required`;
      }
      error = "required";
    } else if (this.config.min && !this.isFilesSizeMeetMinValidation()) {
      if (this.config.minErrorMessage) {
        messsage = this.config.minErrorMessage;
      } else {
        messsage = `Minimum ${this.config.label} sholud be ${
          this.config.min
        } bytes`;
      }
      error = "min";
    } else if (this.config.max && !this.isFilesSizeMeetMaxValidation()) {
      if (this.config.maxErrorMessage) {
        messsage = this.config.maxErrorMessage;
      } else {
        messsage = `Maximum ${this.config.label} sholud be ${
          this.config.max
        } bytes`;
      }
      error = "max";
    }
    return {messsage, error};
  }

  isFilesSizeMeetMinValidation() {
    const isAllValid = this.value
      .map(file => {
        return file.size >= this.config.min;
      })
      .filter(isValid => isValid);
    return isAllValid.length == this.value.length;
  }

  isFilesSizeMeetMaxValidation() {
    const isAllValid = this.value
      .map(file => {
        return file.size <= this.config.max;
      })
      .filter(isValid => isValid);
    return isAllValid.length == this.value.length;
  }

  getDateOfWeek(weekString: string) {
    const w = Number(weekString.split("-W")[1]);
    const y = Number(weekString.split("-W")[0]);
    var d = 1 + (w - 1) * 7; // 1st of January + 7 days for each week
    return new Date(y, 0, d);
  }

  isDateInputValid(): { messsage: string; error: string } {
    let messsage = "";
    let error = "";
    let selectedDate = new Date(this.value);
    let minDate = new Date(this.config.min);
    let maxDate = new Date(this.config.max);

    if (this.config.type == "time") {
      selectedDate = new Date("0001-01-01T" + this.value);
      minDate = new Date("0001-01-01T" + this.config.min);
      maxDate = new Date("0001-01-01T" + this.config.max);
    }

    if (this.config.type == "week") {
      selectedDate = this.getDateOfWeek(this.value);
      minDate = this.getDateOfWeek(this.config.min);
      maxDate = this.getDateOfWeek(this.config.max);
    }

    if (this.config.required && !this.value) {
      if (this.config.requiredErrorMessage) {
        messsage = this.config.requiredErrorMessage;
      } else {
        messsage = `${this.config.label} is required`;
      }
      error = "required";
    } else if (this.config.min && this.value && selectedDate < minDate) {
      if (this.config.minErrorMessage) {
        messsage = this.config.minErrorMessage;
      } else {
        messsage = `Minimum ${this.config.label} sholud be ${this.config.min}`;
      }
      error = "min";
    } else if (this.config.min && this.value && selectedDate > maxDate) {
      if (this.config.maxErrorMessage) {
        messsage = this.config.maxErrorMessage;
      } else {
        messsage = `Maximum ${this.config.label} sholud be ${this.config.max}`;
      }
      error = "min";
    }
    return {messsage, error};
  }

  constructor() {
  }

  ngOnInit() {
  }

  public writeValue(obj: any) {
    if (obj) {
      this.value = obj;
      this.propagateChange(this.value);
    } else {
      /* Reset Issue Fix */
      if (this.config.type == "checkbox") {
        this.value = [];
        setTimeout(() => {
          this.value = JSON.parse(JSON.stringify(this.config.defaultValue));
          this.propagateChange(this.value);
        });
      } else if (this.config.type == "select") {
        this.value = null;
        setTimeout(() => {
          this.value = JSON.parse(JSON.stringify(this.config.defaultValue));
          this.propagateChange(this.value);
        });
      } else if (this.config.type == "radio") {
        this.value = null;
        setTimeout(() => {
          this.value = JSON.parse(JSON.stringify(this.config.defaultValue));
          this.propagateChange(this.value);
        });
      } else {
        this.value = this.config.defaultValue;
        this.propagateChange(this.value);
      }
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public validate(c: FormControl) {
    const validationError = this.isValid();
    if (validationError.error) {
      const returnValue: any = {};
      returnValue[validationError.error] = validationError.messsage;
      return returnValue;
    }
    return null;
  }

  public registerOnTouched() {
  }

  onChange(event) {
    this.propagateChange(this.value);
  }

  onFileChange($event) {
    this.value = Array.from($event.target.files);
    this.propagateChange(this.value);
  }

  private propagateChange = (_: any) => {
  };

  updateCheckBoxSelection($event) {
    if (this.config.type == "checkbox") {
      const itemIndex = this.value.indexOf($event.target.value);
      if (itemIndex >= 0) {
        this.value.splice(itemIndex, 1);
      } else {
        this.value.push($event.target.value);
      }
      this.propagateChange(this.value);
    } else if (this.config.type == "radio") {
      this.value = $event.target.value;
      this.propagateChange(this.value);
    }
  }
}
